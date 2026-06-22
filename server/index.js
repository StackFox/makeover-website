import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SERVICES } from './data/services.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// In-memory booking store. Swap for a real database in production.
const bookings = [];

/* ---- API routes ---- */
app.get('/api/services', (req, res) => {
  const { category } = req.query;
  const items = category && category !== 'All'
    ? SERVICES.filter((s) => s.category === category)
    : SERVICES;
  res.json(items);
});

app.post('/api/bookings', (req, res) => {
  const { name, phone, service, date, time, notes = '' } = req.body || {};

  const errors = {};
  if (!name || name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!phone || !/^[+]?[\d\s-]{8,15}$/.test(phone.trim())) errors.phone = 'Please enter a valid phone number.';
  if (!service || !SERVICES.some((s) => s.name === service)) errors.service = 'Please select a valid service.';
  if (!date || Number.isNaN(Date.parse(date))) errors.date = 'Please pick a valid date.';
  if (!time) errors.time = 'Please pick a time.';

  if (Object.keys(errors).length) {
    return res.status(422).json({ errors });
  }

  const booking = {
    id: bookings.length + 1,
    reference: `VM-${Date.now().toString(36).toUpperCase()}`,
    name: name.trim(),
    phone: phone.trim(),
    service,
    date,
    time,
    notes: String(notes).trim(),
    createdAt: new Date().toISOString()
  };
  bookings.push(booking);
  res.status(201).json({ message: 'Booking received', reference: booking.reference });
});

app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

/* ---- Serve the built React client in production ---- */
const clientDist = path.resolve(__dirname, '../client/dist');
app.use(express.static(clientDist));
app.get(/^(?!\/api).*/, (req, res, next) => {
  res.sendFile(path.join(clientDist, 'index.html'), (err) => err && next());
});

app.listen(PORT, () => {
  console.log(`Venus Makover API running on http://localhost:${PORT}`);
});

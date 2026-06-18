import { waLink } from '../data/services.js';

export default function WhatsAppFab() {
  return (
    <a
      className="whatsapp-fab"
      href={waLink("Hi Venus Makover! I'd like to book an appointment.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" fill="currentColor">
        <path d="M16 2.7C8.7 2.7 2.8 8.6 2.8 15.9c0 2.3.6 4.6 1.8 6.6L2.7 29.3l7-1.8c1.9 1 4.1 1.6 6.3 1.6 7.3 0 13.2-5.9 13.2-13.2S23.3 2.7 16 2.7zm0 24.1c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4c-1.1-1.8-1.7-3.8-1.7-5.9C5 9.8 9.9 4.9 16 4.9S27 9.8 27 15.9 22.1 26.8 16 26.8zm6-8.2c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1 1.3-.2.2-.4.3-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2.1-.4 0-.6-.1-.2-.8-1.8-1-2.5-.3-.6-.6-.5-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.4z" />
      </svg>
    </a>
  );
}

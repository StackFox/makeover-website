export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__brand">Venus <span>Makover</span></p>
      <p>Where beauty meets artistry.</p>
      <p className="footer__copy">© {new Date().getFullYear()} Venus Makover. All rights reserved.</p>
    </footer>
  );
}

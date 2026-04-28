function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-heading footer-1">
          <h2>About Us</h2>
          <a href="#">Home</a>
          <a href="#innovator">Innovator</a>
        </div>

        <div id="contact" className="footer-heading footer-3">
          <h2>Let's Connect</h2>
          <p className="contactText">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:nanaApeko@gmail.com" className="contact-link">
              nanaApeko@gmail.com
            </a>
          </p>

          <p className="contactText">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+233243015901" className="contact-link">
              +233 243015901
            </a>
          </p>

          <a
            href="https://wa.me/233243015901?text=Hello!%20I%20would%20like%20to%20get%20in%20touch%20with%20JESSITRY%20Entreprise."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
          </a>
        </div>

        <h4>© JESSITRY ENTREPRISE 2025</h4>
      </div>
    </div>
  );
}

export default Footer;
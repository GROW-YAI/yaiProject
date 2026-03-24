import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <h3 className="logo">N.Apeko</h3>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#innovator" onClick={closeMenu}>Innovator</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            id="hamburger"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className="nav-after"></div>
    </>
  );
}

export default Navbar;
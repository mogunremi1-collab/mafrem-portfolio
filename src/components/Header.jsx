
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="MAFREM home">
        MAFREM<span>.</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav
        className={`main-nav ${menuOpen ? 'menu-open' : ''}`}
        aria-label="Main navigation"
      >
        <a href="/" onClick={closeMenu}>Home</a>
        <a href="/about" onClick={closeMenu}>About</a>
        <a href="/#expertise" onClick={closeMenu}>What I Do</a>
        <a href="/#projects" onClick={closeMenu}>Projects</a>
      </nav>

      <a className="header-cta" href="/#contact">
        Let's talk <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

export default Header;

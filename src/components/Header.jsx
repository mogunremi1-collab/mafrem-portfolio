
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="MAFREM home">
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
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
      <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#expertise" onClick={() => setMenuOpen(false)}>What I Do</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
      </nav>

      <a className="header-cta" href="#contact">
        Let's talk <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

export default Header;


function Footer() {
  return (
    <footer className="site-footer">
      <a className="wordmark" href="#home">
        MAFREM<span>.</span>
      </a>

      <p>Ideas into Impact.</p>

      <span>
        © {new Date().getFullYear()} MAFREM. Built with intention.
      </span>
    </footer>
  );
}

export default Footer;

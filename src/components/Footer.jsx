export default function Footer({ personal }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand" href="#home">
          <span className="brand-icon">AG</span>
          {personal.name}
        </a>
        <p>
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

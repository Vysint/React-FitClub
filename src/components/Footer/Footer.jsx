import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a
            href="https://github.com"
            target="__blank"
            rel="noreferrer noopener"
          >
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://instagram.com"
            target="__blank"
            rel="noreferrer noopener"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://linkedin.com"
            target="__blank"
            rel="noreferrer noopener"
          >
            <img src={LinkedIn} alt="Linkedin" />
          </a>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
};

export default Footer;

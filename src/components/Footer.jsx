import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import footerImage from "../assets/fotter.jpeg";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer
      className="footer-main"
      style={{
        backgroundImage: `url(${footerImage})`,
      }}
    >
      <div className="gcover" />
      <div className="container footer-content">
        <div className="footer-left-content">
          <img src={logo} alt="logo" />
          <p className="footer-subtitle">
            We are a collaboration of non-government organisation and
            professionals working to ensure that government spending.
          </p>

          <div className="footer-icons-div">
            <div className="footer-icons">
              <FaTwitter style={{ fontSize: "18px" }} />
            </div>
            <div className="footer-icons">
              <FaLinkedin style={{ fontSize: "18px" }} />
            </div>
            <div className="footer-icons">
              <FaYoutube style={{ fontSize: "18px" }} />
            </div>
          </div>
        </div>
        <div className="footer-right-content">
          <div>
            <h3 className="footer-right-title">Links</h3>
            <p className="footer-right-subtitle">Campaigns</p>
            <p className="footer-right-subtitle">Resources</p>
            <p className="footer-right-subtitle">News</p>
            <p className="footer-right-subtitle">About Us</p>
          </div>
          <div>
            <h3 className="footer-right-title">Resources</h3>
            <p className="footer-right-subtitle">Transparency Toolkit</p>
            <p className="footer-right-subtitle">Evidence</p>
            <p className="footer-right-subtitle">Best Practices</p>
          </div>
          <div>
            <h3 className="footer-right-title">Work with Us</h3>
            <p className="footer-right-subtitle">Contact Us</p>
            <p className="footer-right-subtitle">Join Us</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { links, social } from "./Links";
import { HashLink as Link } from "react-router-hash-link";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4 className="location">Location</h4>
            <li>Twin Towers,</li>
            <li>Kisii Town</li>
            <li>Room TT110, first floor</li>
          </div>
          <div className ="footer-col">
            <h4>Get help</h4>
            <ul>
              <li>
                <a target="_blank" href="https://wa.me/message/KGBFUPECLR7ZE1 ">Enquries</a>
              </li>            
              <li>
                <a target="_blank" href="https://wa.me/message/KGBFUPECLR7ZE1 ">Online order</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick links</h4>
            <ul>
              {links.map((link) => {
                const { url, text, id } = link;
                return (
                  <li key={id}>
                    <Link
                      className="footerLink"
                      to={url === "/service" ? "/#services" : url}
                      smooth
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow us on</h4>
            <div className="footer-media-icons">
              {social.map((link) => {
                const { url, icon, id } = link;
                return (
                  <li key={id}>
                    <a target="_blank" href={url}>{icon}</a>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p>
        Copyright &copy; KDS {new Date().getFullYear()} | All rights reserved.
      </p>
    </div>
  );
};
export default Footer;

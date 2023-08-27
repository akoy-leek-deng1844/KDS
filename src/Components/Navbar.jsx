
import { links, social} from "./Links";
import { FaBars } from 'react-icons/fa';
import { useState, useRef } from "react";
import logo from '.././images/logo.jpeg'
// import { NavLink } from 'react-router-dom';
import { HashLink as NavLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [togglenav, setTogglenav] = useState(false);
  const navref = useRef(null);
  
  const linkStyles = {
    height: togglenav?`${navref.current.getBoundingClientRect().height}px`:'0px'
  }
  const handleToggle = () => {
    setTogglenav(false);
  }

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setTogglenav(!togglenav)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" style={linkStyles}>
          <ul className="links" ref={navref}>
            {links.map((link) => {
              const { id, url, text } = link;

              return (
                <NavLink
                  className="link"
                  onClick={handleToggle}
                  key={id}
                  to={url === "/service" ? "/#services" : url}
                  smooth
                >
                  {text}
                </NavLink>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <a target="_blank" key={id} href={url}>
                {icon}
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar
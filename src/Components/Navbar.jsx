import { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state

  return (
    <div className="navbar">
      {/* Hamburger Icon (Visible only on mobile) */}
      <div className="nav-open" onClick={() => setIsMenuOpen(true)}>
        <MenuOpenIcon className="open" />
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Close Icon Inside Menu */}
        <div className="nav-close" onClick={() => setIsMenuOpen(false)}>
          <CloseIcon className="close" />
        </div>

        <li>
          <AnchorLink
            className="anchor-link"
            href="#home"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            href="#portfolio"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>

      {/* "Connect With Me" Button (Hidden on Mobile) */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

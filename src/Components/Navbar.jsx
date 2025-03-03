import { useState } from "react";
import "./Navbar.css";
import { Link } from "@mui/material";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      {/* <img src=" " alt="Logo" className="logo" /> */}
      <ul className="nav-menu">
        <li>
          <Link underline="none" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </Link>
        </li>
        <li>
          <Link underline="none" href="#about">
            <p onClick={() => setMenu("about")}>About</p>
          </Link>
        </li>
        <li>
          <Link underline="none" href="#portfolio">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </Link>
        </li>
        <li>
          <Link href="#contact" underline="none">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </Link>
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;

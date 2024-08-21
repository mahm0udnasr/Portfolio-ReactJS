import { Link } from "react-router-dom";
import logo from "../data/images/logo.png";
import { navlink } from "../data/dummydata";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
export default function Header() {
  const [menuBtn, setMenuBtn] = useState(false);
  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="mahmoudnasr - Logo" />
          </div>
          <div className={menuBtn ? 'hideMenu' : 'nav'}>
            {navlink.map((link, index) => (
              <Link key={index} to={link.url} onClick={() => setMenuBtn(false)}>
                {link.text}
              </Link>
            ))}
          </div>
          <button className="toggle" onClick={() => setMenuBtn(!menuBtn)}>
            <Menu className="icon"></Menu>
          </button>
        </div>
      </header>
    </>
  );
}

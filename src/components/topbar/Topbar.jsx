import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Hawar.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+45343562</span>
          </div>
          <a href="#" className="email">

          <div className="itemContainer">
            <Mail className="icon" />
              <span>hawar-amir@outlook.com</span>
           

          </div>
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

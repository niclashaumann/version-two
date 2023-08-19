import "./header.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="wrapper-header">
      <div>
        <nav>
          <ul>
            <div className="navigation-header">
              <div className="navigation-logo-header">
                <li>
                  <Link to="/">
                    <img src={Logo} className="logo-header" alt="Logo" />
                  </Link>
                </li>
              </div>
              <div className="navigation-pages-header">
                <li>
                  <Link to="/experiment" className="pages-header">
                    Experiment
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="pages-header">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="pages-header">
                    Contact
                  </Link>
                </li>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

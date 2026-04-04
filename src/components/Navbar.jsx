import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar fade-in">
      <div className="logo">BHANU VERMA</div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active hover-target" : "hover-target"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active hover-target" : "hover-target"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "active hover-target" : "hover-target"
            }
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

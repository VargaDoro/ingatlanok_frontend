import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <nav className="">
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link  active" : "nav-link "
            }
          >
            Összes ingatlan
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/ujingatlan"
            className={({ isActive }) =>
              isActive ? "nav-link  active" : "nav-link "
            }
          >
            Új ingatlan
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
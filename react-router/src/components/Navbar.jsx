import { Link, NavLink } from "react-router-dom";
import "../App.css";

const NavLinkData =
  [{ id: 1, path: "/", text: "Home" },
  { id: 2, path: "/Products", text: "Products" },
  { id: 3, path: "/AddProducts", text: "AddProducts" },
  { id: 4, path: "/Edit", text: "Edit" },
  { id: 5, path: "/Login", text: "Login" }];

function Navbar() {
  return (
    <div className="navbar">
      {NavLinkData.map((el, i) => (
        <nav key={el.id}>
          <NavLink to={el.path}>{el.text}</NavLink>
        </nav>
      ))}
    </div>
  );
}

export default Navbar;

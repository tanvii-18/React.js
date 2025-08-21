import React from "react";
import { NavLink } from "react-router-dom";
import "../style/home.css";
import { IoPerson } from "react-icons/io5";
import { HiMiniHeart } from "react-icons/hi2";
import { AiFillHome } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";
import { SiMediafire } from "react-icons/si";


const navigation = [
  { id: 1, path: "/",icon: <AiFillHome />,text: "Home" },
  { id: 2, path: "/Trendings",icon:<SiMediafire /> , text: "Trendings" },
  { id: 3, path: "/NewRelease",icon:<IoAddCircleOutline /> , text: "New Release" },
  { id: 4, path: "/Artists",icon:<IoPerson /> , text: "Artists" },
  { id: 5, path: "/Favourites",icon:<HiMiniHeart /> , text: "Favourites" },
];

function Browse() {
  return (
    <div className="navigation">
      <h2>Browser</h2>

      <div className="features">
        {navigation.map((el, i) => (
          <nav key={el.id}>
            <NavLink to={el.path} className="nav-item">
              <span className="icon">{el.icon}</span>
              <span className="text">{el.text}</span>
              </NavLink>
          </nav>
        ))}
      </div>
    </div>
  );
}

export default Browse;

import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoHeadset } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { HiMiniHeart } from "react-icons/hi2";
import { TbMoodSpark } from "react-icons/tb";

const features = [
  { icon: <FiSearch />, label: "Discover" },
  { icon: <IoHeadset />, label: "Songs" },
  { icon: <IoPerson />, label: "Artist" },
  { icon: <HiMiniHeart />, label: "Favourite" },
];

function Browse() {
  return (
    <div className="left-section">
      <h2>Browse</h2>

      <div className="features">
        {features.map((item, i) => {
          return (
            <h3 key={i}>
              {item.icon}
              {item.label}
            </h3>
          );
        })}
      </div>

      <div className="moodBoard">
        <h3>
          Mood Board <TbMoodSpark />
        </h3>
        <ul>
          <li>
            <a href="">Lo-Fi feels</a>
          </li>{" "}
          {/*Chill & Relax*/}
          <li>
            <a href="">pure Sunshine</a>
          </li>{" "}
          {/*Happy*/}
          <li>
            <a href="">Cry in Aesthetic</a>
          </li>{" "}
          {/*sad*/}
          <li>
            <a href="">Blush beats(love)</a>
          </li>{" "}
          {/*romantic*/}
          <li>
            <a href="">Dance ‘til Sunrise</a>
          </li>{" "}
          {/*party*/}
        </ul>
      </div>
    </div>
  );
}

export default Browse;

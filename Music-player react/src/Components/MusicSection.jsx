import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";

function MusicSection() {
  return (
    <div className="right-section">
      {/* whole navigation bar */}
      <div className="navigation">
        {/* searching purpose song,singer,podcast */}
        <div className="search-cont">
          <FiSearch style={{ fontSize: "20px" }} />
          <input type="search" name="" id="" placeholder="Search Music" />
        </div>

        <div className="profile-cont">
          <IoNotifications style={{ fontSize: "40px", color: "#82b8e3" }} />
          <button>LogIn</button>
        </div>
      </div>
    </div>
  );
}

export default MusicSection;

import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";

const songs = [
  {
    id: 1,
    img: "https://c.saavncdn.com/795/Pardesiya-From-Param-Sundari-Hindi-2025-20250729184535-500x500.jpg",
    title: "Pardesiya",
    singer: "by Sonu Nigam, Krishnakali Saha, Sachin-Jigar, Amitab...",
  },
  {
    id: 2,
    img: "https://a10.gaanacdn.com/gn_img/albums/4Z9bqZoKyQ/Z9bq0qYXWy/size_m_1713881663.jpg",
    title: "Bairiyaa",
    singer: "Atif Aslam,Shreya Ghoshal,Sachin-Jigar",
  },
  {
    id: 3,
    img: "https://a10.gaanacdn.com/gn_img/albums/2lV3dl13Rg/V3dZyBnLbR/size_l.jpg",
    title: "Paro",
    singer: "Aditya Rikhari",
  },
  {
    id: 4,
    img: "https://a10.gaanacdn.com/gn_img/albums/Rz4W8vKxD5/4W87PAOO3x/size_m.jpg",
    title: "Pehle Bhi Main",
    singer: " Vishal Mishra, Raj Shekhar",
  },
  {
    id: 5,
    img: "https://c.saavncdn.com/140/Sahiba-Hindi-2023-20231213191015-500x500.jpg",
    title: "Sahiba",
    singer:
      " Jasleen Royal, Vijay Deverakonda, Priya Saraiya, Stebin Ben, Radhikka Madan, Aditya Sharma",
  }
];

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

      <div className="song-suggestion">
        <h2>New Release</h2>

        <div className="songs-cont">
          {
          songs.map((el,i)=>(
            <div key={i} className="song-card">
            <img src={el.img} alt="" />
            <h3>{el.title}</h3>
            <p>{el.singer}</p></div>
          ))
          }
        </div>

        <div className="space"></div>
      </div>
    </div>
  );
}

export default MusicSection;

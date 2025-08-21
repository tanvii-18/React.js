import React from "react";
import Search from "../search";


const moodBoard =[
  {text:"Lo-Fi feels",src:"https://i.pinimg.com/originals/05/95/09/059509584519edd8c330f33b8ba3b0aa.jpg"},
  {text:"pure Sunshine",src:""},
  {text:"Cry in Aesthetic",src:""},
  {text:"Blush beats(love)",src:""},
  {text:"Dance ‘til Sunrise",src:""}
]

function Home() {
  return (
    <div>
      <Search />

      <div className="main-box">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
      </div>

      <div className="curently-playing">
        <div className="song-details">
        <img src="" alt="" /></div>
      </div>
    </div>
  );
}

export default Home;

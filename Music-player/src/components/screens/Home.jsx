import React, { useState, useEffect } from "react";
import Search from "../search";
import SongBox from "../songUi";

function Home() {
  const [songData, setSongData] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setSongData(data.playlist));
  }, []);

  return (
    <div>
      <Search />

      <div className="main-box">
        {songData.map((el, i) => (
          <SongBox
            key={el.id}
            title={el.title}
            cover={el.cover}
            singer={el.singer}
            onClick={() => setCurrentSong(el)}
          />
        ))}
      </div>

      {currentSong && (
        <div className="curently-playing">
          <div className="song-details">
            <img src={currentSong.cover} alt={currentSong.title} width={60} />
            <div>
              <h3>{currentSong.title}</h3>
              <p>{currentSong.singer}</p>
            </div>
          </div>
          <audio src={currentSong.src} controls autoPlay />
        </div>
      )}
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import Search from "../search";
import SongBox from "../songUi";

function Home() {
  const [songData, setSongData] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setSongData(data.playlist);
      });
  }, []);

  const playSong = (index) => {
    setCurrentIndex(index);
    setCurrentSong(songData[index]);
  };

  const playNext = () => {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % songData.length;
      setCurrentIndex(nextIndex);
      setCurrentSong(songData[nextIndex]);
    }
  };

  const playPrev = () => {
    if (currentIndex !== null) {
      const prevIndex =
        currentIndex === 0 ? songData.length - 1 : currentIndex - 1;
      setCurrentIndex(prevIndex);
      setCurrentSong(songData[prevIndex]);
    }
  };

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
            onClick={() => playSong(i)}
          />
        ))}
      </div>

      {currentSong && (
        <div className="curently-playing">
          <div className="song-details">
            <img src={currentSong.cover} alt={currentSong.title} width={60} />
            
              <h3>{currentSong.title}</h3>
              <p>{currentSong.singer}</p>
          
          </div>

          <audio src={currentSong.src} controls autoPlay />
          <button onClick={playPrev}>⏮ Prev</button>
          <button onClick={playNext}>⏭ Next</button>
        </div>
      )}
    </div>
  );
}

export default Home;

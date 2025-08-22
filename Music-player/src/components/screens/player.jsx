import React, { useState, useEffect, useRef } from "react";
import SongBox from "../songUi.jsx";
import Search from "../search.jsx";
import "../../style/home.css";
import { useFavourites } from "../../context/FavouritesContexts.jsx";

function Player({ songs, title }) {
  const savedIndex = localStorage.getItem("currentIndex");
  const [currentIndex, setCurrentIndex] = useState(
    savedIndex !== null ? Number(savedIndex) : null
  );
  const [currentSong, setCurrentSong] = useState(
    savedIndex !== null ? songs[Number(savedIndex)] : null
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    if (currentIndex !== null) {
      localStorage.setItem("currentIndex", currentIndex);
      setCurrentSong(songs[currentIndex]);
      setIsPlaying(true);
    }
  }, [currentIndex, songs]);

  const playSong = (index) => {
    setCurrentIndex(index); 
  };

  const playNext = () => {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % songs.length;
      setCurrentIndex(nextIndex);
    }
  };

  const playPrev = () => {
    if (currentIndex !== null) {
      const prevIndex =
        currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
      setCurrentIndex(prevIndex);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const { favourites, toggleFavourite } = useFavourites();
  const isFav = currentSong
    ? favourites.some((fav) => fav.id === currentSong.id)
    : false;

  return (
    <div className="main-container">

      {title && <h2>{title}</h2>}

      <div className="main-box">
        {songs.map((song, i) => (
          <SongBox
            key={song.id}
            title={song.title}
            cover={song.cover}
            singer={song.singer}
            onClick={() => playSong(i)}
          />
        ))}
      </div>

      {currentSong && (
        <div className="curently-playing">
          <div className="song-details">
            <img src={currentSong.cover} alt={currentSong.title} width={60} />
            <div className="songText">
              <h3>{currentSong.title}</h3>
              <p>{currentSong.singer}</p>
            </div>
            <div className="controls">
              <button onClick={playPrev}>⏮</button>
              <button onClick={togglePlayPause}>{isPlaying ? "⏸" : "▶"}</button>
              <button onClick={playNext}>⏭</button>

              <button onClick={() => toggleFavourite(currentSong)}>
                {isFav ? "Remove" : "❤️ Like"}
              </button>
            </div>
          </div>

          <audio
            ref={audioRef}
            src={currentSong.src}
            autoPlay
            onEnded={playNext}
          />
        </div>
      )}
    </div>
  );
}

export default Player;

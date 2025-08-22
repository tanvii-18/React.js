import React from "react";
import "../../style/screens.css";
import songsData from "../../../public/db.json";
import SongBox from "../songUi";

const TrendingSongs = () => {

  const trending = songsData.playlist.filter((song) => song.Trending);

  return (
    <div className="trendings">
      <h2>Trending Songs</h2>
      <div className="main-box">
        {trending.map((song) => (
          <SongBox
            key={song.id}
            title={song.title}
            cover={song.cover}
            singer={song.singer}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingSongs;

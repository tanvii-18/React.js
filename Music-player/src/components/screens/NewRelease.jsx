import React from 'react'
import "../../style/screens.css";
// import songsData from "../../../public/db.json";
import SongBox from "../songUi";

function NewRelease() {

  const newRelease = songsData.playlist.filter((song) => song.IsNew);

  return (
    <div className='newSongs'>
      <h2>New Release</h2>

      <div className="main-box">
        {newRelease.map((song) => (
          <SongBox
            key={song.id}
            title={song.title}
            cover={song.cover}
            singer={song.singer}
          />
        ))}
      </div>

    </div>
  )
}

export default NewRelease
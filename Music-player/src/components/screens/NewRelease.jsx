import React from "react";
import "../../style/screens.css";
import songsData from "../../../public/db.json";
import Player from "../screens/player";

function NewRelease() {
  const newRelease = songsData.playlist.filter((song) => song.IsNew);

  return <Player songs={newRelease} title="New Releases" />;
}

export default NewRelease;
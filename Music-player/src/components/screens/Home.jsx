import React, { useState, useEffect, useRef } from "react";
import "../../style/home.css";
import Player from "./player";
import Search from "../search";

function Home() {
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setSongData(data.playlist));
  }, []);

  return (
    <>
    <Search />
      <Player songs={songData} title="All Songs" />
    </>
  );
}

export default Home;

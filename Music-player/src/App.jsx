import { useState } from "react";
import "./style/home.css";
import Browse from "./components/Browse";
import { Route, Routes } from "react-router-dom";
import Trending from "./components/screens/Trending";
import NewRelease from "./components/screens/NewRelease";
import Artists from "./components/screens/Artists";
import Favourites from "./components/screens/Favourites";
import Home from "./components/screens/Home";


function App() {
  return (
    <div className="main">
      <div className="browse">
        <Browse />
      </div>

      <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Trendings" element={<Trending />} />
            <Route path="/NewRelease" element={<NewRelease />} />
            <Route path="/Artists" element={<Artists />} />
            <Route path="/Favourites" element={<Favourites />} />
            <Route
              path="*"
              element={
                <h2 style={{ color: "red", textAlign: "center" }}>
                  404 Not Found
                </h2>
              }
            />
          </Routes>
      </div>
    </div>
  );
}

export default App;

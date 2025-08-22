import React from "react";
import { useFavourites } from "../../context/FavouritesContexts"; 
import Player from "./player";

function Favourites() {
  const { favourites } = useFavourites();

  return (
    <div className="main-container">
      {favourites.length === 0 ? (
        <p style={{textAlign:"center",
          marginTop:"10px"
        }}>Oh, No favourites yet !</p>
      ) : (
       <Player songs={favourites} title="My Favourites" />
      )}
    </div>
  );
}

export default Favourites; 

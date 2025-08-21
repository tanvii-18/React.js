const SongBox = ({ title, cover ,singer }) => {
  return (
    <div className="song-box">
      <img src={cover} alt="" />
      <h3 style={{fontSize:"16px"}}>{title}</h3>
      <p style={{fontSize:"10px"}}>{singer}</p>
    </div>
  );
};

export default SongBox;


  // ,
  // "Artist": [
  //   {
  //     "id": "01",
  //     "name": "Arijit Singh",
  //     "songs": [
  //       "public/songs/Bekhayali Kabir Singh 128 Kbps.mp3",
  //       "public/songs/Daayre Dilwale 128 Kbps.mp3",
  //       "public/songs/Tenu Sang Rakhna Jigra 128 Kbps.mp3",
  //       ""
  //     ],
  //     "poster": ""
  //   },
  //   {
  //     "id": "02",
  //     "name": "Lana Del Rey",
  //     "songs": [
  //       "public/songs/Diet-Mountain-Dew.mp3",
  //       "public/songs/Lana_Del_Rey_-_Young_And_Beautiful_CeeNaija.com_.mp3"
  //     ],
  //     "poster": ""
  //   }
  // ]
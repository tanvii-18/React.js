function SongBox({ title, cover, singer, onClick}) {

  return (
    <div className="song-box">
      <img src={cover} alt={title} onClick={onClick} />
      <h3 style={{ fontSize: "16px" }}>{title}</h3>
      <p style={{ fontSize: "10px" }}>{singer}</p>
    </div>
  );
}

export default SongBox;

function Navbar() {
    return (<div>
    <h3
      style={{
        margin: 0,
        padding: "1.2rem 10px",
        borderBlockEnd: "1px solid rgb(201, 201, 201)",
        color: "rgb(160, 160, 160)",
        fontSize: "14px",
        fontFamily: '"Raleway", sans-serif',
        fontWeight:400
      }}
    >
      <i class="fa-solid fa-arrow-left" style={{ marginRight: "10px" }}></i>
      BACK TO ALL PLANTS
      <div
        className="like-btn"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "end",
          margin: 0,
          paddingRight: "10px",
        }}
      >
        <i
          class="fa-regular fa-heart"
          style={{
            position: "absolute",
            top: "-15px",
            fontSize: "18px",
            color: "black",
          }}
        ></i>
      </div>
    </h3>
  </div>);
}

export default Navbar
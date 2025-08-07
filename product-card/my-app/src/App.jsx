import Navbar from "./Navbar";

function App() {
  return (<div
    className="product-card"
    style={{
      height: 410,
      width: "60%",
      transform: "translate(-50%,-50%)",
      position: "absolute",
      top: "50%",
      left: "50%",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
      margin: 0,
      fontFamily: '"Raleway", sans-serif'
    }}
  >
    <Navbar />
    <div className="img-detail-cont" style={{ display: "flex" }}>
      <div
        className="image"
        style={{
          height: 350,
          width: "42%",
          borderRight: "1px solid rgb(201, 201, 201)",
        }}
      >
        <img
          src="/image/plant-img.avif"
          alt=""
          style={{ height: 300, width: "90%", margin: "auto" }}
        />
      </div>
      <div className="product-details" style={{ margin: "25px", width: "55%" }}>
        <h3 style={{ margin: 0, padding: 0, fontSize: "25px", fontWeight:500 }}>
          CLASSIC PEACE LILY   
        </h3>
        <span style={{ fontSize: "12px", color: "rgb(56, 56, 56)" }}>
          POPULAR HOUSE PLANT
        </span>
        <h4 style={{ marginTop: "12px", padding: 0, fontSize: "25px", fontWeight:500 }}>$18</h4>
        <p
          style={{
            fontSize: "12px",
            wordSpacing: "2px",
            color: "rgb(142, 142, 142)",
          }}
        >
          Bring peace and purity to your space with the Classic Peace Lily
          Plant. Known for its graceful white blooms and lush green foliage,
          this elegant indoor plant not only adds a refreshing touch to your
          decor but also purifies the air naturally.
        </p>
        <button
          style={{
            padding: "12px",
            backgroundColor: "transparent",
            border: "1px solid gray",
            margin: "5% 5% 0 0",
          }}
        >
          ADD TO CART
        </button>
        <button
          style={{
            padding: "12px",
            backgroundColor: "transparent",
            border: "1px solid gray",
            margin: "5% 0 0 0",
          }}
        >
          WISHLIST
        </button>
      </div>
    </div>
  </div>);
}

export default App;

import { useEffect, useState } from "react";
import "../style/product.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function Products() {
  const [product, setProduct] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [category, setCategory] = useState("");
  const success = () => toast("Data fetched !");
  const failed = () => toast("Data not fetched !");

  const getDataFromServer = async () => {
    try {
      const res = await axios.get("http://localhost:3000/Products");
      setProduct(res.data);
      success()
      // console.log(data)
    } catch (error) {
      console.log(error);
      failed()
      // toast.error("data didn't fetched !")
    }
  };

  useEffect(() => {
    getDataFromServer();
  }, []);

  const filteredProducts = product
    .filter((el) => !category || el.category === category)
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <h1>Products</h1>

      <div className="filtering">
        <h5>Filter </h5>
        <select onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="">All</option>
          <option value="Jacket">Jacket</option>
          <option value="Bag">Bag</option>
          <option value="T-shirt">T-shirt</option>
          <option value="Tv">Tv</option>
        </select>
        <br />
        <br />
        <h5>Sort (by price) </h5>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Default</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
        <br /> <br />
        <h5>Catagory</h5>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Male</option>
          <option value="">Female</option>
          <option value="">electronics</option>
        </select>
      </div>

      <div className="container">
        {filteredProducts.map((el, i) => {
          return (
            <div className="product" key={i}>
              <div className="image">
                <Link to={`/Description/${el.id}`}>
                  <img src={el.image} alt={el.title} />{" "}
                </Link>
              </div>
              <div className="details">
                <h2 className="title">{el.title}</h2>
                <h3 className="price">$ {el.price}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;

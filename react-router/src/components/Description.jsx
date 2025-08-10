import axios from "axios";
import { useEffect, useState } from "react";
import "../style/description.css";
import React from "react";
import { useParams } from "react-router-dom";

function Description() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getDataFromServer = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/Products/${id}`);
      setProduct(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <div>
      <div className="desc-product">
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="details">
          <h2 className="title">{product.title}</h2>
          <h3 className="price">$ {product.price}</h3>
          <p>
            <strong>Description :</strong> {product.description}
          </p>
          <button>AddToCart</button>
        </div>
      </div>
    </div>
  );
}

export default Description;

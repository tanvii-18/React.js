import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function dataFromServer() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const serverData = await res.json();
        setData(serverData);
      } catch (error) {
        console.log(error);
      }
    }
    dataFromServer();
  }, []);

  return (
    <div className="card-container">
      {data.map((el, i) => {
        return (
          <Card className="card">
            <Card.Img
              variant="top"
              src={el.image}
              className="card-image"
            />
            <Card.Body className="info">
              <Card.Title>{el.title}</Card.Title>
              <Card.Title>{el.price}</Card.Title>
              <Card.Text className="description">{el.description}</Card.Text>
              <Button variant="primary">Add-To-Cart</Button>
            </Card.Body>
          </Card>
        );
      })}
      ;
    </div>
  );
}

export default App;

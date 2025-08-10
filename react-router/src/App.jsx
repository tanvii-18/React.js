import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import AddProducts from "./components/AddProducts";
import Edit from "./components/Edit";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import Description from "./components/Description";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/AddProducts" element={<AddProducts />} />
      <Route path="/Edit" element={<Edit />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Description/:id" element={<Description />} />
      <Route path="*" element={<h1 style={{color:'red'}}>404 not found</h1>} />
    </Routes>
    </>
  );
}

export default App;

import "./HomePage.css";
import { Header } from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsGrid from "./ProductsGrid";
export const HomePage = ({ cart , loadCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getHomeData() {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart}  />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
};

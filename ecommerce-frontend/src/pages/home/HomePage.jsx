import "./HomePage.css";
import { Header } from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsGrid from "./ProductsGrid";
export const HomePage = ({ cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
};

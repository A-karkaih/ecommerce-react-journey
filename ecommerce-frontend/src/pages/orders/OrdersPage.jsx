import "./OrdersPage.css";
import { Header } from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

import OrderGrid from "./OrderGrid";
export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("/api/orders?expand=products").then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  }, []);

  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrderGrid orders={orders} />
      </div>
    </>
  );
}

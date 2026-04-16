import "./App.css";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { HomePage } from "./pages/home/HomePage";
import { TrackingPage } from "./pages/tracking/TrackingPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((res) => {
      setCart(res.data);
    });
  });

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;

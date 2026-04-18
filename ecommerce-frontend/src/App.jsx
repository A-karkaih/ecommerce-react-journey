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
   const loadCart = async () => {
      const res = await axios.get("/api/cart-items?expand=product");
      setCart(res.data);
    };
  useEffect(() => {
 
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart}  loadCart={loadCart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="/orders" element={<OrdersPage cart={cart} />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;

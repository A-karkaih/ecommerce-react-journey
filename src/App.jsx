import "./App.css";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import { HomePage } from "./pages/home/HomePage";
import { Routes, Route } from "react-router";
function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;

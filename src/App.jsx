import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { Routes, Route } from "react-router";
function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<h1>Checkout Page</h1>} />
    </Routes>
  );
}

export default App;

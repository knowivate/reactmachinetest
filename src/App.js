import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Clock from "./components/Clock";
import Products from "./components/Products";
import Register from "./components/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="clock" element={<Clock />} />
          <Route path="products" element={<Products />} />
          <Route path="register" element={<Register />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

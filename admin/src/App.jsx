import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sitebar from "./components/sitebar/Sitebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import Order from "./pages/orders/Order";
const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app_content">
        <Sitebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

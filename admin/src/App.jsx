import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sitebar from "./components/sitebar/Sitebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import Order from "./pages/orders/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const App = () => {
  const url = "http://localhost:4000";

  return (
    <div>
      <Navbar />
      <hr />
      <div className="app_content">
        <Sitebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Order url={url} />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;

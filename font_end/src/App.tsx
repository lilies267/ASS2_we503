import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/userLayout";
import Homepage from "./pages/homepage";
import ProductDetail from "./pages/detail";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import ProductUpdate from "./pages/productUpdate";
import AdminLayout from "./components/admin";
import ProductAdd from "./pages/productAdd";

// 1. Khai bao router

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Homepage />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="product/add" element={<ProductAdd />} />
          <Route path="product/:id" element={<ProductUpdate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

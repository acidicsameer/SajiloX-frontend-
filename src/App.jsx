import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.jsx";
import Home from "./pages/home/Home.jsx";
import AppLayout from "./components/Layout/AppLayout.jsx";
import Login from "./pages/auth/login/Login.jsx";
import Register from "./pages/auth/register/Register.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
         
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

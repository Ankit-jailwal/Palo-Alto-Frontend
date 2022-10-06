import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Home from "./Pages/home";
import AuthController from "./Pages/authController";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/login" element={Login}/>
        <Route exact path="/register" element={Register} />
        <Route
          path="/"
          element={(props) => (
            <AuthController {...props}>
              <Route exact path="/" element={Home} />
            </AuthController>
          )}
        />
        <Route path="*" element={<Navigate replace to = "/login"/>} />
      </Routes>
    </HashRouter>
  );
};

export default Router;

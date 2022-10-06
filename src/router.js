import React from "react";
import { HashRouter, Redirect, Switch, Route } from "react-router-dom";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Home from "./Pages/home";
import AuthController from "./Pages/authController";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" element={Login}/>
        <Route exact path="/register" element={Register} />
        <Route path="*" element={<Redirect replace to = "/login"/>} />
        <Route
          path="/"
          element={(props) => (
            <AuthController {...props}>
              <Route exact path="/" element={Home} />
            </AuthController>
          )}
        />
      </Switch>
    </HashRouter>
  );
};

export default Router;

import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Home from "./Pages/home";
import AuthController from "./Pages/authController";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route
          path="/"
          component={(props) => (
            <AuthController {...props}>
              <Route path="/" component={Home} exact />
            </AuthController>
          )}
        />
      </Switch>
    </HashRouter>
  );
};

export default Router;
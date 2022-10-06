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
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register} />
        <Route
          path="/"
          element={(props) => (
            <AuthController {...props}>
              <Route exact path="/" component={Home} />
            </AuthController>
          )}
        />
      </Switch>
    </HashRouter>
  );
};

export default Router;

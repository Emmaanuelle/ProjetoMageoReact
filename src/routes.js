import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cadastro from "./pages/Cadastro";

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Login</h1>} />
      <Route path="/cadastro" component={Cadastro} />
      <PrivateRoute path="/questoes" component={() => <h1>Questoes</h1>} />
      <PrivateRoute path="/ranking" component={() => <h1>Ranking</h1>} />
      <PrivateRoute path="/user" component={() => <h1>User</h1>} />
      <PrivateRoute path="/app" component={() => <h1>App</h1>} />
      <Route path="*" component={() => <h1>Página não encontrada!</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
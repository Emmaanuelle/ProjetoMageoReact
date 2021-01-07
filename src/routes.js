import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Ajuda from "./pages/Ajuda";
import Sobre from "./pages/Sobre";
import ExploreMais from "./pages/ExploreMais";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Questao from "./pages/Questoes";
import Quiz from "./pages/Quiz";
import ErrorPage from "./pages/Error";


import { isAuthenticated} from "./services/auth";
import Categorias from "./pages/Categorias";
import QuizReserva from "./pages/Quiz/QuizReserva";

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
      
      
      <Route exact path="/" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <PrivateRoute path="/quiz" component={QuizReserva} />
      <PrivateRoute path="/quiz2" component={Quiz}/>
      <PrivateRoute path="/ajuda" component={Ajuda} />
      <PrivateRoute path="/sobre" component={Sobre} />
      <PrivateRoute path="/explore" component={ExploreMais} />
      <PrivateRoute path="/categorias" component={Categorias} />
      <PrivateRoute path="/questao" component={Questao} />
      <PrivateRoute path="/ranking" component={Ranking} />
      <PrivateRoute path="/perfil" component={Perfil} />
      <PrivateRoute path="/home" component={Home} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
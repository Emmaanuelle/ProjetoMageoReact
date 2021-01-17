import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Ajuda from "./pages/Ajuda";
import Sobre from "./pages/Sobre";
import ExploreMais from "./pages/ExploreMais";
import CadastroUsuario from "./pages/CadastroUsuario";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import LoginAdmin from "./pages/LoginAdmin";
import Perfil from "./pages/Perfil";
import Questao from "./pages/Questoes";
import Quiz from "./pages/Quiz";
import ErrorPage from "./pages/Error";
import PaginaInicial from "./pages/PaginaInicial";
import CadastroAdmin from "./pages/CadastroAdmin";


import { isAuthenticated} from "./services/auth";

import QuizReserva from "./pages/Quiz/QuizReserva";
import LoginUsuario from "./pages/LoginUsuario";

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
      
      
      
      <Route exact path="/" component={PaginaInicial} />
      <Route path="/loginUsuario" component={LoginUsuario}/>
      <Route path="/cadastroUsuario" component={CadastroUsuario} />
      <Route path="/loginAdmin" component={LoginAdmin} />
      <Route path="/cadastroAdmin" component={CadastroAdmin}/>
      <PrivateRoute path="/quiz2" component={QuizReserva} />
      <PrivateRoute path="/quiz" component={Quiz}/>
      <PrivateRoute path="/ajuda" component={Ajuda} />
      <PrivateRoute path="/sobre" component={Sobre} />
      <PrivateRoute path="/explore" component={ExploreMais} />
      <PrivateRoute path="/questao" component={Questao} />
      <PrivateRoute path="/ranking" component={Ranking} />
      <PrivateRoute path="/perfil" component={Perfil} />
      <PrivateRoute path="/home" component={Home} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
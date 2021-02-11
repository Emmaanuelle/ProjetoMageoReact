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
import Questao from "./pages/criarQuestoes";
import Quiz from "./pages/Quiz";
import ErrorPage from "./pages/Error";
import PaginaInicial from "./pages/PaginaInicial";
import CadastroAdmin from "./pages/CadastroAdmin";
import { isAuthenticated} from "./services/auth";
import QuizReserva from "./pages/Quiz/QuizReserva";
import Desafio from "./pages/Quiz/Fases/desafio";
import LoginUsuario from "./pages/LoginUsuario";
import HomeAdministrador from "./pages/HomeAdministrador";
import PerfilAdmin from "./pages/PerfilAdmin";
import ListarQuestao from "./pages/ListarQuestao";
import Desempenho from "./pages/Desempenho";/* 
import Tabela from "./pages/ListarQuestao/tabela"; */
import SobreAdmin from "./pages/SobreAdmin";
import AjudaAdmin from "./pages/AjudaAdmin";
import FaseQuadrado from "./pages/Quiz/Fases/FaseQuadrado";
import FaseRetangulo from "./pages/Quiz/Fases/FaseRetangulo";
import FaseTriangulo from "./pages/Quiz/Fases/FaseTriangulo";
import FaseCirculo from "./pages/Quiz/Fases/FaseCirculo";




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
      {/* <Route path="/esqueceuASenha"component={EsqueceuaSenha}/> */}
      <Route path="/cadastroUsuario" component={CadastroUsuario} />
      <Route path="/loginAdmin" component={LoginAdmin} />
      <Route path="/cadastroAdmin" component={CadastroAdmin}/>
      <PrivateRoute path="/quiz2" component={QuizReserva} />
      <PrivateRoute path="/quiz" component={Quiz}/>
      <PrivateRoute path="/ajuda" component={Ajuda} />
      <PrivateRoute path="/ajudaAdmin" component={AjudaAdmin} />
      <PrivateRoute path="/sobre" component={Sobre} />
      <PrivateRoute path="/sobreAdmin" component={SobreAdmin} />
      <PrivateRoute path="/explore" component={ExploreMais} />
      <PrivateRoute path="/questao" component={Questao} />
      <PrivateRoute path="/faseQuadrado" component={FaseQuadrado}/>
      <PrivateRoute path="/faseRetangulo" component={FaseRetangulo}/>
      <PrivateRoute path="/faseTriangulo" component={FaseTriangulo}/>
      <PrivateRoute path="/faseCirculo" component={FaseCirculo}/>
      <PrivateRoute path="/listarQuestao" component={ListarQuestao} />
      <PrivateRoute path="/ranking" component={Ranking} />
      <PrivateRoute path="/desempenho" component={Desempenho} />
      <PrivateRoute path="/perfil" component={Perfil} />
      <PrivateRoute path="/perfilAdmin" component={PerfilAdmin} />
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/desafio" component={Desafio}/>
     {/*  <PrivateRoute path="/tabela" component={Tabela} /> */}
    
      <PrivateRoute path="/homeAdmin" component={HomeAdministrador}/>
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
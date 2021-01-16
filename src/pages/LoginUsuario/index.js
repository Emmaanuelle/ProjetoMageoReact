import React , { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import {login} from "../../services/auth";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReactLoading from 'react-loading';
import logo from '../../images/icons/logo.svg'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#FFFFFF",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color:"white",
    background:"#3B82F6",
  },
}));

export default function LoginUsuario() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [carregar,setCarregando] = useState(false);
  const history = useHistory();
  
  async function fazerLogin(e) {
    
    e.preventDefault();
    
    const data = { email, senha };
    try {
          localStorage.setItem('email',email)
          setCarregando(true);
          const resposta = await api.post("/login", data);
          login(resposta.data.token)
          alert("Login Realizado com Sucesso");
          history.push("/home");
      } catch (error) {
          //console.log(error.response.data.message.error)
          console.log(error.response.data)
          //setError(error.response.data.message.error)
          if(error.response.status===400){
          setError(error.response.data.message.error);
          }else{
          setError("Senha Incorreta");
          }
      }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={logo}/>
        </Avatar>
        <Typography component="h1" variant="h5">
          MaGeo
        </Typography>                   

        <form className={classes.form} onSubmit={fazerLogin} noValidate>            
        {carregar && !error?<ReactLoading className='loading' type={"bubbles"} color={'#36BD8C'} height={'20%'} width={'20%'} />:<></>}
            {error && <p className='error'>{error}</p>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Digite o seu Email"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>
          <Grid container justify="center" alignItems="center">
              <Link to='/cadastroUsuario'>
                Fazer Cadastro
            </Link>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
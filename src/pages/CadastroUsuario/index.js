import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReactLoading from 'react-loading';
import logo from '../../images/icons/logo.svg'
import { MenuItem, Select, InputLabel,} from "@material-ui/core";


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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color:"white",
    background:"#3B82F6",
  },
  tamanhoselectano:{
    minWidth:394,

  }
}));

export default function CadastroUsuario() {
  const classes = useStyles();
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setdataNascimento] = useState("");
  const[ano_escolar,setAno_escolar]= useState("")
  const[escola, setEscola] = useState("")
  const [error, setError] = useState("");
  const [carregar,setCarregando] = useState(false);

  const history = useHistory();


  async function cadastrar(e) {

    e.preventDefault();

    const data = { nome, sobrenome,email, senha, dataNascimento, ano_escolar, escola };
    try {
      setCarregando(true);
      await api.post("/user", data)
      alert("Cadastro Realizado com Sucesso")
      history.push("/");
    } catch (error) {
      console.log(error.response.status);
      console.log(error.response)
      if(error.response.status === 400){
        setError(error.response.data.message.error)
      }else{
        setError("Houve Problema ao realizar o cadastro")
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
          Cadastro
        </Typography>
        {carregar && !error?<ReactLoading className='loading' type={"bubbles"} color={'orange'} height={'20%'} width={'40%'} />:<></>}
        <form className={classes.form} onSubmit={cadastrar}>
        {error && <p className='error'>{error}</p>}
        
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nome"
                autoFocus
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="sobrenome"
                label="Sobrenome"
                name="sobrenome"
                autoComplete="lname"
                value={sobrenome}
                onChange={e => setSobrenome(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="dataNascimento"
                label="dataNascimento"
                type="date"
                autoComplete="dataNascimento"
                value={dataNascimento}
                onChange={e => setdataNascimento(e.target.value)}
              />
            </Grid>
           {/*  <Grid item xs={12}>
            <Select id="Serie" value={ano_escolar} onChange={e => setAno_escolar(e.target.value)} variant="outlined" className={classes.tamanhoselectano}>
            <InputLabel id="demo-simple-select-helper-label">Selecione o Ano</InputLabel>
                  <MenuItem value={"6º Ano"}> 6º Ano</MenuItem>
                  <MenuItem value={"7º Ano"}> 7º Ano</MenuItem>
                  <MenuItem value={"8º Ano"}> 8º Ano</MenuItem>
                  <MenuItem value={"9º Ano"}> 9º Ano</MenuItem>
                  <MenuItem value={"1º Ano"}> 1º Ano</MenuItem>
                  <MenuItem value={"2º Ano"}> 2º Ano</MenuItem>
                  <MenuItem value={"3º Ano"}> 3º Ano</MenuItem>
                </Select>
            </Grid> */}
            <Grid item xs={12}>
            <TextField id="Serie" value={ano_escolar} onChange={e => setAno_escolar(e.target.value)} variant="outlined" select fullWidth label="selecione o ano" >
            <InputLabel id="demo-simple-select-helper-label">Selecione o Ano</InputLabel>
                  <MenuItem value={"6º Ano"}> 6º Ano</MenuItem>
                  <MenuItem value={"7º Ano"}> 7º Ano</MenuItem>
                  <MenuItem value={"8º Ano"}> 8º Ano</MenuItem>
                  <MenuItem value={"9º Ano"}> 9º Ano</MenuItem>
                  <MenuItem value={"1º Ano"}> 1º Ano</MenuItem>
                  <MenuItem value={"2º Ano"}> 2º Ano</MenuItem>
                  <MenuItem value={"3º Ano"}> 3º Ano</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="escola"
                label="Escola"
                name="escola"
                value={escola}
                onChange={e => setEscola(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="senha"
                label="senha"
                type="password"
                id="senha"
                autoComplete="current-password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
          <Grid container justify="center" alignItems="center">
              <Link to='/loginUsuario'>
                Ir para o Login
              </Link>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
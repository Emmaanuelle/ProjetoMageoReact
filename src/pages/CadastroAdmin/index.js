import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api"
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReactLoading from 'react-loading';
import logo from '../../images/icons/shape.svg'


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
    background:"#769DE9",
    fontFamily:"'Poppins', sans-serif;",
    fontSize:"17px",
  },
  tamanhoselectano:{
    minWidth:394,

  },
  tipografia:{
    fontSize:"30px",
    fontFamily:"'Poppins', sans-serif;",
    fontWeight:"Bold",
    color:"#75A0F2",
  },

  imagem:{
    height:"70px",
    width:"70px"
  },
  fonte:{
    fontFamily:"'Poppins', sans-serif;",
    fontSize:"20px",
  },
}));

export default function CadastroAdmin() {
  const classes = useStyles();
  const [nome_administrador, setNome] = useState("");
  const [sobrenome_administrador, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [carregar,setCarregando] = useState(false);

  const history = useHistory();


  async function cadastrar(e) {

    e.preventDefault();

    const data = { nome_administrador, sobrenome_administrador,email, senha };
    try {
      setCarregando(true);
      await api.post("/admin", data)
      alert("Cadastro Realizado com Sucesso")
      history.push("/loginAdmin");
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
       {/*  <Avatar className={classes.avatar}>
          <img src={logo} alt='Logo do Projeto Mageo' />
        </Avatar> */}
         <img src={logo} alt='Logo do Projeto Mageo'className={classes.imagem}/>
        <Typography component="h1" variant="h5" className={classes.tipografia}>
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
                value={nome_administrador}
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
                value={sobrenome_administrador}
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
            className={classes.submit} >
            Cadastrar
          </Button>
          <Grid container justify="center" alignItems="center">
              <Link to='/loginAdmin' className={classes.fonte}>
                Ir para o Login
              </Link>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
import React, { useState } from "react";
import api from "../../services/api"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReactLoading from 'react-loading';
import Navbar from "../Navbar";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#509312",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Questao() {
  const classes = useStyles();

  const [carregar,setCarregando] = useState(false);
  const [pergunta, setPergunta] = useState("");
    const [resposta, setResposta] = useState("");
    const [alternativa, setAlternativa] = useState('');
    const [dica, setDica] = useState("");
    const [video, setVideo] = useState("");
    const [imagem, setImagem] = useState("");
    const [error, setError] = useState("");
    
    async function cadastrarQuestoes(e) {

        e.preventDefault();

        const data = { pergunta, resposta, dica,alternativa,imagem,video };
        try {
          setCarregando(true)
             await api.post("/questao", data)
            alert("Questão cadastrada com Sucesso")
            
        } catch (error) {
            console.log(error.response.data)
            setError("Questão invalida")
        }

    }
  return (
      <>
      <Navbar/>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Cadastrar Questão
        </Typography>
        {carregar && !error?<ReactLoading className='loading' type={"bubbles"} color={'orange'} height={'20%'} width={'40%'} />:<></>}
        <form className={classes.form} onSubmit={cadastrarQuestoes}>
        {error && <p className='error'>{error}</p>}
        <Grid container>
              <TextField
                name="pergunta"
                variant="outlined"
                required
                fullWidth
                id="pergunta"
                label="Pergunta"
                autoFocus
                value={pergunta}
                onChange={e => setPergunta(e.target.value)}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                id="resposta"
                label="resposta"
                name="resposta"
                value={resposta}
                onChange={e => setResposta(e.target.value)}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                id="video"
                label="Link para o youtube"
                name="video"
                value={video}
                onChange={e => setVideo(e.target.value)}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                id="dica"
                label="dica"
                autoComplete="dica"
                value={dica}
                onChange={e => setDica(e.target.value)}
              />
         
              <TextField
                variant="outlined"
                required
                fullWidth
                id="alternativas"
                label="alternativas"
                placeholder="alternativas incorretas, separada por virgula"
                autoComplete="alternativas"
                value={alternativa}
                onChange={e => setAlternativa(e.target.value)}
              />
         
              <TextField
                variant="outlined"
                required
                fullWidth
                id="imagem"
                label="imagem"
                autoComplete="imagem"
                value={imagem}
                onChange={e => setImagem(e.target.value)}
              />
         
             
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
          </Grid>
        </form>
      </div>
    </Container>
    </>
  );
}
import React, { useState } from "react";
import api from "../../services/api"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReactLoading from 'react-loading';
import Navbar from "../NavbarAdministrador";
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
//import { useHistory } from "react-router-dom";
import { MenuItem} from "@material-ui/core";


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
  /* tamanhoselect:{
    minWidth:320,
    //backgroundColor:"#509312"
  }, */
  
}));



const DicaParaInput = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);


export default function Questao() {
  const classes = useStyles();
  const adm_id=localStorage.getItem("administradors_id");

  const [carregar, setCarregando] = useState(false);
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  /* var alternativa = [] */
  const [alternativa, setAlternativa] = useState([]);
  /* const [alternativa2, setAlternativa2] = useState("");
  const [alternativa3, setAlternativa3] = useState(""); */
  const [dica, setDica] = useState("");
  const [video, setVideo] = useState("");
  const [nivel, setNivel] = useState("");
  const[fase,setFase] = useState("");
  const[administradors_id,setAdministradors] = useState(adm_id);
  const [error, setError] = useState("");
  // const history = useHistory();
  async function cadastrarQuestoes(e) {
    

    e.preventDefault();
/*      alternativa=[alternativa1,alternativa2,alternativa3]
 */    const data = { pergunta, resposta, dica, alternativa, video, fase,nivel, administradors_id };
    try {
      setCarregando(true)
      await api.post("/questao", data)
      alert("Questão cadastrada com Sucesso")
      setTimeout(()=>{window.location.reload()},300)  //recarregar a pagina
      // history.push('/quiz')
    } catch (error) {
      console.log(error.response.data)
      if(error.response.data.error.message === 'E_INVALID_JWT_TOKEN: invalid signature'){
        setError("Você não tem permissão para cadastrar uma questão")

      }else{
        setError("Houve um erro ao cadastrar a questão, tente novamente")

      }
    }

  }
  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" style={{color:"#6A6A6A", fontSize:"150%", fontWeight:600,}}>
            Cadastrar Questão
        </Typography>
          {carregar && !error ? <ReactLoading className='loading' type={"bubbles"} color={'orange'} height={'20%'} width={'40%'} /> : <></>}
          <form className={classes.form} onSubmit={cadastrarQuestoes}>
            {error && <p className='error'>{error}</p>}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={11}>
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
              </Grid>
              <Grid item xs={12} sm={1}>
                <DicaParaInput
                  title={
                    <React.Fragment>
                      <Typography color="secondary">Qual pergunta colocar ?</Typography>
                        Explicação da pergunta
                     </React.Fragment>
                  }
                >
                  <HelpOutlineOutlinedIcon />
                </DicaParaInput>
              </Grid>
              <Grid item xs={12} sm={11}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="resposta"
                  label="Resposta"
                  name="Resposta"
                  value={resposta}
                  onChange={e => setResposta(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={1}>
                <DicaParaInput
                  title={
                    <React.Fragment>
                      <Typography color="secondary">Resposta ?</Typography>
                        Explicação do formato da Resposta
                     </React.Fragment>
                  }
                >
                  <HelpOutlineOutlinedIcon />
                </DicaParaInput>
              </Grid>
              
              <Grid item xs={12} sm={11} >
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
              </Grid>
              <Grid item xs={12} sm={1}>
                <DicaParaInput
                  title={
                    <React.Fragment>
                      <Typography color="secondary">Dica ?</Typography>
                        Explicação do formato da dica
                     </React.Fragment>
                  }
                >
                  <HelpOutlineOutlinedIcon />
                </DicaParaInput>
              </Grid>

              <Grid item xs={12} sm={11} >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="alternativas"
                  label=" Primeira alternativas"
                  placeholder=" por favor separe as alternativas por virgula" 
                  autoComplete="alternativas"
                  value={alternativa}
                  onChange={e => setAlternativa(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={1}>
                <DicaParaInput
                  title={
                    <React.Fragment>
                      <Typography color="secondary">Alternativas ?</Typography>
                        Explicação do formato das Alternativas
                     </React.Fragment>
                  }
                >
                  <HelpOutlineOutlinedIcon />
                </DicaParaInput>
              </Grid>
             




              <Grid item xs={12} sm={11} >
                <TextField
                  variant="outlined"
                  fullWidth
                  id="video"
                  label="Link para o youtube"
                  name="video"
                  value={video}
                  onChange={e => setVideo(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={1}>
                <DicaParaInput
                  title={
                    <React.Fragment>
                      <Typography color="secondary">Youtube ?</Typography>
                        Explicação do formato do youtube
                     </React.Fragment>
                  }
                >
                  <HelpOutlineOutlinedIcon />
                </DicaParaInput>
              </Grid>
              <Grid item xs={12}>
                <TextField id="fase" value={fase} onChange={e => setFase(e.target.value)} variant="outlined" select fullWidth label="Selecione o Tipo da Questão">
               {/*  <InputLabel id="demo-simple-select-helper-label">Selecione o  Tipo da Questão</InputLabel> */}
                  <MenuItem value={"quadrado"}>Quadrado</MenuItem>
                  <MenuItem value={"retangulo"}>Retângulo</MenuItem>
                  <MenuItem value={"triangulo"}>Triângulo</MenuItem>
                  <MenuItem value={"circulo"}> Círculo</MenuItem>
                </TextField >
              </Grid>
              <Grid item xs={12}>
                <TextField id="nivel" value={nivel} onChange={e => setNivel(e.target.value)} variant="outlined" select fullWidth label="Selecione o Nível da Questão">
               {/*  <InputLabel id="demo-simple-select-helper-label">Selecione o  Tipo da Questão</InputLabel> */}
                  <MenuItem value={"facil"}> Fácil</MenuItem>
                  <MenuItem value={"medio"}>Médio</MenuItem>
                  <MenuItem value={"dificil"}>Dificil</MenuItem>
                  <MenuItem value={"desafio"}> Desafio </MenuItem>
                </TextField >
              </Grid>

            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{background:"#1CB0F6", color:"white"}}
              className={classes.submit}
            >
              Cadastrar
          </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { MenuItem} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import api from '../../services/api';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function EditarQuestoes(props) {
  const questoes = props.questoes
  console.log(questoes);
  const [pergunta, setPergunta] = useState(questoes.pergunta);
  const [resposta, setResposta] = useState(questoes.resposta);
  const [alternativa, setAlternativa] = useState(questoes.alternativa);
  const [dica, setDica] = useState(questoes.dica);
  const [video, setVideo] = useState(questoes.video);
  const [nivel, setNivel] = useState(questoes.nivel);
  const[fase,setFase] = useState(questoes.fase);
  const [error, setError] = useState("");
  const [carregar, setCarregando] = useState(false);

  const [open, setOpen] = React.useState(false);

   // const history = useHistory();
   async function editarQuestoes(e) {

    e.preventDefault();

    const data = { pergunta, resposta, dica, alternativa, video, fase, nivel};
    try {
      setCarregando(true)
      await api.put(`/questao/${questoes.id}`, data)
      alert("Questão Atualizada com Sucesso")
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


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} style={{color:"#ffffff",backgroundColor:"#FFBB0E"}}>
        Editar
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} > 
         Editar Questoes
        </DialogTitle>
        <DialogContent dividers>
      {error&&<p>{error}</p>}
      {carregar&&!error?<p>Carregando</p>:<></>}
      <form onSubmit={editarQuestoes}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
       
              <Grid item xs={12}>
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
     
              
              <Grid item xs={12} >
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
 
              <Grid item xs={12} >
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
              </Grid>
           
              <Grid item xs={12} >
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
          
              <Grid item xs={12}>
                <TextField id="fase" value={fase} onChange={e => setFase(e.target.value)} variant="outlined" select fullWidth label="Selecione o Tipo da Questão">
               {/*  <InputLabel id="demo-simple-select-helper-label">Selecione o  Tipo da Questão</InputLabel> */}
                  <MenuItem value={"quadrado"}>Quadrado</MenuItem>
                  <MenuItem value={"retangulo"}>Retângulo</MenuItem>
                  <MenuItem value={"triangulo"}>Triângulo</MenuItem>
                  <MenuItem value={"circulo"}> Círculo</MenuItem>
                  <MenuItem value={"area"}> Area</MenuItem>
                </TextField >
              </Grid>
              <Grid item xs={12}>
                <TextField id="nivel" value={nivel} onChange={e => setNivel(e.target.value)} variant="outlined" select fullWidth label="Selecione o Nível da Questão">
               {/*  <InputLabel id="demo-simple-select-helper-label">Selecione o  Tipo da Questão</InputLabel> */}
                  <MenuItem value={"facil"}> Fácil</MenuItem>
                  <MenuItem value={"medio"}>Médio</MenuItem>
                  <MenuItem value={"dificil"}>Dificil</MenuItem>
                  <MenuItem value={"desafio"}> Desafio Questão</MenuItem>
                </TextField >
              </Grid>

            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Salvar
          </Button>
          </form>

         
         
        </DialogContent>

      </Dialog>
    </div>
  );
}
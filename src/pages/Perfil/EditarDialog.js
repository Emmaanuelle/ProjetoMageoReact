import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { MenuItem,  InputLabel} from "@material-ui/core";
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


export default function EditarDialog(props) {
  const user = props.user
  console.log(user);
  const [nome, setNome] = useState(user.nome);
  const [sobrenome, setSobrenome] = useState(user.sobrenome);
  const [email, setEmail] = useState(user.email);
  const [senha, setSenha] = useState('');
  const [dataNascimento, setdataNascimento] = useState(user.dataNascimento);
  const[ano_escolar,setAno_escolar]= useState(user.ano_escolar)
  const[escola, setEscola] = useState(user.escola)
  const [error, setError] = useState('');
  const [carregar,setCarregando] = useState(false);
  const [open, setOpen] = React.useState(false);

  async function editar(e) {

    e.preventDefault();

    const data = { nome, sobrenome,email, senha, dataNascimento, ano_escolar, escola };
    try {
      setCarregando(true);
      await api.put(`/user/${user.id}`, data)
      alert("Realizado com Sucesso")
      setTimeout(()=>{window.location.reload()},200)
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


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Editar
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Editar Dados
        </DialogTitle>
        <DialogContent dividers>
      {error&&<p>{error}</p>}
      {carregar&&!error?<p>Carregando</p>:<></>}
        <form  onSubmit={editar} >        
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
          
            <Grid item xs={12}>
            <TextField id="Serie"  value={ano_escolar} onChange={e => setAno_escolar(e.target.value)}  variant="outlined" select fullWidth label="selecione o ano" >
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
          >
            Salvar
          </Button>
          
        </form>

         
         
        </DialogContent>

      </Dialog>
    </div>
  );
}

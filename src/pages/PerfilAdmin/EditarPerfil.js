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
  const admin = props.admin
  
  const [nome_administrador, setNome] = useState(admin.nome_administrador);
  const [sobrenome_administrador, setSobrenome] = useState(admin.sobrenome_administrador);
  const [email, setEmail] = useState(admin.email);
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [carregar,setCarregando] = useState(false);
  const [open, setOpen] = React.useState(false);

  async function editar(e) {

    e.preventDefault();

    const data = { nome_administrador, sobrenome_administrador,email, senha};
    try {
      setCarregando(true);
      await api.put(`/admin/${admin.id}`, data)
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
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
    height:"60px",
    width:"100%",
  },
  contain:{
      marginTop:"50px",
      marginBottom:"60px"
  }
}));

export default function PaginaInicial() {
  const classes = useStyles();
  const history = useHistory();
  
  
  

  return (
    <Container component="main" maxWidth="xs"  className={classes.contain}> 
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={logo}/>
        </Avatar>
        <Typography component="h1" variant="h5">
          MaGeo
        </Typography>                   
        <Link to='/loginUsuario'>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
             >
                 Estudante
          </Button>
          </Link>
          <Link to='/loginAdmin'>
                 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
             >
              Administrador   
          </Button>
          </Link>
            
          <Grid container justify="center" alignItems="center">
             
          </Grid>
       
      </div>
    </Container>
  );
}
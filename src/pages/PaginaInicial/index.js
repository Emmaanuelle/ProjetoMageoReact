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
  submit1: {
    margin: theme.spacing(3, 0, 2),
    color:"white",
    background:"#3B82F6",
    height:"60px",
    width:"250px",
  },
  submit2: {
    margin: theme.spacing(3, 0, 2),
    color:"white",
    background:"#3B82F6",
    height:"60px",
    width:"250px",
  },
  contain:{
      marginTop:"10%",
      marginBottom:"10%"
  },
  tipografia:{
    fontSize:"50px",
    fontFamily:"'Bodoni Moda', serifa;",
    fontWeight:"Bold",
    color:"#4550B9",
  },
  tipografia1:{
    fontSize:"30px",
    fontFamily:"Playfair Display', serif",
    fontWeight:"Bold",
    color:"#0033AB",
  },
  tipografia2:{
    fontSize:"30px",
    fontFamily:"Playfair Display', serif",
    fontWeight:"Bold",
    color:"#939499",
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
        <Typography component="h1" variant="h5" className={classes.tipografia}>
          MaGeo
        </Typography> 
        <Typography component="h1" variant="h5" className={classes.tipografia1}>
         Bem vindo ao MaGeo Quiz
        
        </Typography> 
        <Typography component="h1" variant="h5" className={classes.tipografia2}>
         Seu Jogo de Geometria Plana
        </Typography>    
      
        <Link to='/loginUsuario'>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit1}
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
            className={classes.submit2}
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
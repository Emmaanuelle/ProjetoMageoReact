import React  from "react";
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../../images/icons/logo.svg'

const useStyles = makeStyles((theme) => ({
 
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  /* avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#FFFFFF",
  
  }, */
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit1: {
    margin: theme.spacing(3, 0, 2),
    color:"white",
    background:"#3B82F6",
    height:"60px",
    width:"300px",
  },
  submit2: {
    margin: theme.spacing(3, 0, 2),
    color:"white",
    background:"#3B82F6",
    height:"60px",
    width:"300px",
  },
  contain:{
      marginTop:"10%",
      marginBottom:"10%"
  }, 
  tipografia:{
    fontSize:"50px",
    fontFamily:"'Bodoni Moda', serifa;",
    fontWeight:"Bold",
    color:"#000000",
    
   
  },
  tipografia1:{
    fontSize:"35px",
    fontFamily:"'Gorditas', cursiva",
    //fontWeight:"Bold",
    color:"#000000",
    
  },
  tipografia2:{
    fontSize:"25px",
    fontFamily:"'Playfair Display', serif",
    //fontWeight:"Bold",
    color:"#000000",
    marginBottom:"20px"
  },
  imagem:{
    height:"80px",
    width:"100px"
  }
  
}));

export default function PaginaInicial() {
  const classes = useStyles();

  

  return (
    <Container component="main" maxWidth="xs"  className={classes.contain}> 
      <CssBaseline />
      <div className={classes.paper}>
       {/*  <Avatar className={classes.avatar}>
          <img src={logo} alt='Logo do Projeto Mageo' />
        </Avatar> */}
         <img src={logo} alt='Logo do Projeto Mageo'  className={classes.imagem}/>
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
             Professor(a)
          </Button>
          </Link>
            
          <Grid container justify="center" alignItems="center">
             
          </Grid>
       
      </div>
    </Container>
  );
}
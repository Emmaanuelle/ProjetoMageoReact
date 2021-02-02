import React  from "react";
import { Link } from "react-router-dom";
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../../images/icons/shape.svg'

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
    background:"#769DE9",
    height:"60px",
    width:"360px",
  },
  submit2: {
    margin: theme.spacing(3, 0, 2),
    color:"white",
    background:"#769DE9",
    height:"60px",
    width:"360px",
  },
  contain:{
      marginTop:"10%",
      marginBottom:"10%"
  }, 
  tipografia:{
    fontSize:"50px",
    fontFamily:"'Poppins', sans-serif;",
    fontWeight:"Bold",
    color:"#75A0F2",
    
   
  },
  tipografia1:{
    fontSize:"23px",
    fontFamily:"'Poppins', sans-serif;",
    fontWeight:"200,bold",
    color:"#959090",
  
    
  },
  tipografia2:{
    fontSize:"23px",
    fontFamily:"'Poppins', sans-serif;",
    fontWeight:"200,bold",
    color:"#959090",
    marginBottom:"20px"
  },
  imagem:{
    height:"100px",
    width:"100px"
  },
   fundo:{
    backgroundColor:"rgb(236, 253, 245,)",
    height:"100%",
   }
  
}));

export default function PaginaInicial() {
  const classes = useStyles();

  

  return (
    <div class="bg-green-50" className={classes.fundo}>

    <Container component="main" maxWidth="xs"  className={classes.contain}> 
      <CssBaseline />
      <div className={classes.paper}>
       {/*  <Avatar className={classes.avatar}>
          <img src={logo} alt='Logo do Projeto Mageo' />
        </Avatar> */}
         <img src={logo} alt='Logo do Projeto Mageo'  className={classes.imagem}/>
        <Typography component="h1" variant="h5" className={classes.tipografia}>
          MaGeo Quiz
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
    
    </div>
  );
}
import React from 'react';
import { Button, Container, Grid, ThemeProvider } from '@material-ui/core'
import Navbar from '../Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../theme';
import Box from '@material-ui/core/Box';
import logo from '../../images/imagen2.jpg';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
    marginBottom:60,
  },
  btn:{
    
  },
  titulo: {
    textAlign: "center",
    marginTop: 0,
    fontSize: 30,
    color: "#769DE9",
    fontWeight: "bold"
  },
  tituloregra:{ 
  textAlign: "center",
  marginTop: 0,
  fontSize: 30,
  color: "#769DE9",
  fontWeight: "bold",
  paddingTop:70
  
},

  imagem:{
    borderRadius:20,
    height:350,
    width:500,
  },
  gridmargen:{
    marginLeft:"80px",
    paddingLeft:"60px"
  }
  
}));
const Home = (props) => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Container>      
            <h1 className={classes.tituloregra}> Regras do Jogo</h1>
            <Box display="flex">
          <Box p={10} justifyContent="flex-start" >
           {/*  <img src={logo} width="300px" className={classes.imagem} /> */}
          </Box>
          <Box p={10} justifyContent="flex-end" >
              <ul>
                <li> I - O jogador iniciará o jogo com 10 pontos. </li>
                <li> II- Cada questão respondida corretamente corresponde a 10 pontos. </li>
                <li> III-Se jogador acertar as 5 primeiras perguntas, recebe 50 pontos + o dobro de pontos ganho e vence o 1º desafio da fase. </li>
                <li> IV- Se jogador vencer as 5 próximas perguntas, recebe 50 pontos + o dobro de pontos ganho e vence o 2º desafio da fase. </li>
                <li> V-  Ao vencer os 2 desafios o jogador conquista  o emblema da fase. </li>
              </ul>
          </Box>
          
        </Box>
       {/*  <Grid container spacing={5} className={classes.gridmargen}>
              <Grid item xs={12} sm={4}>
                     <Card style={cardStyle}>
                       <CardActionArea>
                            <CardMedia>
                                <img src={logo} width="300px" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  Emblema
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  Pontuação
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card> 
                </Grid>
              
                <Grid item xs={12} sm={6}>
                     <Card style={cardStyle}>
                       <CardActionArea>
                            <CardMedia>
                                <img src={logo} width="300px" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  Emblema
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  Pontuação
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card> 
                </Grid>
            </Grid> */}
            <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" href='/quiz' size="large" className={classes.btn} startIcon={<SportsEsportsRoundedIcon/>}>
                  Start Quiz
                  </Button>
              </Grid>
            </Grid>
          </div>
      
            <h1 className={classes.titulo}> Fases do Quiz</h1>
            <Box display="flex">

              <Box p={10} justifyContent="flex-start" >
                <img src={logo} width="300px"  alt='Descrição da Imagem' />
              </Box>
              <Box p={10} justifyContent="flex-end" >
                <h1> Triângulo</h1>
                <p> pré-elaborados. O formulário possui em sua estrutura opções de perguntas os em cada pergunta desenvolvida.</p>
              </Box>

            </Box>
            
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Home;
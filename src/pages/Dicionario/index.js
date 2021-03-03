import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navbar from '../Navbar';
import { Container } from '@material-ui/core';
import { Card, CardActionArea, CardContent,CardActions, Grid, Paper } from '@material-ui/core';
import fig4 from '../../images/icons/angulo.svg';
import losango from '../../images/icons/losango.svg';
import circle from '../../images/icons/circle.svg';
import re from '../../images/icons/re.svg';
import quadrada from '../../images/icons/quada.svg';
import triangle from '../../images/icons/triangle.svg';
import trapezio from '../../images/icons/trapezio.svg';



function TabPanel(props) {
  const { children, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  imagem:{
    right:"150px",
    marginTop:"3%",
    marginBottom:"10%"
  },
  titulo:{
    textAlign:"center"
  }
  
}));

export default function Dicionario() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className={classes.root}>
      
      <Navbar/>
      <Container>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >

          

          <Tab label="Ângulos" {...a11yProps(0)} />
          <Tab label="Área" {...a11yProps(1)} />
          <Tab label="Círculo" {...a11yProps(2)} />
          <Tab label="Losango" {...a11yProps(3)} />
          <Tab label="Perímetro" {...a11yProps(4)} />
          <Tab label="Plano" {...a11yProps(5)} />
          <Tab label="Segmento de Reta" {...a11yProps(6)} />
          <Tab label="Reta" {...a11yProps(7)} />
          <Tab label="Retângulo" {...a11yProps(8)} />
          <Tab label="Quadrado" {...a11yProps(9)} />
          <Tab label="Trapézio" {...a11yProps(10)} />
          <Tab label="Triângulo" {...a11yProps(11)} />


        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                     <Typography className={classes.titulo} >
                           Ângulo
                        </Typography>
                     
                       <CardContent>
                       <div class="flex justify-center ...">
                          <div></div>
                          <div > <img alt="Imagem" src={fig4} width="200px" className={classes.imagem} /></div>
                          <div></div>
                        </div>
                       
                       <Typography>
                       Os ângulos são formados pela união de dois segmentos de reta, a partir de um ponto comum, chamado de vértice do ângulo. São classificados em:

                           
                          
                           
                       </Typography>
                       <Typography>
                       *ângulo reto (Â = 90º)
                       </Typography>
                       <Typography>
                       *ângulo agudo (0º)
                        </Typography>
                        <Typography>
                        *ângulo obtuso (90º)
                        </Typography>

                       </CardContent>

               </Card>
                </Paper>
                  
               </Grid>
               </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                        <Typography className={classes.titulo1} >
                             Área
                        </Typography>
                     
                       <CardContent>
                       
                       <Typography>
                       A área de uma figura geométrica expressa o tamanho de uma superfície. 
                       Assim, quanto maior a superfície da figura, maior será sua área.
                       </Typography>
                       </CardContent>

                   
               </Card>
                </Paper>
                  
               </Grid>
               </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                      <Typography className={classes.titulo2} >
                          Circulo
                       </Typography>
                     
                       <CardContent>
                       <div class="flex justify-center ...">
                          <div></div>
                          <div > <img alt="Imagem" src={circle} width="300px" className={classes.imagem} /></div>
                          <div></div>
                        </div>
                       
                       <Typography>
                       Você sabia que a forma geométrica de círculo é relacionada com as características orgânicas em nosso ecossistema e organismo, por exemplo, o globo ocular, células, miolo de flores, frutas, pedras e outros objetos são circulares por retratarem o natural das espécies, 
                       o círculo é uma figura considerada ilimitada, que está sempre em movimento e denota inovação.
                       </Typography>
                       </CardContent>

               </Card>
                </Paper>
                  
               </Grid>
               </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                   
                <Typography className={classes.titulo3} >
                        Losango
                       </Typography>
                       <CardContent>
                       <div class="flex justify-center ...">
                          <div></div>
                          <div > <img alt="Imagem" src={losango} width="200px" className={classes.imagem} /></div>
                          <div></div>
                        </div>
                       <Typography>
                       Quadrilátero equilátero, ou seja, formado por quatro lados iguais, o losango, junto com o quadrado e o retângulo, é considerado um paralelogramo.

                            Ou seja, é um polígono de quatro lados os quais possuem lados e ângulos opostos congruentes e paralelos.
                       </Typography>
                      
                       </CardContent>

                   

               </Card>
                </Paper>
                  
               </Grid>
               </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                      <Typography className={classes.titulo3} >
                       Perímetro
                       </Typography>
                     
                       <CardContent>
                      
                       <Typography>
                       O perímetro corresponde a soma de todos os lados de uma figura geométrica.
                       </Typography>
                       
                       </CardContent>

                   

               </Card>
                </Paper>
                  
               </Grid>
               </Grid>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                      <Typography className={classes.titulo3} >
                           Plano
                       </Typography>
                       <CardContent>
                       <Typography>
                       Corresponde a uma superfície plana bidimensional, ou seja, possui duas dimensões: comprimento e largura. Nessa superfície que se formam as figuras geométricas.
                       </Typography>
                      
                       </CardContent>

                   

               </Card>
                </Paper>
                  
               </Grid>
               </Grid>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                       <Typography className={classes.titulo3} >
                           Segmento de Reta
                       </Typography>
                       <CardContent>
                       
                       <Typography>
                       Diferente da reta, o segmento de reta é limitado pois corresponde a parte entre dois pontos distintos.
                       A semirreta é limitada somente num sentido, visto que possui início e não possui fim.
                       </Typography>
                      
                       </CardContent>

                   

               </Card>
                </Paper>
                  
               </Grid>
               </Grid>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                   <CardActionArea>
                   <Typography className={classes.titulo3} >
                          Reta
                       </Typography>
                       <CardContent>
                       
                       <Typography>
                       A reta, representada por letra minúscula, é uma linha ilimitada unidimensional (possui o comprimento como dimensão) e pode se apresentar em três posições:

                        horizontal
                        vertical
                        inclinada
                        Dependendo da posição das retas, quando elas se cruzam, ou seja, possuem um ponto em comum, são chamadas de retas concorrentes.

                        Por outro lado, as que não possuem ponto em comum, são classificadas como retas paralelas.
                       </Typography>
                      
                       </CardContent>

                   </CardActionArea>
                   <CardActions>
                  
                   </CardActions>

               </Card>
                </Paper>
                  
               </Grid>
               </Grid>
      </TabPanel>
      <TabPanel value={value} index={8}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                   <CardActionArea>
                   <Typography className={classes.titulo3} >
                          Retângulo
                       </Typography>
                       <CardContent>
                       <div class="flex justify-center ...">
                          <div></div>
                          <div > <img alt="Imagem" src={re} width="200px" className={classes.imagem} /></div>
                          <div></div>
                        </div>
                       <Typography>
                       Figura geométrica plana marcada por dois lados paralelos no sentido vertical e os outros dois paralelos, no horizontal. 
                       Assim, todos os lados do retângulo formam ângulos reto (90°).
                       </Typography>
                      
                       </CardContent>

                   </CardActionArea>
                   <CardActions>
                  
                   </CardActions>

               </Card>
                </Paper>
                  
               </Grid>
               </Grid>
      </TabPanel>
      <TabPanel value={value} index={9}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                   <CardActionArea>
                   <Typography className={classes.titulo3} >
                          Quadrado
                       </Typography>
                       <CardContent>
                       <div class="flex justify-center ...">
                          <div></div>
                          <div > <img alt="Imagem" src={quadrada} width="200px" className={classes.imagem} /></div>
                          <div></div>
                        </div>
                       <Typography>
                       Polígono de quatro lados iguais, o quadrado ou quadrilátero é uma figura geométrica plana que possuem os quatro ângulos congruentes: retos (90°).
                       </Typography>
                      
                       </CardContent>

                   </CardActionArea>
                   <CardActions>
                  
                   </CardActions>

               </Card>
                </Paper>
                  
               </Grid>
               </Grid>
      </TabPanel>
      <TabPanel value={value} index={10}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                   <CardActionArea>
                   <Typography className={classes.titulo3} >
                          Trapézio
                       </Typography>
                       <CardContent>
                       <div class="flex justify-center ...">
                          <div></div>
                          <div > <img alt="Imagem" src={trapezio} width="200px" className={classes.imagem} /></div>
                          <div></div>
                        </div>
                       <Typography>
                       Chamado de quadrilátero notável, pois a soma dos seus ângulos internos corresponde a 360º, o trapézio é uma figura geométrica plana.

                        Ele possui dois lados e bases paralelas, donde uma é maior e outra menor. São classificados em:

                        trapézio retângulo: possui dois ângulos de 90º;
                        trapézio isósceles ou simétrico: os lados não paralelos possuem a mesma medida;
                        trapézio escaleno: todos os lados de medidas diferentes.
                       </Typography>
                      
                       </CardContent>

                   </CardActionArea>
                   <CardActions>
                  
                   </CardActions>

               </Card>
                </Paper>
                  
               </Grid>
               </Grid>
      </TabPanel>
      <TabPanel value={value} index={11}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                   <CardActionArea>
                   <Typography className={classes.titulo3} >
                          Triângulo
                       </Typography>
                       <CardContent>
                       <div class="flex justify-center ...">
                          <div></div>
                          <div > <img alt="Imagem" src={triangle} width="200px" className={classes.imagem} /></div>
                          <div></div>
                        </div>
                       <Typography>
                       Figura geométrica plana marcada por dois lados paralelos no sentido vertical e os outros dois paralelos, no horizontal. 
                       Assim, todos os lados do retângulo formam ângulos reto (90°).
                       </Typography>
                      
                       </CardContent>

                   </CardActionArea>
                   <CardActions>
                  
                   </CardActions>

               </Card>
                </Paper>
                  
               </Grid>
               </Grid>
      </TabPanel>
      </Container>
    </div>
  );
}
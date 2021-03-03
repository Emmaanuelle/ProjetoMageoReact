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
import terra from '../../images/icons/terra.svg';
import voo from '../../images/icons/voo.svg';
import piramide from '../../images/icons/piramide.svg';
import favo from '../../images/icons/favo.svg';
import pe from '../../images/icons/pe.svg';
import pi from '../../images/icons/pi.svg';
import triangle from '../../images/icons/triangle.svg';






import terreno from '../../images/icons/terreno.svg';
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
    textAlign:"center",
    color:"#1CB0F6",
    fontWeight:"bold",
    fontSize:"2rem"
  },
  titulo1:{
    textAlign:"center",
    color:"#1CB0F6",
    fontWeight:"bold",
    fontSize:"2rem"
  },
  titulo2:{
    textAlign:"center",
    color:"#1CB0F6",
    fontWeight:"bold",
    fontSize:"2rem"
  },
  titulo3:{
    textAlign:"center",
    color:"#1CB0F6",
    fontWeight:"bold",
    fontSize:"2rem"
  },
  titulo4:{
    textAlign:"center",
    color:"#1CB0F6",
    fontWeight:"bold",
    fontSize:"2rem"
  },
  titulo5:{
    textAlign:"center",
    color:"#1CB0F6",
    fontWeight:"bold",
    fontSize:"2rem"
  },
  titulo6:{
    textAlign:"center",
    color:"#1CB0F6",
    fontWeight:"bold",
    fontSize:"2rem"
  },
  titulo7:{
    textAlign:"center",
    color:"#1CB0F6",
    fontWeight:"bold",
    fontSize:"2rem"
  },
  
  
}));

export default function ScrollableTabsButtonAuto() {
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

          <Tab label="A" {...a11yProps(0)} />
          <Tab label="B" {...a11yProps(1)} />
          <Tab label="C" {...a11yProps(2)} />
          <Tab label="D" {...a11yProps(3)} />
          <Tab label="E" {...a11yProps(4)} />
          <Tab label="F" {...a11yProps(5)} />
          <Tab label="G" {...a11yProps(6)} />
          <Tab label="H" {...a11yProps(7)} />
          

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                  <Typography className={classes.titulo}>
                  O corpo como unidade
                  </Typography>
                     
                       <CardContent>
                       <div class="flex justify-center ...">
                          <div></div>
                          <div > <img alt="Imagem" src={pe} width="200px" className={classes.imagem} /></div>
                          <div></div>
                        </div>
                       
                       <Typography>
                       As primeiras unidades de medida referiam-se direta ou indiretamente ao corpo humano:
                        palmo, pé, passo, braça, cúbito. Por volta de 3500 a.C. - quando na Mesopotâmia e no Egito começaram a ser construídos os primeiros templos - seus projetistas tiveram de encontrar unidades mais uniformes e precisas. Adotaram a longitude das partes do corpo de um único homem (geralmente o rei) 
                       e com essas medidas construíram réguas de madeira e metal,
                       ou cordas com nós, que foram as primeiras medidas oficiais de comprimento.
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
                   <CardActionArea>
                   <Typography className={classes.titulo1}>
                     Pirâmide
                  </Typography>
                       <CardContent>
                       <div class="flex justify-center ...">
                          <div></div>
                          <div > <img alt="Imagem" src={piramide} width="200px" className={classes.imagem} /></div>
                          <div></div>
                        </div>
                       <Typography>
                       Construída no século 25 A.C., a pirâmide de Quéops é considerado o maior sólido geométrico construído pelo homem, possuí em seus lados triângulos isósceles e tem a altura de 138 metros, cerca de 80 estruturas deste tipo foram construídas no antigo Egito 
                       e o formato geométrico ainda está muito constante em nosso dia a dia.
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
                          <div > <img alt="Imagem" src={terra} width="200px" className={classes.imagem} /></div>
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
                   
                <Typography className={classes.titulo3}>
                    Favo de Mel
                  </Typography>
                       <CardContent>
                       <div class="flex justify-center ...">
                          <div></div>
                          <div > <img alt="Imagem" src={favo} width="200px" className={classes.imagem} /></div>
                          <div></div>
                        </div>
                       <Typography>
                       Seguindo o ponto de observação vários matemáticos, cientistas e estudiosos, como Newton, Kepler e Maclaurin começaram a prestar mais atenção nos favos de mel produzidos pelas abelhas, cada alvéolo tem a forma de um prisma hexagonal onde possui o maior espaço para armazenamento de mel, 
                       seguindo esta observação diversos objetos foram criados seguindo os ensinamentos de simples abelhinhas.
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
                   <CardActionArea>
                     <Typography className={classes.titulo4}>
                       Área do Retângulo
                     </Typography>
                       <CardContent>
                       <div class="flex justify-center ...">
                          <div></div>
                          <div > <img alt="Imagem" src={terreno} width="200px" className={classes.imagem} /></div>
                          <div></div>
                        </div>
                       <Typography>
                       Os sacerdotes encarregados de arrecadar os impostos sobre a terra provavelmente começaram a calcular a extensão dos campos por meio de um simples golpe de vista. Certo dia, ao observar trabalhadores pavimentando com mosaicos quadrados uma superfície retangular, algum sacerdote deve ter notado que, para conhecer o total de mosaicos, bastava contar os de uma fileira e repetir esse número tantas vezes quantas fileiras houvesse. 
                       Assim nasceu a fórmula da área do retângulo: multiplicar a base pela altura.
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
      <TabPanel value={value} index={5}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                   <CardActionArea>
                   <Typography className={classes.titulo5}> 
                       Voo
                     </Typography>
                       <CardContent>
                       <div class="flex justify-center ...">
                          <div></div>
                          <div > <img alt="Imagem" src={voo} width="200px" className={classes.imagem} /></div>
                          <div></div>
                        </div>
                      
                       <Typography>
                       Com a observação de Rénne Descartes sobre o voo de uma mosca em seu quarto ele pôde desenvolver o estudo da geometria analítica,
                        seguindo o trajeto do inseto Descartes desenvolveu o sistema de coordenadas, utilizamos este estudo para produzir gráficos bidimensionais e tridimensionais no plano cartesiano.
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
      <TabPanel value={value} index={6}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                   <CardActionArea>
                   <Typography className={classes.titulo6}>
                       Número Pi.
                     </Typography>
                       <CardContent>
                       <div class="flex justify-center ...">
                          <div></div>
                          <div > <img alt="Imagem" src={pi} width="200px" className={classes.imagem} /></div>
                          <div></div>
                        </div>
                       <Typography>
                       O número 3,14 é básico na Geometria e na Matemática. Os gregos tornaram-no um pouco menos inexato: 3,1416. Hoje, o símbolop ("pi") representa esse número irracional, já determinado com uma aproximação de várias dezenas de casas decimais. Seu nome só tem uns
                        duzentos anos e foi tirado da primeira sílaba da palavra peripheria, significando circunferência.
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
      <TabPanel value={value} index={7}>
      <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                   <CardActionArea>
                   <Typography className={classes.titulo7}>
                       Área do Triângulo
                     </Typography>
                       <CardContent>
                       <div class="flex justify-center ...">
                          <div></div>
                          <div > <img alt="Imagem" src={triangle} width="200px" className={classes.imagem} /></div>
                          <div></div>
                        </div>
                       <Typography>
                       Já para descobrir a área do triângulo, os antigos fiscais seguiram um raciocínio extremamente geométrico. Para acompanhá-lo, basta tomar um quadrado ou um retângulo e dividí-lo em quadradinhos iguais. Suponhamos que o quadrado tenha 9 "casas" e o retângulo 12. Esses números exprimem então a área dessas figuras. Cortando o quadrado em duas partes iguais, segundo a linha diagonal, 
                       aparecem dois triângulos iguais, cuja área, naturalmente, é a metade da área do quadrado.
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

import React from 'react';
import { Container, Card, Grid, CardMedia, CardActionArea, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import Navbar from '../Navbar';
import logo from '../../images/imagen1.jpg';
import Box from '@material-ui/core/Box';



function ExploreMais() {
    var cardStyle = {
        display: 'block',
        width: '600px',
        // transitionDuration: '0.3s',
        height: '800px',
         marginLeft: 0 
       
    }

    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#948324' }}>ExploreMais</h2>
            </Container>
           {/*  <Box display="flex">
           
              <Box p={10} justifyContent="flex-end" >
                
                <p>
                5. (Enem 2019) Em um condomínio, uma área pavimentada, que tem a forma de um círculo com diâmetro medindo 6 m, é cercada por grama. A administração do condomínio deseja ampliar essa área, mantendo seu formato circular, e aumentando, em 8 m, o diâmetro dessa região, mantendo o revestimento da parte já existente. O condomínio dispõe, em estoque, de material suficiente para pavimentar mais 100 m² de área.

                    O síndico do condomínio irá avaliar se esse material disponível será suficiente para pavimentar a região a ser ampliada.

                    Utilize 3 como aproximação para π.

                    A conclusão correta a que o síndico deverá chegar, considerando a nova área a ser pavimentada, é a de que o material disponível em estoque
                                        
                </p>
                <p>
                <br/>
                (A)será suficiente, pois a área da nova região a ser pavimentada mede 21 m2.
                <br/>
                (B) será suficiente, pois a área da nova região a ser pavimentada mede 24 m2.
                (C)será suficiente, pois a área da nova região a ser pavimentada mede 48 m2.
                (D)não será suficiente, pois a área da nova região a ser pavimentada mede 108 m2.
                (E)não será suficiente, pois a área da nova região a ser pavimentada mede 120 m2.
                </p>
                <br/>
                <p>
                5. (Enem 2019) Em um condomínio, uma área pavimentada, que tem a forma de um círculo com diâmetro medindo 6 m, é cercada por grama. A administração do condomínio deseja ampliar essa área, mantendo seu formato circular, e aumentando, em 8 m, o diâmetro dessa região, mantendo o revestimento da parte já existente. O condomínio dispõe, em estoque, de material suficiente para pavimentar mais 100 m² de área.

                    O síndico do condomínio irá avaliar se esse material disponível será suficiente para pavimentar a região a ser ampliada.

                    Utilize 3 como aproximação para π.

                    A conclusão correta a que o síndico deverá chegar, considerando a nova área a ser pavimentada, é a de que o material disponível em estoque
                                        
                </p>

              </Box>

            </Box> */}
            <Grid container spacing={3}>
                <Grid item xs={10} sm={6}>
                    <Card style={cardStyle}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Questão Geometria Plana
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                (Enem 2019) Em um condomínio, uma área pavimentada, que tem a forma de um círculo com diâmetro medindo 6 m, é cercada por grama. A administração do condomínio deseja ampliar essa área, mantendo seu formato circular, e aumentando, em 8 m, o diâmetro dessa região, mantendo o revestimento da parte já existente. O condomínio dispõe, em estoque, de material suficiente para pavimentar mais 100 m² de área.

                                O síndico do condomínio irá avaliar se esse material disponível será suficiente para pavimentar a região a ser ampliada.

                                Utilize 3 como aproximação para π.

                                A conclusão correta a que o síndico deverá chegar, considerando a nova área a ser pavimentada, é a de que o material disponível em estoque
                                            
                                </Typography>
                                <Typography gutterBottom variant="h7" component="h2">
                                    <p>
                                    (A)será suficiente, pois a área da nova região a ser pavimentada mede 21 m2.
                                    </p>
                                    <br/>
                                    <p>
                                    (B) será suficiente, pois a área da nova região a ser pavimentada mede 24 m2.
                                    </p>
                                    <br/>
                                    <p>
                                    (C)será suficiente, pois a área da nova região a ser pavimentada mede 48 m2.
                                    </p>
                                    <br/>
                                    <p>
                                    (D)não será suficiente, pois a área da nova região a ser pavimentada mede 108 m2.
                                    </p>
                                    <br/>
                                    <p>
                                    (E)não será suficiente, pois a área da nova região a ser pavimentada mede 
                                    </p>
                                    <br/>
                                
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

               

                <Grid item xs={12} sm={6}>
                    <Card style={cardStyle}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Questão Geometria Plana
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                (Enem 2019) Em um condomínio, uma área pavimentada, que tem a forma de um círculo com diâmetro medindo 6 m, é cercada por grama. A administração do condomínio deseja ampliar essa área, mantendo seu formato circular, e aumentando, em 8 m, o diâmetro dessa região, mantendo o revestimento da parte já existente. O condomínio dispõe, em estoque, de material suficiente para pavimentar mais 100 m² de área.

                                O síndico do condomínio irá avaliar se esse material disponível será suficiente para pavimentar a região a ser ampliada.

                                Utilize 3 como aproximação para π.

                                A conclusão correta a que o síndico deverá chegar, considerando a nova área a ser pavimentada, é a de que o material disponível em estoque
                                            
                                </Typography>
                                <Typography gutterBottom variant="h7" component="h2">
                                    <p>
                                    (A)será suficiente, pois a área da nova região a ser pavimentada mede 21 m2.
                                    </p>
                                    <br/>
                                    <p>
                                    (B) será suficiente, pois a área da nova região a ser pavimentada mede 24 m2.
                                    </p>
                                    <br/>
                                    <p>
                                    (C)será suficiente, pois a área da nova região a ser pavimentada mede 48 m2.
                                    </p>
                                    <br/>
                                    <p>
                                    (D)não será suficiente, pois a área da nova região a ser pavimentada mede 108 m2.
                                    </p>
                                    <br/>
                                    <p>
                                    (E)não será suficiente, pois a área da nova região a ser pavimentada mede 
                                    </p>
                                    <br/>
                                
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>


                <Grid item xs={12} sm={6}>
                    {/* <Card style={cardStyle}>
                        <CardActionArea>
                            <CardMedia>
                                <img src={logo} width="300px" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Video
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>

                    </Card> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/*   <Card style={cardStyle}>
                        <CardActionArea>
                            <CardMedia>
                                <img src={logo} width="300px" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Video
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>

                    </Card> */}
                </Grid>

            </Grid>



        </>
    )
}

export default ExploreMais;
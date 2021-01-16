import React from 'react';
import { Container, Card, Grid, CardActionArea, CardContent, Typography} from '@material-ui/core'
import Navbar from '../Navbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titulo:{
        marginTop:10,
        marginBottom:30,
        fontWeight:"bold",

    },
    titulo1:{
        marginTop:40,
        marginBottom:30,
        fontWeight:"bold",
        textAlign:"center",  
    },
   
  }));
  

function ExploreMais() {
    const classes = useStyles();
   
       
    

    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#948324' }}>ExploreMais</h2>
            <Typography align="center" color="primary" variant="h4" className={classes.titulo} >
              Questões Enem Geometria Plana
            </Typography>
          
            <Grid container spacing={3}>
                
                <Grid item xs={12} sm={6}>
                    <Card>
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
                    <Card >
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

                <Typography color="primary" variant="h4" className={classes.titulo1} >
                Questões Enem Geometria Plana
                </Typography>
          
            <Grid container spacing={3}>
                
                <Grid item xs={12} sm={6}>
                    <Card>
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
                    <Card >
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
                </Grid>

            </Grid>

            </Container>

        </>
    )
}

export default ExploreMais;
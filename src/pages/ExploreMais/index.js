import React from 'react';
import { Container, Card, Grid, CardActionArea, CardContent, Typography, Paper} from '@material-ui/core'
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
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
  }));
  

function ExploreMais() {
    const classes = useStyles();
   
       
    

    return (
        <>
            <Navbar />
            <Container>
                
            <Typography align="center" color="primary" variant="h4" className={classes.titulo} style={{ color:"#6A6A6A", textAlign:"center", fontWeight:600, fontSize:"200%",marginTop:"3%" }}>
              Explore mais questões de Geometria Plana
            </Typography>
          
            <Grid container spacing={3}>
            <Paper className={classes.paper}>
            <Grid container spacing={3}>
                
                <Grid item xs={12} sm={6}>
                
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    <hr/>
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
                                   <hr/>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                (Enem 2017) Em uma cantina, o sucesso de venda no verão são sucos preparados à base de polpa de frutas. Um dos sucos mais vendidos é o de morango com acerola, que é preparado com 2/3 de polpa de morango e 1/3 de polpa de acerola.

                                Para o comerciante, as polpas são vendidas em embalagens de igual volume. Atualmente, a embalagem da polpa de morango custa R$ 18,00 e a de acerola, R$ 14,70. Porém, está prevista uma alta no preço da embalagem da polpa de acerola no próximo mês, passando a custar R$ 15,30.

                                Para não aumentar o preço do suco, o comerciante negociou com o fornecedor uma redução no preço da embalagem da polpa de morango.

                                A redução, em real, no preço da embalagem da polpa de morango deverá ser de
                                            
                                </Typography>
                                <Typography gutterBottom variant="h7" component="h2">
                                    <p>
                                    (A)1,20.
                                    </p>
                                    <br/>
                                    <p>
                                    (B)0,90.
                                    </p>
                                    <br/>
                                    <p>
                                    (C)0,60.
                                    </p>
                                    <br/>
                                    <p>
                                    (D)0,40.
                                    </p>
                                    <br/>
                                    <p>
                                    (E)0,30.
                                    </p>
                                    <br/>
                                
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                </Grid>

                <Typography color="primary" variant="h4" className={classes.titulo1} >
                
                </Typography>
          
            <Grid container spacing={3}>
                
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    <hr/>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                (Enem PPL 2015) O prefeito de uma cidade deseja promover uma festa popular no parque municipal para comemorar o aniversário de fundação do município. Sabe-se que esse parque possui formato retangular, com 120 m de comprimento por 150 m de largura. Além disso,
                                para segurança das pessoas presentes no local, a polícia recomenda que a densidade média, num evento dessa natureza, não supere quatro pessoas por metro quadrado.
                                Seguindo as recomendações de segurança estabelecidas pela polícia, qual é o número máximo de pessoas que poderão estar presentes na festa?
                                            
                                </Typography>
                                <Typography gutterBottom variant="h7" component="h2">
                                    <p>
                                    (A)1 000.
                                    </p>
                                    <br/>
                                    <p>
                                    (B) 4 500.
                                    </p>
                                    <br/>
                                    <p>
                                    (C)18 000.
                                    </p>
                                    <br/>
                                    <p>
                                    (D)72 000.
                                    </p>
                                    <br/>
                                    <p>
                                    (E)120 000.
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
                                <hr/>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                (Enem 2016) Um senhor, pai de dois filhos, deseja comprar dois terrenos, com áreas de mesma medida, um para cada filho. Um dos terrenos visitados já está demarcado e, embora não tenha um formato convencional 
                                (como se observa na Figura B), agradou ao filho mais velho e, por isso, foi comprado. O filho mais novo possui um projeto arquitetônico de uma casa que quer construir, mas, para isso, precisa de um terreno na forma retangular (como mostrado na Figura A) cujo comprimento seja 7 m maior do que a largura.
                                Para satisfazer o filho mais novo, esse senhor precisa encontrar um terreno retangular cujas medidas, em metro, do comprimento e da largura sejam iguais, respectivamente, a
                                            
                                </Typography>
                                <Typography gutterBottom variant="h7" component="h2">
                                    <p>
                                    (A)7,5 e 14,5.
                                    </p>
                                    <br/>
                                    <p>
                                    (B)9,0 e 16,0.
                                    </p>
                                    <br/>
                                    <p>
                                    (C)9,3 e 16,3.
                                    </p>
                                    <br/>
                                    <p>
                                    (D)10,0 e 17,0.
                                    </p>
                                    <br/>
                                    <p>
                                    (E)13,5 e 20,5.
                                    </p>
                                    <br/>
                                
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                </Grid>
             
                </Paper>

            </Grid>

            </Container>

        </>
    )
}

export default ExploreMais;
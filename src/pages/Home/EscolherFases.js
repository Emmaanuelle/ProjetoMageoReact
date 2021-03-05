import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar';
import { CardContent, Container, Typography, Card, Button, Grid,Paper, CardActionArea,CardMedia, CardActions} from '@material-ui/core';
import circle from '../../images/icons/circle.svg';
import  triangles from '../../images/icons/triangles.svg';
import reta  from '../../images/icons/Rectanglee.svg';
import Retang from '../../images/icons/verde.svg';
import fig3 from '../../images/icons/Pol.svg';
import fig4 from '../../images/icons/Ell.svg';
import Circ from '../../images/icons/Ci.png';
import Trian from '../../images/icons/Tri.png';
import retan from '../../images/icons/Retang.png';
import quadrad from '../../images/icons/Design.png';


const useStyles = makeStyles((theme)=>({
    conteudo:{
        height:"300%",   
        width:"35%",
        backgroundColor:"#1CB0F6",
        color:"white",
        fontWeight:"Bold",
        textAlign:"center",
        margin: theme.spacing(3),
        marginLeft:"5%"
    },
    conteudo1:{
        height:"300%",   
        width:"35%",
        backgroundColor:"#58CC02",
        color:"white",
        fontWeight:"Bold",
        textAlign:"center",
        margin: theme.spacing(3),
        marginLeft:"5%"
    },
    conteudo2:{
        height:"300%",   
        width:"35%",
        backgroundColor:"#F5F931",
        color:"white",
        fontWeight:"Bold",
        textAlign:"center",
        margin: theme.spacing(3),
        marginLeft:"5%"
    },
    conteudo3:{
        height:"300%",   
        width:"35%",
        backgroundColor:"#FFB800",
        color:"white",
        fontWeight:"Bold",
        textAlign:"center",
        margin: theme.spacing(3),
        marginLeft:"5%"
    },

    paper:{
        marginBottom:"20px",
        
    },

    titulo1:{
        textAlign:"center",
        fontSize:"20px",
        marginBottom:"25px",
        fontFamily:"'Poppins', sans-serif;",
        color:"#6A6A6A"
    },
    linha:{
        marginLeft:"5%"
    },
    linha1:{
        marginLeft:"5%"
    },

    root:{
        marginTop:"5%",
        marginBottom:"5%",
        paddingLeft:"5%",
        paddingRight:"5%",
        paddingTop:"5%"
    },
    root1:{
        marginTop:"5%",
        marginBottom:"5%",
        paddingLeft:"5%",
        paddingRight:"5%",
        paddingTop:"5%"

    },
    root2:{
        marginTop:"5%",
        marginBottom:"5%",
        paddingLeft:"5%",
        paddingRight:"5%",
        paddingTop:"5%"

    },
    root3:{
        marginTop:"5%",
        marginBottom:"5%",
        paddingLeft:"5%",
        paddingRight:"5%",
        paddingTop:"5%"

    },


    img:{
        width:"500px",
        height:"150px",
        
    },
    img1:{
        width:"500px",
        height:"150px",
        
       
    }
    
  }));


export default function EscolherFases(){


    const classes = useStyles();


return(

<div>
    <Navbar/>
    <Container>
    
                <Typography style={{ marginBottom: 20, color: '#6A6A6A', fontSize: "3rem", textAlign: "center", fontWeight:600, marginTop:"3%"}}>
                    MaGeo Fases
                </Typography>
                <Typography className={classes.titulo1}>
                    Ganhe pontos! Testando os seus conhecimentos em Geometria Plana.
                </Typography>
                <Typography style={{ marginBottom: 20, color: '#6A6A6A', fontSize: "190%", textAlign: "center", fontWeight:600, marginTop:"3%"}}>
                  
                 {/*    
                    style={{backgroundColor:"#0DD28B", content: "Fases",displayInline:"block", }} */}
                </Typography>
           
                <Grid container spacing={7} className={classes.linha} >
                {/* style={{background: `url(${triangulo})`, backgroundSize:"cover" }} */}
                
                <Grid   item xs={6} spacing={8} sm={5}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Fase Circulo"
                    className={classes.img}
                    image={quadrad}
                    title="Fase Circulo"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Fase Quadrado
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A fase Quadrada é composta por um conjunto de questões e 1 desafio no final da fase.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button href="/faseQuadrado" className={classes.conteudo}> Jogar</Button>
                {/* <Button size="small" color="primary">
                    Learn More
                    </Button> */}
                </CardActions>
                </Card>
                </Grid>
                
                <Grid   item xs={6} spacing={8} sm={5}>
                <Card className={classes.root1}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    className={classes.img1}
                    image={retan}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Fase Retângulo
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    A fase Quadrada é composta por um conjunto de questões e 1 desafio no final da fase.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button href="/faseRetangulo" className={classes.conteudo1} >Jogar</Button>
                    {/* <Button size="small" color="primary">
                    Learn More
                    </Button> */}
                </CardActions>
                </Card>
                </Grid>
             </Grid>
            
                
                
             <Grid container spacing={7} className={classes.linha1} >
                {/* style={{background: `url(${triangulo})`, backgroundSize:"cover" }} */}
                <Grid   item xs={6} spacing={8} sm={5}>
                <Card className={classes.root2}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Fase Circulo"
                    className={classes.img}
                    image={Trian}
                    title="Fase Circulo"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Fase Triângulo
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    A fase Quadrada é composta por um conjunto de questões e 1 desafio no final da fase.

                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button href="/faseTriangulo" className={classes.conteudo2} > Jogar</Button>  
               {/*  <Button size="small" color="primary">
                    Learn More
                    </Button> */}
                </CardActions>
                </Card>
                </Grid>
                

                <Grid   item xs={6} spacing={8} sm={5}>
                <Card className={classes.root3}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    className={classes.img1}
                    image={Circ}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Fase Circulo
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    A fase Quadrada é composta por um conjunto de questões e 1 desafio no final da fase.

                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button href="/faseCirculo" className={classes.conteudo3} >Jogar</Button>
                    {/* <Button size="small" color="primary">
                    Learn More
                    </Button> */}
                </CardActions>
                </Card>

                </Grid>
               
             </Grid>
           
    </Container>
</div>

)

}



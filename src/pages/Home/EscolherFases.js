import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar';
import { CardContent, Container, Typography, Card, Button, Grid,Paper} from '@material-ui/core';
import circle from '../../images/icons/circle.svg'
import  triangles from '../../images/icons/triangles.svg'


const useStyles = makeStyles((theme)=>({
    conteudo:{
        width:"150px",
        height:"150px",   
        backgroundColor:"#E5E7EB",
        fontWeight:"Bold",
        textAlign:"center",
        margin: theme.spacing(5)  
    },
    conteudo1:{
        width:"150px",
        height:"150px",   
        backgroundColor:"#FFF730",
        fontWeight:"Bold",
        textAlign:"center",
        margin: theme.spacing(5) 
    },
    conteudo2:{
        width:"150px",
        height:"150px",   
        backgroundColor:"#0DD28B",
        fontWeight:"Bold",
        textAlign:"center",
        margin: theme.spacing(5)  
    },
    conteudo3:{
        width:"150px",
        height:"150px",   
        backgroundColor:"#166CFA",
        fontWeight:"Bold",
        textAlign:"center",
        margin: theme.spacing(5)  

    },
    fase:{
        margin:"auto",
        fontWeight:"Bold",
        marginLeft:"50px",
        fontFamily:"'Poppins', sans-serif;",
    },
    paper:{
        marginBottom:"20px",
        
    },
    titulo:{
        textAlign:"center",
        fontSize:"30px",
        fontWeight:"bold",
        marginTop:"50px",
        marginBottom:"70px",
        fontFamily:"'Poppins', sans-serif;",
    }

    
  }));


export default function EscolherFases(){


    const classes = useStyles();


return(

<div>
    <Navbar/>
    <Container>
                <Typography className={classes.titulo}>
                    Bem Vindo ao MaGeo Quiz! O jogo começa na primeira fase dos Quadrados!
                </Typography>
                <Grid container spacing={7} >
                    
                <Grid   item xs={6} spacing={8} sm={3}>
                <Paper className={classes.paper}>
                
                <Card>
                <CardContent>
                <span className={classes.fase}>
                    Fase Quadrado
                    <Button href="/faseQuadrado" className={classes.conteudo} style={{ backgroundSize:"cover",alignContent:"center",}} ></Button>
                    </span>
                </CardContent>
                </Card>
                </Paper>
                </Grid>

                <Grid   item xs={6} spacing={8} sm={3}>
                <Paper className={classes.paper}>
                
                <Card>
                <CardContent>
                <span className={classes.fase}>
                Fase Retângulo
                    <Button href="/faseRetangulo" className={classes.conteudo1}></Button>
                    </span>
                </CardContent>
                </Card>
                </Paper>
                </Grid>

                <Grid   item xs={6} spacing={8} sm={3}>
                <Paper className={classes.paper}>
                <Card>
                <CardContent>
                <span className={classes.fase}>
                Fase Triângulo

                <div style={{background: `url(${triangles})`, backgroundSize:"cover", }}>
                <Button href="/faseTriangulo" className={classes.conteudo2}></Button>
                </div>
                    
                    </span>
                </CardContent>
                </Card>
                </Paper>
                </Grid>
                
                <Grid   item xs={6} spacing={8} sm={3}>
                <Paper className={classes.paper}>
                <Card>
                <CardContent>
                <span className={classes.fase}>
                Fase Circulo
               
                    <div  style={{background: `url(${circle})`, backgroundSize:"cover", }}>
                    <Button href="/faseCirculo" className={classes.conteudo3} >
                    </Button>
                    </div>
                
                    
                  
                    </span>
                </CardContent>
                </Card>
                </Paper>
                </Grid>

                {/* style={{background: `url(${triangulo})`, backgroundSize:"cover" }} */}
              
        
                </Grid>
                
            
           
    </Container>
</div>

)

}



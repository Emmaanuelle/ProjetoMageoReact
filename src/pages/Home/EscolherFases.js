import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar';
import { CardContent, Container, Typography, Card, Button, Grid,Paper} from '@material-ui/core';
import triangulo from '../../images/icons/triangulo.jpg'



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
        marginLeft:"50px"
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
                    Ola Mundo!
                </Typography>
                <Grid container spacing={7} >
                    
                <Grid   item xs={6} spacing={8} sm={3}>
                <Paper className={classes.paper}>
                
                <Card>
                <CardContent>
                <span className={classes.fase}>
                    Fase Quadrado
                    <Button href="/faseQuadrado" className={classes.conteudo} style={{ backgroundSize:"cover",alignContent:"center",}} >Fase Quadrado</Button>
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
                    <Button href="/faseRetangulo" className={classes.conteudo1}>Fase Retangulo</Button>
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
                    <Button href="/faseTriangulo" className={classes.conteudo2}>Fase Triângulo</Button>
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
                <Button href="/faseCirculo" className={classes.conteudo3}>Fase Círculo</Button>
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



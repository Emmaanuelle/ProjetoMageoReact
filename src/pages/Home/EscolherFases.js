import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar';
import { CardContent, Container, Typography, Card, Button} from '@material-ui/core';
import triangulo from '../../images/icons/triangulo.jpg'



const useStyles = makeStyles({
    conteudo:{
        marginLeft:"10%",
        width:"150px",
        height:"150px",   
        backgroundColor:"#E5E7EB",
        fontWeight:"Bold",
    },
    conteudo1:{
        marginLeft:"10%",
        width:"150px",
        height:"150px",   
        backgroundColor:"#FFF730"
    },
    conteudo2:{
        marginLeft:"10%",
        width:"150px",
        height:"150px",   
        backgroundColor:"#0DD28B"
    },
    conteudo3:{
        marginLeft:"10%",
        width:"150px",
        height:"150px",   
        backgroundColor:"#166CFA"

    },
    fase:{
        fontWeight:"Bold",
        marginLeft:"10%",
        marginBottom:"20px"
    }
    
  });


export default function EscolherFases(){


    const classes = useStyles();


return(

<div>
    <Navbar/>
    <Container>
                <Typography>
                    <p>
                    Escolha a sua fase!
                    </p>
               
                </Typography>
            <Card>
                
                <CardContent >
                <Typography className={classes.fase}>
                    Fase Quadrado
                </Typography>
                <Button href="/faseQuadrado" className={classes.conteudo} >Fase Quadrado</Button>
                {/* style={{background: `url(${triangulo})`, backgroundSize:"cover" }} */}
               
                <Button href="/faseRetangulo"className={classes.conteudo1}>Fase Retângulo</Button>
               
                <Button href="/faseTriangulo" className={classes.conteudo2}>Fase Triângulo</Button>
                
                <Button href="/faseCirculo" className={classes.conteudo3}>Fase Círculo</Button>
                </CardContent>
               
            </Card>
    </Container>
</div>

)

}



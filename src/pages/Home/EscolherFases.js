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
        backgroundColor:"#FFF730"
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
                <Typography>
                    Fase Quadrado
                </Typography>
                <Button href="/faseQuadrado" className={classes.conteudo} style={{background: `url(${triangulo})`, backgroundSize:"cover" }}></Button>
               
                <Button href="/faseRetangulo"className={classes.conteudo}>Fase Retângulo</Button>
                <Button href="/faseTriangulo" className={classes.conteudo}>Fase Triângulo</Button>
                <Button href="/faseCirculo" className={classes.conteudo}>Fase Círculo</Button>
                </CardContent>
          
            </Card>
           
    </Container>
</div>

)

}



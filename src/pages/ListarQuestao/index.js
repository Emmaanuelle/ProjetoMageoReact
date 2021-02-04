import React, { useState,useEffect} from "react";
import api from "../../services/api"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from "../NavbarAdministrador";
import EditarQuestoes from "./EditarQuestoes";
import DeletarQuestoes from "./DeletarQuestoes";
import { Card, CardActionArea, CardContent,CardActions, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titulo:{
    textAlign:"center",
    marginTop:"30px",
    marginBottom:"30px",
    fontSize:"30px",
    fontFamily:"'Poppins', sans-serif;",

  }
}));




export default function ListarQuestao() {
  const classes = useStyles();


  const [questoes, setQuestoes] = useState([])
    useEffect(() => {
        
        const getQuestoes= async () => {
            try {
                const response = await api.get('/questao');
                setQuestoes(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error);
                alert("Erro em carregar os dados")
            }
        }
        getQuestoes()
    }, []);
 
  return (
    <>
      <Navbar />
      <Container >
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.titulo}>
           <b>Listar Questão</b> 
        </Typography>
            {questoes.length > 0 ? questoes.map((valor,indice)=>{
              return(
                <Grid container spacing={10}>
                <Grid item xs={12} spacing={10}>
                <Paper className={classes.paper}>
                <Card>
                   <CardActionArea>
                       <CardContent>
                       <div key={valor.id}>
                         
                        <p><b>Pergunta:</b>{valor.pergunta}</p><hr/>
                        <p><b>Alternativas:</b>{valor.alternativa}</p><hr/>
                        <p><b>Resposta:</b>{valor.resposta}</p><hr/>
                        <p><b>Fase:</b>{valor.fase}</p><hr/>
                        <p><b>Dica:</b>{valor.dica}</p><hr/>
                        <p><b>Nivel:</b>{valor.nivel}</p><hr/>
                      
                      </div>
                       </CardContent>

                   </CardActionArea>
                   <CardActions>
                   <EditarQuestoes questoes={valor}/>
                    <DeletarQuestoes questoes={valor}/>
                   </CardActions>

               </Card>
                </Paper>
                  
               </Grid>
               </Grid>
              )
            }):<p>Não tem perguntas cadastrada no momento!</p>}
      
        </div>
      </Container>
    </>
  );
}
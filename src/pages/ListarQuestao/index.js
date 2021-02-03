import React, { useState,useEffect} from "react";
import api from "../../services/api"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from "../NavbarAdministrador";
import EditarQuestoes from "./EditarQuestoes";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
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
          <Typography component="h1" variant="h5">
            Listar Questão
        </Typography>
            {questoes.length > 0 ? questoes.map((valor,indice)=>{
              return(
                <div key={valor.id}>
                  <p>{valor.pergunta}</p><hr/>
                <EditarQuestoes questoes={valor}/>
                </div>
              )
            }):<p>Não tem perguntas cadastrada no momento!</p>}
      
        </div>
      </Container>
    </>
  );
}
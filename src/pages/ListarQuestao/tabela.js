import React, { useState,useEffect} from "react";
import api from "../../services/api"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from "../NavbarAdministrador";
import MUIDataTable from "mui-datatables";






export default function ListarQuestao() {
  
    const colunas=["nome","sobrenome","ano_escolar","escola","pontos"]

  const [questoes, setQuestoes] = useState([])
    useEffect(() => {
        
        const getQuestoes= async () => {
            try {
                const response = await api.get('/ranking');
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
        <div >
          <Typography component="h1" variant="h5" >
           <b>Listar Questão</b> 
        </Typography>
        <MUIDataTable title={"Questões"} columns={colunas} data={questoes}/>

        </div>
      </Container>
    </>
  );
}
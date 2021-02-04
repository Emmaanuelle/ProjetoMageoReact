import React, { useState,useEffect} from "react";
import api from "../../services/api"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from "../NavbarAdministrador";
import MUIDataTable from "mui-datatables";


const useStyles = makeStyles((theme) => ({

 
}));




 function Desempenho() {
  
    const colunas=["nome","sobrenome","ano_escolar","escola","pontos"]

  const [ranking, setRanking] = useState([])
    useEffect(() => {
        
        const getRanking= async () => {
            try {
                const response = await api.get('/ranking');
                setRanking(response.data)
               
            } catch (error) {
               
                alert("Erro em carregar os dados")
            }
        }
        getRanking()
    }, []);
 
  return (
    <>
      <Navbar />
      <Container >
        <CssBaseline />
        <div >
          <Typography component="h1" variant="h3" >
           <b>Ranking</b> 
        </Typography>
        <MUIDataTable title={"Ranking"} columns={colunas} data={ranking}/>

        </div>
      </Container>
    </>
  );
}
export default Desempenho;





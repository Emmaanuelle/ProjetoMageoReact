import React, { useState,useEffect} from "react";
import api from "../../services/api"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from "../NavbarAdministrador";
import MUIDataTable from "mui-datatables";


const useStyles = makeStyles((theme) => ({
titulo:{
  textAlign:"center",
  marginTop:"30px",
  marginBottom:"30px",
  color:"#6A6A6A",


}
 
}));




 function Desempenho() {
    const classes = useStyles();
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
          <Typography component="h1" variant="h4"  className={classes.titulo}>
           <b>Desempenho dos Estudantes</b> 
        </Typography>
        <MUIDataTable title={"Desempenho"} columns={colunas} data={ranking}/>

        </div>
      </Container>
    </>
  );
}
export default Desempenho;





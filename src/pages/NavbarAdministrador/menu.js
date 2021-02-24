import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button,Typography } from '@material-ui/core';

export const mainListItems = (

  <div>
    <ListItem button>
      <Button fullWidth href='/perfilAdmin' style={{backgroundColor:"#58CC02", color:"#FFFEFE", fontFamily:"'Poppins', sans-serif;",textAlign:"center", fontWeight:"bold"}}> {/* criar perfil do admin */}
        <ListItemText primary="Professor(a)" /></Button> 
    </ListItem>
    
    <ListItem button>
      <Button fullWidth href='/desempenho'  style={{backgroundColor:"#58CC02",color:"#FFFEFE",  fontFamily:"'Poppins', sans-serif;",textAlign:"center"}}> {/* criar uma pagina para desempenho dos alunos */}
      <ListItemText primary=" Desempenho"  secondary="dos Estudantes"
           
              
            />
       
       </Button>
    </ListItem>


    <ListItem button>
      <Button fullWidth href='/questao'  style={{backgroundColor:"#58CC02",color:"#FFFEFE", fontFamily:"'Poppins', sans-serif;",fontSize:"20px",textAlign:"center"}}>
        <ListItemText primary=" Cadastrar Questão "
           /></Button>
    </ListItem>
    <ListItem button>
      <Button fullWidth href='/listarQuestao'  style={{backgroundColor:"#58CC02",color:"#FFFEFE", fontFamily:"'Poppins', sans-serif;",textAlign:"center", fontSize:"30%"}}>{/* listar/editar/deletar as questões  */}
        <ListItemText primary=" Lista de  Questões" /></Button>
    </ListItem>
   
     <ListItem button>
      <Button fullWidth href='/sobreAdmin'  style={{backgroundColor:"#58CC02",color:"#FFFEFE",fontFamily:"'Poppins', sans-serif;",textAlign:"center"}}>
        <ListItemText primary="Sobre" /></Button>
    </ListItem>
    <ListItem button>
      <Button fullWidth href='/ajudaAdmin'  style={{backgroundColor:"#58CC02",color:"#FFFEFE", fontFamily:"'Poppins', sans-serif;",textAlign:"center"}}>
        <ListItemText primary="Ajuda" /></Button>
    </ListItem> 
  </div>
);
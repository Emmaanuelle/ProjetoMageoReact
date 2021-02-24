import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';

export const mainListItems = (
  <div>
    <ListItem button>
      <Button fullWidth href='/perfil' style={{backgroundColor:"#58CC02",color:"#FFFEFE", fontFamily:"'Poppins', sans-serif;",textAlign:"center", fontSize:"30%"}} >
        <ListItemText primary="Meu Perfil" /></Button>
    </ListItem>
    <ListItem button>
      <Button fullWidth href='/ranking' style={{backgroundColor:"#58CC02",color:"#FFFEFE", fontFamily:"'Poppins', sans-serif;",textAlign:"center", fontSize:"30%"}}>
        <ListItemText primary="Ranking" /></Button>
    </ListItem>
    <ListItem button>
      <Button fullWidth href='/explore' style={{backgroundColor:"#58CC02",color:"#FFFEFE", fontFamily:"'Poppins', sans-serif;",textAlign:"center", fontSize:"30%"}}>
        <ListItemText primary="Explore +" /></Button>
    </ListItem>
    {/* <ListItem button>
      <Button fullWidth href='/questao'>
        <ListItemText primary="Criar Questões" /></Button>
    </ListItem> */}
    <ListItem button>
      <Button fullWidth href='/sobre' style={{backgroundColor:"#58CC02",color:"#FFFEFE", fontFamily:"'Poppins', sans-serif;",textAlign:"center", fontSize:"30%"}}>
        <ListItemText primary="Sobre" /></Button>
    </ListItem>
    <ListItem button>
      <Button fullWidth href='/ajuda' style={{backgroundColor:"#58CC02",color:"#FFFEFE", fontFamily:"'Poppins', sans-serif;",textAlign:"center", fontSize:"30%"}}>
        <ListItemText primary="Ajuda" /></Button>
    </ListItem>
  </div>
);
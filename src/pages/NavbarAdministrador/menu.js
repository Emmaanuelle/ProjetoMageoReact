import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';

export const mainListItems = (
  <div>
    <ListItem button>
      <Button fullWidth href='/perfilAdmin'> {/* criar perfil do admin */}
        <ListItemText primary="Professor(a)" /></Button> 
    </ListItem>
    <ListItem button>
      <Button fullWidth href='/desempenho'> {/* criar uma pagina para desempenho dos alunos */}
        <ListItemText primary="Desempenho" /></Button>
    </ListItem>
    <ListItem button>
      <Button fullWidth href='/listarQuestao'>{/* listar/editar/deletar as questões  */}
        <ListItemText primary=" Listar Questões" /></Button>
    </ListItem>
    <ListItem button>
      <Button fullWidth href='/questao'>
        <ListItemText primary="Criar Questões" /></Button>
    </ListItem>
     <ListItem button>
      <Button fullWidth href='/sobre'>
        <ListItemText primary="Sobre" /></Button>
    </ListItem>
    <ListItem button>
      <Button fullWidth href='/ajuda'>
        <ListItemText primary="Ajuda" /></Button>
    </ListItem> 
  </div>
);
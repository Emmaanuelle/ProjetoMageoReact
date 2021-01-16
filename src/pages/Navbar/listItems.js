import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';

export const mainListItems = (
  <div>
    <ListItem button>
      <Button fullWidth href='/perfil'>
        <ListItemText primary="Meu Perfil" /></Button>
    </ListItem>
    <ListItem button>
      <Button fullWidth href='/ranking'>
        <ListItemText primary="Ranking" /></Button>
    </ListItem>
    <ListItem button>
      <Button fullWidth href='/explore'>
        <ListItemText primary="Explore +" /></Button>
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
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';

export const mainListItems = (
  <div>
    <ListItem button>
      <Button href='/perfil'>
        <ListItemText primary="Meu Perfil" /></Button>
    </ListItem>
        <ListItem button>
          <Button href='/questao'>
            <ListItemText primary="Categorias" /></Button>
        </ListItem>
        <ListItem button>
          <Button href='/questao'>
            <ListItemText primary="Explore +" /></Button>
        </ListItem>
    <ListItem button>
      <Button href='/about'>
        <ListItemText primary="Sobre" /></Button>
    </ListItem>
    <ListItem button>
      <Button href='/help'>
        <ListItemText primary="Ajuda" /></Button>
    </ListItem>
  </div>
);
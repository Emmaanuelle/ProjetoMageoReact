import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core'
import Navbar from '../Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
    
  
    heroButtons: {
      marginTop: theme.spacing(4),
    },
  }));
const Home = (props) => {
    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Container>
          
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    Começar o quiz
                  </Button>
                </Grid>
                </Grid>
                </div>
            </Container>
        </>
    );
};

export default Home;
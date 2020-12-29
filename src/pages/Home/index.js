import React from 'react';
import { Button, Container, Grid, ThemeProvider } from '@material-ui/core'
import Navbar from '../Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {theme} from '../../theme';
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
            <ThemeProvider theme={theme}>
            <Container>
          
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="secondary" href='/quiz'>
                    Começar o quiz
                  </Button>
                </Grid>
                </Grid>
                </div>
            </Container>
            </ThemeProvider>
        </>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Button, Typography } from '@material-ui/core';
import Navbar from '../Navbar';
import api from '../../services/api';
import ReactLoading from 'react-loading';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  alternativas: {
    background: 'linear-gradient(45deg, #784DF1 20%, #36BD8C 70%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: '10vh',
    width: '100%',
    padding: '0 30px',
  },
});
export default function Quiz() {
  const classes = useStyles();

  const [questions, setQuestion] = useState([]);
  useEffect(() => {
    async function getQuestions() {
      try {
        const resposta = await api.get('/questao');
        setQuestion(resposta.data)
        console.log(resposta.data)
      } catch (error) {
        console.log(error.response);
      }
    }
    getQuestions();
  }, [])
  // if(questions.length>0){
  //   for (const i in questions) {
     
  //   }
  // }
  const alternativa = questions.length > 0 ?questions[0].alternativa.split(","):['Quiz','Em','Construção'];
  return (
    <>
      <Navbar />
      <Container>
        {questions.length > 0 ? (

          <Grid container spacing={10}>
            <Grid item xs={12}>
            <div dangerouslySetInnerHTML={{ __html: questions.length > 0 ?questions[0].video :'<h4>Divirta-se</h4>' }} />
          </Grid>
            <Grid item xs={12}>
              <Box display='flex' justifyContent="center">
                <Typography component="h1" variant="h5">
                  {questions[0].pergunta}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button className={classes.alternativas}>
                  {questions[0].resposta}
                </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Button className={classes.alternativas}>
                  {alternativa[0]}
                </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Button className={classes.alternativas}>
                  {alternativa[1]}
                </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button className={classes.alternativas}>
                  {alternativa[2]}
                </Button>
            </Grid>
            <Grid container justify='center'>
              
              <Button className={classes.button}> 
                    Próximo
                </Button>
            </Grid>
          </Grid>
        ) : (
            <Box display='flex' justifyContent="center">
              <Typography component="h1" align='center' variant="h5" display='inline' color='error'>Carregando.. Aguarde</Typography>
              <ReactLoading className='loading' type={"bubbles"} color={'#392'} height={'100%'} width={'20%'} />
            </Box>
          )
        }
      </Container>
    </>
  )
}
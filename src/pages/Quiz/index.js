import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Button, Typography } from '@material-ui/core';
import Navbar from '../Navbar';
import api from '../../services/api';
import ReactLoading from 'react-loading';

export default function Quiz() {
  const [questions, setQuestion] = useState([]);
  useEffect(() => {
    async function getQuestions() {
      try {
        const resposta = await api.get('/questao');
        setQuestion(resposta.data)
        console.log(resposta.data);
      } catch (error) {
        console.log(error.response);
      }
    }
    getQuestions();
  }, [])
  return (
    <>
      <Navbar />
      <Container>
        {questions.length > 0 ? (

          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              {question[0].video}
            <iframe title='video' width="70%" height="100%" src={questions[0].video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Grid>
            <Grid item xs={12} sm={6}>
              <Box display='flex' justifyContent="center">
                <Typography component="h1" variant="h5">
                  {questions[0].pergunta}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box alignItems="flex-start" justifyContent="flex-start">
                <Button color='secondary'>
                  {questions[0].pergunta}
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box alignItems="flex-end" justifyContent="flex-end">
                <Button color='secondary'>
                  {questions[0].alternativa}

                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box alignItems="flex-start" justifyContent="flex-start">
                <Button color='secondary'>
                  {questions[0].alternativa}
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box alignItems="flex-end" justifyContent="flex-end">
                <Button color='secondary'>
                  {questions[0].alternativa}
                </Button>
              </Box>
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
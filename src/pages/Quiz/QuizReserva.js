import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import ReactLoading from 'react-loading';
import premio from '../../images/icons/premio.svg'
import Questao2 from './Questao2';
import { makeStyles } from '@material-ui/core/styles';
const API_URL = 'https://opentdb.com/api.php?amount=1&category=19&difficulty=medium&type=multiple'
//const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple'
// Referencia https://youtu.be/HWk-3DkcxKM?t=5125

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    textAlign:'center',
    height: 100,
    width: 100,
  },
});

function QuizReserva() {
  const [questions, setQuestions] = useState([]);
  const [pontuacao, setPontuacao] = useState(0);
  const [indexAtual, setIndexAtual] = useState(0);
  const [mostrarResposta, setMostrarResposta] = useState(false)
  const classes = useStyles();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers
          ].sort(() => Math.random() - 0.5)
        }))
        setQuestions(questions)
      })
  }, [])
  const handleAnswer = (answer) => {
    if (!mostrarResposta) {//Previnindo respostas duplicadas
      //verifica se a resposta está correta
      if (answer === questions[indexAtual].correct_answer) {
        //Aumenta a pontuação
        setPontuacao(pontuacao + 1)
      }
    }

    setMostrarResposta(true)
  }
  const irParaProximaQuestao = () => {
    const newIndex = indexAtual + 1
    setIndexAtual(newIndex)//Incrementa para a próxima pergunta
    setMostrarResposta(false);

  }
  return (
    <div>
      <Navbar />
      <div className="bg-white-500 text-black flex 
     justify-center items-center h-screen">
        {questions.length > 0 ?
          indexAtual >= questions.length ? (
            <Card>
              <CardMedia
              className={classes.media}
                image={premio}
                title="Prêmio"
              />

              <CardContent>
                <Typography variant="h3" color="textSecondary" component="h5">
                  Fim de Jogo!! Seu placar foi {pontuacao}!
        </Typography>
              </CardContent>

            </Card>
          ) : (
              <Questao2 data={questions[indexAtual]}
                irParaProximaQuestao={irParaProximaQuestao}
                mostrarResposta={mostrarResposta} handleAnswer={handleAnswer} />
            ) : (
            <Box display='flex' justifyContent="center">
              <Typography component="h1" align='center' variant="h5" display='inline' color='error'>Carregando.. Aguarde</Typography>
              <ReactLoading className='loading' type={"bubbles"} color={'#392'} height={'100%'} width={'20%'} />
            </Box>
          )}
      </div>
    </div>
  )
}
export default QuizReserva;
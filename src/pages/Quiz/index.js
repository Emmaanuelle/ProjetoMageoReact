import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import Navbar from '../Navbar';
import api from '../../services/api';
import ReactLoading from 'react-loading';
import Questao from './Questao';
export default function Quiz() {

  const [questions, setQuestions] = useState([]);
  const [pontuacao, setPontuacao] = useState(0);
  const [indexAtual, setIndexAtual] = useState(0);
  const [mostrarResposta,setMostrarResposta]= useState(false)

  useEffect(() => {
    async function getQuestions() {
      try {
        const resposta = await api.get('/questao');
        const questions = resposta.data.map((question)=>({
          ...question,
          answers:[
            question.resposta,
            //Pega as alternativas e separa onde tem virgula
          ...question.alternativa.split(',',3)
          ].sort(()=>Math.random()-0.5)
        }))
        setQuestions(questions)
      } catch (error) {
        console.log(error.response);
      }
    }
    getQuestions();
  }, [])
  const handleAnswer = (answer) => {
    if(!mostrarResposta){//Previnindo respostas duplicadas
      //verifica se a resposta está correta
      if (answer === questions[indexAtual].resposta) {
        //Aumenta a pontuação
        setPontuacao(pontuacao + 1)
      }
    }
    setMostrarResposta(true)
  }
  const irParaProximaQuestao=()=>{
    const newIndex = indexAtual +1
    setIndexAtual(newIndex)//Incrementa para a próxima pergunta
    setMostrarResposta(false);
    
  }
  //const alternativa = questions.length > 0 ?questions[0].alternativa.split(","):['Quiz','Em','Construção'];
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white flex 
     justify-center items-center h-screen">
        
       {  questions.length > 0 ? 
         indexAtual>=questions.length?(
         <h1 className="text-3l text-white font-bold">Fim de Jogo!! Seu placar foi {pontuacao}!</h1>
        ): (
        <Questao data={questions[indexAtual]} 
        irParaProximaQuestao={irParaProximaQuestao}
        mostrarResposta={mostrarResposta} handleAnswer={handleAnswer} />
        ) : (
            <Box display='flex' justifyContent="center">
              <Typography component="h1" align='center' variant="h5" display='inline' color='error'>Carregando.. Aguarde</Typography>
              <ReactLoading className='loading' type={"bubbles"} color={'#392'} height={'100%'} width={'20%'} />
            </Box>
          )
        }
 </div>
    </>
  )
}
import React, { useEffect, useState } from 'react';
import Questao from './Questao';
//const API_URL = 'https://opentdb.com/api.php?amount=10&category=19&type=multiple'
const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple'
//https://youtu.be/HWk-3DkcxKM?t=5125
function Principal() {
  const [questions, setQuestions] = useState([]);
  const [pontuacao, setPontuacao] = useState(0);
  const [indexAtual, setIndexAtual] = useState(0);
  const [mostrarResposta,setMostrarResposta]= useState(false)

    useEffect(() => {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          const questions = data.results.map((question)=>({
            ...question,
            answers:[
              question.correct_answer,
              ...question.incorrect_answers
            ].sort(()=>Math.random()-0.5)
          }))
          setQuestions(questions)
        })
    }, [])
  const handleAnswer = (answer) => {
    if(!mostrarResposta){//Previnindo respostas duplicadas
      //verifica se a resposta está correta
      if (answer === questions[indexAtual].correct_answer) {
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
  return (
    <div className="bg-purple-500 text-white flex 
     justify-center items-center h-screen">
       {  questions.length > 0 ? 
         indexAtual>=questions.length?(
         <h1 className="text-3l text-white font-bold">Fim de Jogo!! Seu placar foi {pontuacao}!</h1>
        ): (
        <Questao data={questions[indexAtual]} 
        irParaProximaQuestao={irParaProximaQuestao}
        mostrarResposta={mostrarResposta} handleAnswer={handleAnswer} />
      ) : (
          <h1 className="text-2l">Carregando</h1>
        )}
    </div>
  )
}
export default Principal
import React, { useEffect, useState } from 'react';
import { Box, Typography,Button, Card, CardContent, CardMedia } from '@material-ui/core';
import Navbar from '../Navbar';
import api from '../../services/api';
import premio from '../../images/icons/premio.svg'
import ReactLoading from 'react-loading';
import Questao from './Questao';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  media: {
    textAlign:'center',
    height: 100,
    width: 100,
  },
});


export default function Quiz() {
  const classes = useStyles();

  const [questions, setQuestions] = useState([]);
  const [pontos, setPontuacao] = useState(0);
  const[acerto, setAcerto] = useState(0);
  const [indexAtual, setIndexAtual] = useState(0);
  const [mostrarResposta,setMostrarResposta]= useState(false)
  const [user_id,setUserId] = useState(localStorage.getItem('user_id'));
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
          ].sort(()=>Math.random()-0.5),
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
        setAcerto(acerto + 1)
        setPontuacao(pontos + 10)
      }
    }
    setMostrarResposta(true)
  }
  const irParaProximaQuestao=()=>{
    const newIndex = indexAtual +1
    setIndexAtual(newIndex)//Incrementa para a próxima pergunta
    setMostrarResposta(false);
    
  }
  async function cadastrarRanking(e){
    e.preventDefault()
    const data = {pontos,user_id};
    try {
      await api.post('/ranking',data);
      alert("Parabéns Jogo Finalizado")
    } catch (error) {
      console.log(error);
    }
  }
  //const alternativa = questions.length > 0 ?questions[0].alternativa.split(","):['Quiz','Em','Construção'];
 

function desafiofases (){
  if(indexAtual === 4  &&  acerto === 5 ){
    setPontuacao(pontos*2);
  }
}

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white flex 
     justify-center items-center h-screen">
        
       {  questions.length > 0 ? 
          indexAtual>=questions.length?(
          //desafiofases?(
          
          <Card>
          <CardMedia
          className={classes.media}
            image={premio}
            title="Prêmio"
          />

          <CardContent>
            <Typography variant="h3" color="textSecondary" component="h5">
              Fim de Jogo!! Seu placar foi {pontos}!
    </Typography>
          </CardContent>
          <form onSubmit={cadastrarRanking}>
            <input type="text" hidden value={user_id} onChange={e=>setUserId(e.target.value)}/>
            <Button type='submit'>Finalizar</Button>
          </form>
        </Card>
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
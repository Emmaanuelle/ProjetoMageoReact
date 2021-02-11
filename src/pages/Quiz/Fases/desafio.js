import React, { useEffect, useState } from 'react';
import { Box, Typography,Button, Card, CardContent, CardMedia, Container } from '@material-ui/core';
import Navbar from '../../Navbar';
import api from '../../../services/api';
import premio from '../../../images/icons/premio.svg'
import ReactLoading from 'react-loading';
import QuestaoDesafio from './QuestaoDesafio';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  media: {
    marginLeft: "auto",
    marginRight: "auto",
    height: 100,
    width: 100,
  },
  container:{
    marginTop:'2%'
  },
  conteudo:{
    paddingTop:"30px",

    textAlign:"center"
  }
});


export default function Quiz() {
  const classes = useStyles();

  const [pontos, setPontuacao] = useState(0);
  const[acerto, setAcerto] = useState(0);
  const [indexAtual, setIndexAtual] = useState(0);
  const[desafio,setDesafio] =useState([])
  const [mostrarResposta,setMostrarResposta]= useState(false)
  const [user_id,setUserId] = useState(localStorage.getItem('user_id'));

  useEffect(() => {
    async function getQuestions() {
      try {
        const resposta = await api.get('/desafio');
        const desafio = resposta.data.map((question)=>({
            
          ...question,/* 
          {question.nivel===} */
          
          answers:[
            question.resposta,
            //Pega as alternativas e separa onde tem virgula
          ...question.alternativa.split(',',3)
          ].sort(()=>Math.random()-0.5),
        }))
        setDesafio(desafio)
      } catch (error) {
        console.log(error.response);
      }
    }
    getQuestions();
  }, [])
  const handleAnswer = (answer) => {
    if(!mostrarResposta){//Previnindo respostas duplicadas
      //verifica se a resposta está correta
      if (answer === desafio[indexAtual].resposta) {
        if(indexAtual === 4  &&  acerto === 5 ){
          setPontuacao(pontos*2);
        }else{
          setAcerto(acerto + 1)
          setPontuacao(pontos + 30)

        }
        //Aumenta a pontuação
        /* setAcerto(acerto + 1)
        setPontuacao(pontos + 10) */
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
      alert("Parabéns Fase Concluída")
      //history.push("/");
      setTimeout(()=>{window.location.reload()},300)
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <>
      <Navbar />
      <div className="text-black 
     items-center h-screen">
        <Container className={classes.container}>
       {  desafio.length > 0 ? 
          indexAtual>=desafio.length?(
          //desafiofases?(
          
          <Card>
          <CardContent className={classes.conteudo}>
            <Typography variant="h3" color="textSecondary" component="h5">
              Fase Concluida!
            </Typography>
            <Typography variant="h3" color="textSecondary" component="h5">
              Parabéns! Você concluiu a Fase dos Quadrados.
          </Typography>
          <Typography  variant="h3" color="textSecondary" component="h5">
           Pontos:{pontos}!
          </Typography>
          <CardMedia
           className={classes.media}
            image={premio}
            title="Prêmio" 
          />
           <Typography variant="h3" color="textSecondary" component="h5">
              Clique no Botão para Iniciar a Proxíma Fase!
            </Typography>
          </CardContent>
          <CardContent className={classes.conteudo}>
        
          <form onSubmit={cadastrarRanking} >
            <input type="text" hidden value={user_id} onChange={e=>setUserId(e.target.value)}/>
            <Button type='submit'>Proxíma Fase</Button>
          </form>
          </CardContent>
        </Card>

        ): (
        <QuestaoDesafio data={desafio[indexAtual]} 
        indexAtual={indexAtual}
        desafio={desafio}
        irParaProximaQuestao={irParaProximaQuestao}
        mostrarResposta={mostrarResposta} handleAnswer={handleAnswer} />
        ) : (
            <Box display='flex' justifyContent="center">
              <Typography component="h1" align='center' variant="h5" display='inline' color='error'>Carregando.. Aguarde</Typography>
              <ReactLoading className='loading' type={"bubbles"} color={'#392'} height={'100%'} width={'20%'} />
            </Box>
          )
        }
        </Container>
 </div>
    </>
  )
}
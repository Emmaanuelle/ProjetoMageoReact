import React, { useEffect, useState } from 'react';
import { Box, Typography,Button, Card, CardContent, CardMedia, Container } from '@material-ui/core';
import Navbar from '../../Navbar';
import api from '../../../services/api';
import premio from '../../../images/icons/segundo.svg'
import ReactLoading from 'react-loading';
import Questao from '../Questao';
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
    marginTop:'3%'
  },
  conteudo:{
    paddingTop:"70px",

    textAlign:"center"
  },
  bnt:{
    background:"#733AC9", 
    color:"white",
    height:"60px",
    width:"200px",

  }
});


export default function Quiz() {
  const classes = useStyles();

  const [questions, setQuestions] = useState([]);
  const [pontos, setPontuacao] = useState(0);
  const[acerto, setAcerto] = useState(0);
  const [indexAtual, setIndexAtual] = useState(0);
  const [mostrarResposta,setMostrarResposta]= useState(false)
  const [user_id,setUserId] = useState(localStorage.getItem('user_id'));
  const history = useHistory();

  useEffect(() => {
    async function getQuestions() {

      try {
        const resposta = await api.get('/faseRetangulo');
        const questions = resposta.data.map((question)=>({
          ...question,
          answers:[
            question.resposta,
            //Pega as alternativas e separa onde tem virgula
          ...question.alternativa.split('@',3)
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
        if(indexAtual === 4  &&  acerto === 5 ){
          setPontuacao(pontos*2);
        }else{
          setAcerto(acerto + 1)
          setPontuacao(pontos + 10)

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
      history.push("/desafioRetangulo");
      //setTimeout(()=>{window.location.reload()},300)
    } catch (error) {
      console.log(error);
    }
  }
  //const alternativa = questions.length > 0 ?questions[0].alternativa.split(","):['Quiz','Em','Construção'];
 console.log(questions);

// function desafiofases (){
//   if(indexAtual === 4  &&  acerto === 5 ){
//     setPontuacao(pontos*2);
//   }
// }

  return (
    <>

      <Navbar />
      <div className="text-black 
     items-center h-screen">

        <Container className={classes.container}>
       {  questions.length > 0 ? 
          indexAtual>=questions.length?(
          //desafiofases?(
          
          <Card>
          <CardContent className={classes.conteudo}>
            <Typography variant="h3" color="textSecondary" component="h5">
              Fase Concluida!
            </Typography>
            <Typography variant="h3" color="textSecondary" component="h5">
              Parabéns! Você concluiu a Fase do Retângulo.
           
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
              Clique no Botão para Iniciar o DesafioMageo!
            </Typography>

          </CardContent>
          <CardContent className={classes.conteudo}>
        
          <form onSubmit={cadastrarRanking} >
            <input type="text" hidden value={user_id} onChange={e=>setUserId(e.target.value)}/>
            <Button type='submit'className={classes.bnt}>Ir para Desafio</Button>
            
          </form>
          </CardContent>
        </Card>
        ): 
        (
        <Questao data={questions[indexAtual]} 
        indexAtual={indexAtual}
        question={questions}
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
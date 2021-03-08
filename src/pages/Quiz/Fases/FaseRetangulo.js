import React, { useEffect, useState } from 'react';
import { Box, Typography,Button, Card, CardContent, CardMedia, Container, Grid } from '@material-ui/core';
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

  },
  titulo:{
    fontSize:"2rem",
    marginTop:"2%"
  },
  root:{
    marginTop:"5%",
    marginBottom:"5%",
    paddingLeft:"5%",
    paddingRight:"5%",
    paddingTop:"5%"
  },
  bnt1:{
    background:"#588E4F", 
    color:"white",
    height:"70px",
    width:"110px",
  },
  contet:{
    marginLeft:"22rem"
  },
  conteudoEmblema:{
    paddingTop:"20px",
    textAlign:"center"
  },
});


export default function Quiz() {
  const classes = useStyles();

  const [questions, setQuestions] = useState([]);
  const [pontos, setPontuacao] = useState(0);
  const[acerto, setAcerto] = useState(0);
  const [indexAtual, setIndexAtual] = useState(0);
  const [mostrarResposta,setMostrarResposta]= useState(false);
  const [user_id,setUserId] = useState(localStorage.getItem('user_id'));
  const[nome_emblema,setNomeEmblema]= useState("Persistente");
  const[fase_emblema,setFaseEmblema]= useState("Retangulo");
  const[etapa_desafio,setEtapaDesafio]= useState("Retangulo");
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
      if(acerto === 4 || acerto === 9){
       
        if (answer === questions[indexAtual].resposta) {
          setAcerto(acerto + 1)
          setPontuacao(pontos*2) }
        }else{ 
          if (answer === questions[indexAtual].resposta) {
          setAcerto(acerto + 1)
          setPontuacao(pontos+10)
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

  async function adicionarEmblema(e){
    
    e.preventDefault()
    if( acerto >= 5 ){
      setNomeEmblema("Emblema 5 acertos, Desbravador")
      /* console.log("chegou,", nome_emblema) */
      

    const data = {nome_emblema,fase_emblema,etapa_desafio,user_id};
    
    try {
     
      await api.post('/Emblema',data); 
      alert("Parabéns Emblema Adicionado com Sucesso!")
      //setTimeout(()=>{window.location.reload()},300)

    } catch (error) {
      console.log(error.response);
      
    }
    } else {
      setNomeEmblema("Desbravador")
    const data = {nome_emblema,fase_emblema,etapa_desafio,user_id};
    
    try {
     
      await api.post('/Emblema',data); 
      alert("Parabéns Emblema Adicionado com Sucesso!")
      //setTimeout(()=>{window.location.reload()},300)

    } catch (error) {
      console.log(error.response);
      
    }
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

        <Grid   item xs={6} spacing={8} sm={5}className={classes.contet}>
        <Card className={classes.root}>
          <CardMedia
           className={classes.media}
            image={premio}
            title="Prêmio" 
          />
           <Typography variant="h3" color="textSecondary" component="h5"className={classes.titulo}>
              Clique no Botão para adicionar o emblema Retângulo!
            </Typography>
            <CardContent className={classes.conteudoEmblema}>
             <form onSubmit={adicionarEmblema} > 
                <input type="text" hidden value={user_id} onChange={e=>setUserId(e.target.value)}/>
                <input type="text" hidden value={nome_emblema} onChange={e=>setNomeEmblema(e.target.value)}/>
                <input type="text" hidden value={fase_emblema} onChange={e=>setFaseEmblema(e.target.value)}/>
                <input type="text" hidden value={etapa_desafio} onChange={e=>setEtapaDesafio(e.target.value)}/>
                <Button type='submit' className={classes.bnt1}>Emblema Persistente</Button>
              </form> 
            </CardContent>
          </Card>
          </Grid>
         
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
          <div>
          {indexAtual===4 && acerto ===5?  
          alert("Parabéns você acertou 5 questões seguidas"):
             <div></div>
          
          }
      <Questao data={questions[indexAtual]} 
      indexAtual={indexAtual}
      question={questions}
      irParaProximaQuestao={irParaProximaQuestao}
      mostrarResposta={mostrarResposta} handleAnswer={handleAnswer} />
      </div>
      

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
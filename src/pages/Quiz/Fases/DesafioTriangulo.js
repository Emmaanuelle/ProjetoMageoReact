import React, { useEffect, useState } from 'react';
import { Box, Typography,Button, Card, CardContent, CardMedia, Container, Grid } from '@material-ui/core';
import Navbar from '../../Navbar';
import api from '../../../services/api';
import premio from '../../../images/icons/medalha.svg'
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
    marginTop:'3%'
  },
  conteudo:{
    paddingTop:"70px",

    textAlign:"center"
  },
  bnt:{
    background:"#FFBB0E", 
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
    background:"#FAE20A", 
    color:"white",
    height:"80px",
    width:"120px",
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
  const history=useHistory();

  const [pontos, setPontuacao] = useState(0);
  const[acerto, setAcerto] = useState(0);
  const [indexAtual, setIndexAtual] = useState(0);
  const[desafio,setDesafio] =useState([])
  const [mostrarResposta,setMostrarResposta]= useState(false)
  const [user_id,setUserId] = useState(localStorage.getItem('user_id'));
  const[nome_emblema,setNomeEmblema]= useState("Medalha Desafio Triangulo");
  const[fase_emblema,setFaseEmblema]= useState("Triangulo");
  const[etapa_desafio,setEtapaDesafio]= useState("Triangulo");

  useEffect(() => {
    async function getQuestions() {
      try {
        const resposta = await api.get('/desafioTriangulo');
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
        setAcerto(acerto + 1)
        if(acerto === 5 || acerto === 9){
          setPontuacao(pontos*2);
        }else{
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
      history.push("/desafioCirculo");
      //setTimeout(()=>{window.location.reload()},300)
    } catch (error) {
      console.log(error);
    }
  }

  async function adicionarEmblema(e){
    e.preventDefault()
    const data = {nome_emblema,fase_emblema,etapa_desafio,user_id};
    try {
      await api.post('/Emblema',data); 
      alert("Parabéns Uma Medalha foi Adicionado com Sucesso!")
      //setTimeout(()=>{window.location.reload()},300)
    } catch (error) {
      console.log(error.response);
      
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
            Desafio Concluido!
            </Typography>
            <Typography variant="h3" color="textSecondary" component="h5">
              Parabéns! Você concluiu o Desafio da Fase Triângulo.
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
              Clique no Botão para adicionar a Medalha da Fase Triângulo!
            </Typography>
            <CardContent className={classes.conteudoEmblema}>
             <form onSubmit={adicionarEmblema} > 
                <input type="text" hidden value={user_id} onChange={e=>setUserId(e.target.value)}/>
                <input type="text" hidden value={nome_emblema} onChange={e=>setNomeEmblema(e.target.value)}/>
                <input type="text" hidden value={fase_emblema} onChange={e=>setFaseEmblema(e.target.value)}/>
                <input type="text" hidden value={etapa_desafio} onChange={e=>setEtapaDesafio(e.target.value)}/>
                <Button type='submit' className={classes.bnt1}>Adicionar Medalha </Button>
              </form> 
            </CardContent>
          </Card>
          </Grid>

           <Typography variant="h3" color="textSecondary" component="h5">
              Clique no Botão para Iniciar a Proxíma Fase!
            </Typography>
          </CardContent>
          <CardContent className={classes.conteudo}>
        
          <form onSubmit={cadastrarRanking} >
            <input type="text" hidden value={user_id} onChange={e=>setUserId(e.target.value)}/>
            <Button type='submit' className={classes.bnt}>Proxíma Fase</Button>
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
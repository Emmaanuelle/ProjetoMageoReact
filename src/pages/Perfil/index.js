import React, { useState, useEffect} from 'react';
import { Container, Card, Grid, CardActionArea, CardContent, Typography, CardActions, CardMedia} from '@material-ui/core';
import Navbar from '../Navbar';
import api from '../../services/api';
import EditarDialog from "./EditarDialog";
import premio from '../../images/icons/premio.svg';
import { makeStyles} from '@material-ui/core/styles';
import premio1 from '../../images/icons/primeiro.svg';
import premio2 from '../../images/icons/segundo.svg';
import premio3 from '../../images/icons/terceiro.svg';
import premio4 from '../../images/icons/quarto.svg';
import premio5 from '../../images/icons/medalha.svg';
import premio6 from '../../images/icons/medalha.svg';
import premio7 from '../../images/icons/medalha.svg';
import premio8 from '../../images/icons/medalha.svg';

const useStyles = makeStyles({
    media: {
      marginLeft: "auto",
      marginRight: "auto",
      height:50,
      width: 50,
    },
  imagem:{
      height:"45%",
      width:"40%",
      marginTop:"2%",
      marginBottom:"3%"
    },
    imagem1:{
        height:"35%",
        width:"20%",
        marginLeft:'8%',
        marginTop:"2%",
        marginBottom:"3%"
      },
      imagem2:{
        height:"45%",
        width:"40%",
        marginTop:"2%",
        marginBottom:"3%"
      },
    
   
  });
  

function Perfil() {
     const classes = useStyles();
    
    const [perfilUsuario, setPerfilUsuario] = useState([])
    useEffect(() => {
        const email = localStorage.getItem('email')
        const getPerfilUsuario = async () => {
            try {
                const response = await api.get('/perfil', { headers: { email: email } });
                setPerfilUsuario(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error.response);
               /*  if(error.response.data.error.name==="ExpiredJwtToken"){
                    alert("Sua sessão expirou! Faça o login novamente.")
                } *//* else{
                    alert("Erro em carregar os dados")
                } */
               
            }
        }
        getPerfilUsuario()
    }, []);
    localStorage.setItem('user_id', perfilUsuario.id)
   /*  if(perfilUsuario.length!==){
        const unique = [...new Set(perfilUsuario.emblema.map(valor=> valor.nome_emblema))]
        console.log(unique) 
    } */
    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#098348' }}>Olá, {perfilUsuario.nome}</h2>
                {perfilUsuario !== undefined || perfilUsuario.length !==0?<>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                      
                        <Card key={perfilUsuario.id}>
                            <CardActionArea>
                                <CardContent style={{color:"#6A6A6A"}}>
                                    <Typography style={{color:"#6A6A6A", textAlign:"center", fontWeight:600, fontSize:"200%"}} gutterBottom variant="h5" component="h2">
                                        Dados do usuario
                                </Typography>
                                   {/*  //{dados} */}
                                <Typography gutterBottom variant="h5" component="h2"> Nome: {perfilUsuario.nome} {perfilUsuario.sobrenome}
                                </Typography>
                                {/* <Typography gutterBottom variant="h5" component="h2">{perfilUsuario.email}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">{diaNascimento.toUTCString().substring(0, 17)}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">{perfilUsuario.ano_escolar}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">{perfilUsuario.escola}
                                </Typography> */}

                                </CardContent>

                            </CardActionArea>
                            <CardActions>
                                <EditarDialog user={perfilUsuario} />
                            </CardActions>

                        </Card>
                    </Grid>

                  {/*   <Grid item xs={12} sm={6}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Ranking:
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {perfilUsuario.ranking !==undefined?
                                        perfilUsuario.ranking.map(data => {
                                            return (<p key={data.id}>Pontos: {data.ranking}</p>)
                                        }):<></>}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid> */}
                    
                    <Grid item xs={12} sm={6}>
                    <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Conquistas:
                                        <br/>
                                        {perfilUsuario.emblema !==undefined?
                                        perfilUsuario.emblema.map((valor,index)=>{
                                            return(
                                                /* className="grid grid-cols-3 " */
                                                <div className="inline-flex " style={{ paddingTop:"7%"}} >
                                                   
                                                    {
                                                      valor.nome_emblema==="Desbravador"? <div className="flex-1">Emblema: Desbravador<img src={premio1} className={classes.imagem}/></div>:
                                                      <div></div>

                                                    }
                                                     {
                                                      valor.nome_emblema==="Persistente"?<div className="flex-1">Emblema: Persistente<img src={premio2} className={classes.imagem2}/></div>:
                                                      <div></div>

                                                    }
                                                    {
                                                      valor.nome_emblema==="Corajoso"?<div className="flex-1">Emblema: Corajoso<img src={premio3} className={classes.imagem}/></div>:
                                                      <div></div>

                                                    }
                                                    {
                                                      valor.nome_emblema==="Forte"?<div className="flex-1">Emblema: Forte<img src={premio4} className={classes.imagem}/></div>:
                                                      <div></div>

                                                    }
                                                    <div className="inline-flex-1">
                                                    {
                                                      valor.nome_emblema==="Medalha Deafio Quadrado"?<div className="flex-1">Medalha: Desafio Quadrado<img src={premio5} className={classes.imagem1}/></div>:
                                                      <div></div>

                                                    }
                                                     {
                                                      valor.nome_emblema==="Medalha Desafio Retangulo"?<div className="flex-1">Medalha: Desafio Retângulo<img src={premio6} className={classes.imagem1}/></div>:
                                                      <div></div>

                                                    }
                                                     {
                                                      valor.nome_emblema==="Medalha Desafio Triangulo"?<div className="flex-1">Medalha: Desafio Triângulo<img src={premio7} className={classes.imagem1}/></div>:
                                                      <div></div>

                                                    }
                                                     {
                                                      valor.nome_emblema==="Medalha Desafio Circulo"?<div className="flex-1">Medalha: Desafio Circulo<img src={premio8} className={classes.imagem1}/></div>:
                                                      <div></div>

                                                    }
                                                    </div>
                                                   

                                                   
                                                 

                                                    

                                                   {/*  {
                                                        valor.nome_emblema
                                                        
                                                    }
                                                    {
                                                        valor.fase_emblema
                                                    } */}
                                                </div>

                                            )

                                            
                                        }):<></>}
                                    </Typography>
                                    <CardMedia
                                            /* className={classes.media}
                                            image={premio}
                                            title="Prêmio"  */
                                            />
                                 </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card >
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" >
                                        Pontuação:       
                                        {perfilUsuario.ranking !==undefined?
                                        perfilUsuario.ranking.reduce((a, b) => a + (b['pontos'] || 0), 0):<></>}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>
                </>:<></>}
            </Container>
        </>

    )
}

export default Perfil;
import React, { useState, useEffect } from 'react';
import { Container, Card, Grid, CardActionArea, CardContent, Typography, CardActions } from '@material-ui/core';
import Navbar from '../Navbar';
import api from '../../services/api';
import EditarDialog from "./EditarDialog";

function Perfil() {
    const [perfilUsuario, setPerfilUsuario] = useState([])
    useEffect(() => {
        const email = localStorage.getItem('email')
        const getPerfilUsuario = async () => {
            try {
                const response = await api.get('/perfil', { headers: { email: email } });
                setPerfilUsuario(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error);
                alert("Erro em carregar os dados")
            }
        }
        getPerfilUsuario()
    }, []);
    localStorage.setItem('user_id', perfilUsuario.id)
    const diaNascimento = new Date(perfilUsuario.dataNascimento);  
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
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Dados do usuario
                                </Typography>
                                   {/*  //{dados} */}
                                <Typography gutterBottom variant="h5" component="h2">{perfilUsuario.nome} {perfilUsuario.sobrenome}
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

                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Ranking
                           </Typography>

                                    <Typography gutterBottom variant="h5" component="h2">
                                        {perfilUsuario.ranking !==undefined?
                                        perfilUsuario.ranking.map(data => {
                                            return (<p key={data.id}>Pontos: {data.pontos}</p>)
                                        }):<></>}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card >
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" >
                                        Pontuação
                           </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Conquistas
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
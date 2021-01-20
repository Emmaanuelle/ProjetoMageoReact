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
    const dados = perfilUsuario.map(data => {
        const diaNascimento = new Date(data.dataNascimento);
        localStorage.setItem('user_id', data.id)
        return (
            <>
                <Typography gutterBottom variant="h5" component="h2">{data.nome} {data.sobrenome}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">{data.email}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">{diaNascimento.toUTCString().substring(0, 17)}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">{data.ano_escolar}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">{data.escola}
                </Typography>
            </>
        )
    })
    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#098348' }}>Olá, {perfilUsuario.nome}</h2>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Dados do usuario
                                </Typography>
                                    {dados}

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
                                        {perfilUsuario.map(data => {
                                            return (<p>Pontos: {data.pontos}</p>)
                                        })}
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
            </Container>
        </>

    )
}

export default Perfil;
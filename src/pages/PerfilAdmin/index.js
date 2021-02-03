import React, { useState, useEffect } from 'react';
import { Container, Card, Grid, CardActionArea, CardContent, Typography, CardActions } from '@material-ui/core';
import Navbar from '../NavbarAdministrador';
import api from '../../services/api';
import EditarDialog from "./EditarPerfil";

function PerfilAdmin() {
    const [perfilUsuario, setPerfilUsuario] = useState([])
    useEffect(() => {
        const email = localStorage.getItem('email')
        const getPerfilUsuario = async () => {
            try {
                const response = await api.get('/perfilAdmin', { headers: { email: email } });
                setPerfilUsuario(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error);
                alert("Erro em carregar os dados")
            }
        }
        getPerfilUsuario()
    }, []);
    localStorage.setItem('administradors_id', perfilUsuario.id)
    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#098348' }}>Olá, {perfilUsuario.nome_administrador}</h2>
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
                                <Typography gutterBottom variant="h5" component="h2">{perfilUsuario.nome_administrador} {perfilUsuario.sobrenome_administrador}
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
                                <EditarDialog admin={perfilUsuario} />
                            </CardActions>

                        </Card>
                    </Grid>
                </Grid>
                </>:<></>}
            </Container>
        </>

    )
}

export default PerfilAdmin;
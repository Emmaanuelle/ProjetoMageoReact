import React  from 'react';
import { Container } from '@material-ui/core'
import Navbar from '../Navbar';
import { Card, CardActionArea,CardContent,CardActions} from '@material-ui/core';



function Ajuda() {

    return (
        <>
            <Navbar />
            <Container>
            <Card style={{ marginTop: "4%", marginBottom: "2%" }}>
                    <CardActionArea>
                        <CardContent>
                            <h1 style={{ marginBottom: 20, color: '#6A6A6A', fontSize: "190%", textAlign: "center", fontWeight: 600 }}> Central de Ajuda MaGeo Quiz</h1>


                            <br />
                            <hr />
                            <div>
                                <h3 style={{ marginTop: "4%", fontFamily: "'Poppins', sans-serif;", fontSize: "150%", color: '#D6D6D6', fontWeight: "bold" }}>
                                    Como Usar o MaGeo Quiz
                            </h3>
                                <p style={{ marginTop: "2%", fontFamily: "'Poppins', sans-serif;", fontSize: "110%", color: '#5C5C5C' }}>
                                Para iniciar no jogo basta seguir as instruções na pagina principal.
                              
                            </p>


                            </div>
                            <div style={{ marginTop: "8%", fontFamily: "'Poppins', sans-serif;", fontSize: "100%", color: '#9F9F9F', textAlign: "center" }}>
                                <h3 style={{color: '#1CB0F6'}}>
                                    Alguma Dúvida?
                                </h3>
                                <br />
                                <p> mageoquiz@gmail.com</p>
                            </div>


                        </CardContent>

                    </CardActionArea>
                    <CardActions>

                    </CardActions>

                </Card>
            </Container>
        </>
    )
}

export default Ajuda;
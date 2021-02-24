import React  from 'react';
import { Container} from '@material-ui/core'
import Navbar from '../Navbar';
import { Card, CardActionArea, CardContent, CardActions } from '@material-ui/core';


function Sobre() {

    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#098348' }}>Sobre</h2>
                <p> Este sistema é parte do trabalho de conclusão de curso Quiz Gamificado: uma nova forma de aprender Geometria Plano
                    do curso Tecnólogo em Sistemas para Internet do Instituto Federal de Brasília.</p>
                    <Card style={{ marginTop: "4%", marginBottom: "2%" }}>
                    <CardActionArea>
                        <CardContent>
                            <h1 style={{ marginBottom: 20, color: '#4F4F4F', fontFamily: "'Poppins', sans-serif;", fontSize: "200%", textAlign: "center", fontWeight: "bold" }}> Central de Ajuda MaGeo Quiz</h1>


                            <br />
                            <hr />
                            <div>
                                <h3 style={{ marginTop: "4%", fontFamily: "'Poppins', sans-serif;", fontSize: "150%", color: '#D6D6D6', fontWeight: "bold" }}>
                                    Como Usar o MaGeo Quiz
                            </h3>
                                <p style={{ marginTop: "2%", fontFamily: "'Poppins', sans-serif;", fontSize: "110%", color: '#5C5C5C' }}>
                                    Criar as questões do quiz, se direcione para o menu principal e clique na tela criar questão.
                                <br />
                                Saber as questões que foram adicionadas ou deletar, clique na opção do menu listar questão.
                                <br />
                                Acompanha o desempenho do estudante, clique na tela desempenho.

                            </p>


                            </div>
                            <div style={{ marginTop: "8%", fontFamily: "'Poppins', sans-serif;", fontSize: "100%", color: '#9F9F9F', textAlign: "center" }}>
                                <h3>
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

export default Sobre;
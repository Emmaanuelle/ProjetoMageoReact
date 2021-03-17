import React from 'react';
import { Container } from '@material-ui/core'
import Navbar from '../Navbar';
import { Card, CardActionArea, CardContent, CardActions } from '@material-ui/core';


function Sobre() {

    return (
        <>
            <Navbar />
            <Container>
                <Card style={{ marginTop: "4%", marginBottom: "2%" }}>
                    <CardActionArea>
                        <CardContent>
                            <h1 style={{ marginBottom: 20, color: '#6A6A6A', fontSize: "190%", textAlign: "center", fontWeight: 600 }}> Sobre o MaGeo Quiz</h1>


                            <br />
                            <hr />
                            <div>
                                <h3 style={{ marginTop: "4%", fontFamily: "'Poppins', sans-serif;", fontSize: "150%", color: '#D6D6D6', fontWeight: "bold" }}>

                                </h3>
                                <p style={{ marginTop: "2%", fontFamily: "'Poppins', sans-serif;", fontSize: "110%", color: '#5C5C5C' }}>
                                    <p>
                                        Este sistema é parte do Trabalho de Conclusão do Curso Sistemas para Internet do Instituto Federal de Brasília, tem como objetivo desenvolver  uma plataforma educacional gamificada aplicada ao ensino de geometria plana
                                        para apoiar a aprendizagem dos estudantes do ensino médio integrado. Esta plataforma foi desenvolvida com a orientação da Prof. Ma. Cristiane Jorge de Lima Bomfim e com o apoio das professoras especialistas no ensino de matemática no ensino  médio integrado Prof.Marina Gabriella Ribeiro Bardella Benicio e Prof. Dra. Luciana Lima Ventura. Foi desenvolvido no inicio de Dezembro de 2020 e finalizado em Março de 2021.
                                       



                                     </p>
                                </p>


                            </div>
                            <div style={{ marginTop: "8%", fontFamily: "'Poppins', sans-serif;", fontSize: "100%", color: '#9F9F9F', textAlign: "center" }}>
                                <h3 style={{ color: '#1CB0F6' }}>
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
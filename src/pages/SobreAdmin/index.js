import React  from 'react';
import { Container} from '@material-ui/core'
import Navbar from '../NavbarAdministrador';


function Sobre() {

    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#098348' }}>Sobre</h2>
                <p> Este sistema é parte do trabalho de conclusão de curso Quiz Gamificado: uma nova forma de aprender Geometria Plano
                    do curso Tecnólogo em Sistemas para Internet do Instituto Federal de Brasília.</p>
               
            </Container>
            
        </>
    )
}

export default Sobre;
import React  from 'react';
import { Container } from '@material-ui/core'
import Navbar from '../Navbar';


function Sobre() {

    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#098348' }}>Sobre</h2>
            </Container>
        </>
    )
}

export default Sobre;
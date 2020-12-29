import React  from 'react';
import { Container } from '@material-ui/core'
import Navbar from '../Navbar';


function Categorias() {

    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#948324' }}>Categorias</h2>
            </Container>
        </>
    )
}

export default Categorias;
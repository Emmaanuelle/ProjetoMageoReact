import React  from 'react';
import { Container } from '@material-ui/core'
import Navbar from '../Navbar';


function Ajuda() {

    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#098348' }}>Ajuda</h2>
            </Container>
        </>
    )
}

export default Ajuda;
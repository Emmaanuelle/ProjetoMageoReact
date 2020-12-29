import React  from 'react';
import { Container } from '@material-ui/core'
import Navbar from '../Navbar';


function ExploreMais() {

    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#948324' }}>ExploreMais</h2>
            </Container>
        </>
    )
}

export default ExploreMais;
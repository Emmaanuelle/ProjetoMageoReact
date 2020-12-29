import { Container } from '@material-ui/core';
import React  from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
    
    return (
        <>
            <Container>
        
                <h2 style={{ margin: 20, color: '#098348' }}>Página não Encontrada</h2>
                <Link to='/'>Voltar para o Login</Link>
            </Container>
        </>
    )
}

export default ErrorPage;
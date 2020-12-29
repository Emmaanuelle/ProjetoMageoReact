import { Container } from '@material-ui/core';
import React  from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.css'
import imageErro from '../../images/error.jpg'
function ErrorPage() {
    
    return (
            <Container className='teste'>
                <Link to='/'>Voltar para o Login</Link>
                <h2 style={{ color: '#098348' }}>Página não Encontrada</h2>
            <img src={imageErro} style={{position:'relative'}} alt='erro' width='100%' height='100%' />
                <p style={{ color: '#098348' }}>Por favor, Contate a Administradora</p>
            </Container>
    )
}

export default ErrorPage;
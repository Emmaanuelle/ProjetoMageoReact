import React  from 'react';
import { Container } from '@material-ui/core'
import Navbar from '../NavbarAdministrador';
import { Card, CardActionArea,CardContent,CardActions} from '@material-ui/core';



function Ajuda() {

    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#098348' }}>Ajuda</h2>
                       <Card>
                   <CardActionArea>
                       <CardContent>
                       <p> olá mundo</p>
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
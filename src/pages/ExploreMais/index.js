import React from 'react';
import { Container, Card, Grid, CardMedia, CardActionArea, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import Navbar from '../Navbar';
import logo from '../../images/imagen1.jpg'



function ExploreMais() {
    var cardStyle = {
        display: 'block',
        width: '30vw',
        transitionDuration: '0.3s',
        height: '35vw',
        marginLeft: '50px'
    }

    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#948324' }}>ExploreMais</h2>
            </Container>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Card style={cardStyle}>
                        <CardActionArea>
                            <CardMedia>
                                <img src={logo} width="300px" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Video
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Card style={cardStyle}>
                        <CardActionArea>
                            <CardMedia>
                                <img src={logo} width="300px" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Video
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                image="/src/images/icons/espadas.svg"
                                title="Contemplative Reptile"

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Video
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                image="/src/images/icons/espadas.svg"
                                title="Contemplative Reptile"

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Video
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>

            </Grid>



        </>
    )
}

export default ExploreMais;
import { useState } from "react";
import { Grid, Card, CardContent, CardActions, CardMedia, Button, TextField, Typography } from '@mui/material';



export default function FavoritesList() {
    const faves = JSON.parse(localStorage.getItem('myCats'));
    const [favorites, setFavorites] = useState(faves);

    return (
        favorites ? (favorites.map(cat => {
            return (
                <Grid container >
                    <Grid item xs={12} sm={6} md={4} />
                    <Card elevation={15}>
                        <CardMedia>
                            <img src={cat.image_link} width="575" height="475" />
                        </CardMedia>
                        <CardContent>
                            <Typography>
                                Breed: {cat.name}
                            </Typography>
                            <Typography>
                                Origin : {cat.origin}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> )
        })):(favorites.map(cat => {
            return ( <Typography>
                {cat.name}
                </Typography>)
        }))
    )

        
}
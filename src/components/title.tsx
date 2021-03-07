import React from 'react';
import logo from '../static/logo.jpg';
import './title.scss';
import '@fontsource/poiret-one';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";

export const Title: React.FC = () => {
    const style = {
        card: {
            minWidth: '300px'
        },
        media: {
            height: 140
        }
    };

    return (<div>
        <Grid container>
            <Grid item xs={2}>
                <Card style={style.card} variant="outlined">
                    <CardMedia
                        style={style.media}
                        image={logo}
                        title="Molly's Country Crafts"
                    />
                    <CardContent>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Molly's Country Crafts
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>
                            <a href="https://www.etsy.com/uk/shop/MollysCountryCrafts">Checkout our Etsy shop!</a>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </div>);
}

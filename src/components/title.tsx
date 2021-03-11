import React from 'react';
import logo from '../static/logo.svg';
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
                    <CardActions>
                        <Button>
                            <a href="https://www.etsy.com/uk/shop/MollysCountryCrafts">Check out our Etsy shop!</a>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </div>);
}

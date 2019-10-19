import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import diffusionHackathonImage from '../img/Diffusion-2019-hackathon-t1.png'

import NavBar from '../components/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        alignItems: "center",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const theme = createMuiTheme({
    typography: {
        fontFamily: 'Lato, Helvetica, sans-serif',
        fontWeight: 700
    }
});

const home = () => {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={theme}>
            {/* <img src={diffusionHackathonImage} className='diffusionImage'/> */}

            <div className="landingContainer">
                <NavBar />
                <div className={classes.root}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={6} >
                            <Paper className={classes.paper}>

                                <strong> --- Transparent & verifiable carbon credits --- </strong>
                                <br />
                                A decentralized marketplace generating carbon credits & supporting carbon offset farms.  <br /> <br />
                                Spekboom plantations in the Karoo of South Africa provide <br /> one of the most cost effective carbon offset solutions. <br />
                                These plantations are represented indivdually as always for sale NFTs. <br />
                                Holding an NFT continously generates verifiable carbon credits (ERC20 tokens). <br /> <br />

                                Corporations can burn carbon credits to transparently showcase they are carbon neutral.

                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </MuiThemeProvider>
    )
}

export default home

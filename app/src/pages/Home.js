import React, { Fragment } from 'react'
import diffusionHackathonImage from '../img/Diffusion-2019-hackathon-t1.png'

import NavBar from '../components/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import WifiTetheringIcon from '@material-ui/icons/WifiTethering';

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

const home = () => {
    const classes = useStyles();
    return (
        <Fragment>

            <div className="landingContainer">
                {/* <img src={diffusionHackathonImage} className='diffusionImage'/> */}
                <div className={classes.root}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={6} alignItems="center">
                            <div>

                                <h1>Transparent & verifiable carbon credits</h1>
                                <p>
                                    <br />
                                    A decentralized marketplace generating carbon credits & supporting carbon offset farms.  <br /> <br />
                                    Spekboom plantations in the Karoo of South Africa provide <br /> one of the most cost effective carbon offset solutions. <br />
                                    These plantations are represented indivdually as always for sale NFTs. <br />
                                    Holding an NFT continously generates verifiable carbon credits (ERC20 tokens). <br /> <br />

                                    Corporations can burn carbon credits to transparently showcase they are carbon neutral.
                            </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Grid container spacing={3} >
                <Grid item xs={12} md={4} style={{textAlign: 'center', padding: '2rem'}}>
                    <Paper>
                        <WifiTetheringIcon
                         style={{ fontSize: 80, padding:'1rem' }}
                        />
                        <Typography variant='h5'>Transparent</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default home

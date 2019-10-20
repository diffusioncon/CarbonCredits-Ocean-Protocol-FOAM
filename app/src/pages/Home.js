import React, { Fragment } from 'react'
import diffusionHackathonImage from '../img/Diffusion-2019_logo.png'

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
                <NavBar/>
                {/* <img src={diffusionHackathonImage} className='diffusionImage'/> */}
                <div className={classes.root}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={6} alignItems="center">
                            <div className='opening-blurb'>
                                <Typography variant='h2'>Transparent & Verifiable Carbon Credits </Typography>
                                <hr />
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
            <div className='benefits'>
                <Grid container spacing={3} >
                    <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                        <Paper>
                            <WifiTetheringIcon
                                style={{ fontSize: 80, padding: '1rem' }}
                            />
                            <Typography variant='h5'>Transparent</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                        <Paper>
                            <WifiTetheringIcon
                                style={{ fontSize: 80, padding: '1rem' }}
                            />
                            <Typography variant='h5'>Transparent</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                        <Paper>
                            <WifiTetheringIcon
                                style={{ fontSize: 80, padding: '1rem' }}
                            />
                            <Typography variant='h5'>Transparent</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ padding: '2rem' }}>
                        <img src={diffusionHackathonImage} style={{ width: '80%', padding: ' 1rem 3rem', margin: 'auto' }} />
                    </Grid>
                    <Grid item xs={12} md={6} style={{ textAlign: 'right', padding: '2rem' }}>
                        <Typography variant='h3'>This project was ideated and developed at the Diffusion 2019 Hackathon in Berlin</Typography>
                    </Grid>

                </Grid>
            </div>
        </Fragment>
    )
}

export default home

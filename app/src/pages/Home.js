import React, { Fragment } from 'react'
import diffusionHackathonImage from '../img/Diffusion-2019_logo.png'

import NavBar from '../components/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AddLocationIcon from '@material-ui/icons/AddLocation';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import WorkIcon from '@material-ui/icons/Work';
import LandscapeIcon from '@material-ui/icons/Landscape';
import StoreIcon from '@material-ui/icons/Store';

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
                <NavBar />
                <div className={classes.root}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={6} alignItems="center">
                            <div className='opening-blurb'>
                                <Typography variant='h2'>Transparent & Verifiable Carbon Credits </Typography>
                                <hr />
                                <Typography variant='h5'>
                                    A decentralised platform connecting unusable farm lands to companies and individuals that want to offset their carbon footprint
                                </Typography>
                                {/* <p>
                                    
                                    A decentralized marketplace generating carbon credits & supporting carbon offset farms.  <br /> <br />
                                    Spekboom plantations in the Karoo of South Africa provide <br /> one of the most cost effective carbon offset solutions. <br />
                                    These plantations are represented indivdually as always for sale NFTs. <br />
                                    Holding an NFT continously generates verifiable carbon credits (ERC20 tokens). <br /> <br />

                                    Corporations can burn carbon credits to transparently showcase they are carbon neutral.
                            </p> */}
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className='blurb'>
                <Grid container spacing={3} >
                    <Grid item xs={12} md={12} style={{ textAlign: 'center', padding: '5rem' }}>
                        <Typography variant='h3' style={{ color: "white" }}>Spekboom thicket is ten times more effective than the Amazon rainforest at offsetting carbon emissions</Typography>
                    </Grid>
                </Grid>
            </div>
            <div className='howitworks'>
                <Grid container spacing={3} >
                    <Grid item xs={12} md={12} style={{ textAlign: 'center', padding: '2rem' }}>
                        <Typography variant='h2'>How it Works</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                        <Paper style={{ padding: '1rem' }}>
                            <AddLocationIcon
                                style={{ fontSize: 100, padding: '1rem', color: '#3F3D4B' }}
                            />
                            <Typography variant='h3' style={{ color: "#58C685", textAlign: 'left', transform: 'translate(0, -40px)' }}>1.</Typography>
                            <Typography variant='h6'>A farmer uploads a Spekboom plantation</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                        <Paper style={{ padding: '1rem' }}>
                            <AddLocationIcon
                                style={{ fontSize: 100, padding: '1rem', color: '#3F3D4B' }}
                            />
                            <Typography variant='h3' style={{ color: "#58C685", textAlign: 'left', transform: 'translate(0, -40px)' }}>2.</Typography>
                            <Typography variant='h6'>A company purchases an NFT representing that piece of land</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                        <Paper style={{ padding: '1rem' }}>
                            <AddLocationIcon
                                style={{ fontSize: 100, padding: '1rem', color: '#3F3D4B' }}
                            />
                            <Typography variant='h3' style={{ color: "#58C685", textAlign: 'left', transform: 'translate(0, -40px)' }}>3.</Typography>
                            <Typography variant='h6'>The NFT generates carbon credits while you hold the land</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                        <Paper>
                            <WifiTetheringIcon
                                style={{ fontSize: 80, padding: '1rem' }}
                            />
                            <Typography variant='h5'>Transparent</Typography>
                            <Typography variant='p'>sa;dcbasldcb sdccbasjdcbalsdbvasldcbasjdcba slkjjbsdcca dblabdc a</Typography>
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
                </Grid>
            </div>
            <div className='diffusion-hackathon'>
                <Grid container spacing={3} >
                    <Grid item xs={12} md={6} style={{ padding: '2rem' }}>
                        <img src={diffusionHackathonImage} style={{ width: '80%', padding: ' 1rem 3rem', margin: 'auto' }} />
                    </Grid>
                    <Grid item xs={12} md={6} style={{ textAlign: 'right', padding: '2rem' }}>
                        <Typography variant='h3' style={{ color: 'white' }}>This project was developed at the Diffusion 2019 Hackathon in Berlin</Typography>
                    </Grid>
                </Grid>
            </div>
            <div className='benefits'>
                <Grid container spacing={3} >
                    <Grid item xs={12} md={12} style={{ textAlign: 'center', paddingTop: '4rem' }}>
                        <Typography variant='h2'>Benefits</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                        <LandscapeIcon style={{ fontSize: 100, padding: '1rem', color: '#3F3D4B' }} />
                        <Typography variant='h5'>Utilises Arid Land</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                        <WorkIcon style={{ fontSize: 100, padding: '1rem', color: '#3F3D4B' }} />
                        <Typography variant='h5'>Create's Employment</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                        <StoreIcon style={{ fontSize: 100, padding: '1rem', color: '#3F3D4B' }} />
                        <Typography variant='h5'>Open Market</Typography>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default home

import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import diffusionHackathonImage from '../img/Diffusion-2019-hackathon-t1.png'
import NavBar from '../components/NavBar'

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Lato, Helvetica, sans-serif',
        fontWeight: 700  
    }
});

const home = () => {
    return (
        <MuiThemeProvider theme={theme}>
            {/* <img src={diffusionHackathonImage} className='diffusionImage'/> */}
            <div className="landingContainer">
                <NavBar />
            </div>
        </MuiThemeProvider>
    )
}

export default home

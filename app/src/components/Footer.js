import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Logo from '../img/logov1.png'
import Button from '@material-ui/core/Button'

const Footer = () => {
    return (
        <footer className='footer'>
            <Grid container spacing={3} >
                <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                    <img src={Logo} style={{ maxHeight: '100%', height: '90px' }} />
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                    <Link to='/terms-and-conditions'>Terms and Conditions</Link>
                    <br/>
                    <br/>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                    <a href='https://blog.carboncredits.club'>Blog</a>
                    <br/>                    
                    <br/>                    
                    <Link to='/ocean-dashboard'>Ocean Dashboard</Link>
                    <br/>                    
                    <br/>                    
                    <Link to='/buy-land'><Button color="inherit" color="secondary" variant="contained">Buy Land</Button></Link>
                </Grid>
                <Grid item xs={12} md={12} style={{ textAlign: 'center', padding: '0.5rem' , paddingTop: '0.1rem'}}>
                    <p>© 2019, Built with ❤ by <a href='https://wildcards.world'>Team Wildcards</a></p>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer

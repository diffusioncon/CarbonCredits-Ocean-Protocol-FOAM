import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './pages/Home'
import OceanProtocol from './ocean-protocol/OceanProtocol'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main:'#3F3D4B'
        },        
        secondary: {
            main:'#fff'
        },        
      },
    typography: {
        fontFamily: 'Lato, Helvetica, sans-serif',
        fontWeight: 700
    }
});

console.log(window.location.pathname)

const Routes = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <div>                    
                    <Switch>
                        <Route path="/for-farmers">
                            <p>For farmers</p>
                        </Route>
                        <Route path="/for-carbon-traders">
                            <p>For Carbon Traders</p>
                        </Route>
                        <Route path="/ocean-dashboard">
                            <OceanProtocol />
                        </Route>
                        <Route path="/buy-land">
                            <p>Buy land zone</p>
                        </Route>
                        <Route path="/terms-and-conditions">
                            <p style={{height: '100vh'}}>:)</p>
                        </Route>
                        <Route path="/privacy-policy">
                            <p style={{height: '100vh'}}>:)</p>
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </MuiThemeProvider>
    )
}

export default Routes

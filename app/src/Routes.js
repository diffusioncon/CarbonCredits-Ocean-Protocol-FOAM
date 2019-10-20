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
import App from './App'
import ForCarbonTraders from './pages/ForCarbonTraders';
import ForFarmers from './pages/ForFarmers';

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
                            <ForFarmers/>
                        </Route>
                        <Route path="/for-carbon-traders">
                            <ForCarbonTraders/>
                        </Route>
                        <Route path="/ocean-dashboard">
                            <OceanProtocol />
                        </Route>
                        <Route path="/buy-land">
                            <App/>
                        </Route>
                        <Route path="/terms-and-conditions">
                            <NavBar/>
                            <p style={{height: '70vh'}}>Terms and conditions page :)</p>
                        </Route>
                        <Route path="/privacy-policy">
                            <NavBar/>
                            <p style={{height: '70vh'}}>Privacy Policy Page :)</p>
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

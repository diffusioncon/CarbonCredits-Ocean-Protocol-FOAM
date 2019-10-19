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
import App from './App'

const Routes = () => {
  return (
    <Router>
      <NavBar />
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
            <App />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Routes

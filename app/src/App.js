import React, { Component, Suspense } from "react";
import Template from "./Template"
import Offline from "./wrapper/Offline"
import DrizzleProvider from './providers/DrizzleProvider'
import UsdPriceProvider from "./providers/UsdPriceProvider"
// const DrizzleProvider = React.lazy(() => import('./DrizzleProvider'));
import './app.css'
import mapBackground from "./img/map-background.png"
import NavBar from './components/NavBar'

const backgroundImgStyle = {
  backgroundImage: `url(${mapBackground})`,
  height: '100%',
  height: '100vh',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom right",
}
class App extends Component {
  render() {
    return (
      // <Suspense fallback={<Template drizzleLoaded={false} />}> // TODO: use React.lazy to load drizzle lazily
      <React.Fragment>
        <NavBar />
        <div style={backgroundImgStyle}>
          <DrizzleProvider>
            <UsdPriceProvider>
              <Offline>
                <Template drizzleLoaded={true} />
              </Offline>
            </UsdPriceProvider>
          </DrizzleProvider>
        </div>
      </React.Fragment>
      // </Suspense>
    );
  }
}

export default App;

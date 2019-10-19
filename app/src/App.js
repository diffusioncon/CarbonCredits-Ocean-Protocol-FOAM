import React, { Component, Suspense } from "react";
import Template from "./Template"
import Offline from "./wrapper/Offline"
import DrizzleProvider from './providers/DrizzleProvider'
import UsdPriceProvider from "./providers/UsdPriceProvider"
// const DrizzleProvider = React.lazy(() => import('./DrizzleProvider'));
import './app.css'

class App extends Component {
  render() {
    return (
      // <Suspense fallback={<Template drizzleLoaded={false} />}> // TODO: use React.lazy to load drizzle lazily
      <DrizzleProvider>
        <UsdPriceProvider>
          <Offline>
            <Template drizzleLoaded={true} />
          </Offline>
        </UsdPriceProvider>
      </DrizzleProvider>
      // </Suspense>
    );
  }
}

export default App;

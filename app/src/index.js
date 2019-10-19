import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import OceanProtocol from './ocean-protocol/OceanProtocol'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<OceanProtocol />, document.getElementById('root'))

serviceWorker.unregister()

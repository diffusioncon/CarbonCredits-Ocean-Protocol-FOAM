import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Routes from './Routes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Routes />, document.getElementById('root'))

serviceWorker.unregister()

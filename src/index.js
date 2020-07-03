import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

import 'vtex-tachyons'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()

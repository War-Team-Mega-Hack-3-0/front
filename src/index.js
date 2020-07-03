import React from 'react'
import ReactDOM from 'react-dom'
import 'vtex-tachyons'

import { App } from './App'
import { initializeFirebase } from './services/firebase'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

initializeFirebase()
serviceWorker.register()

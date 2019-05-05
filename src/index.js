import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'mobx-react'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(<Provider>
  <HashRouter>
    <App />
  </HashRouter>
</Provider>, document.getElementById('root'))
registerServiceWorker()

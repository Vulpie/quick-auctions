import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import Auth0ProviderWithHistory from './auth0'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Auth0ProviderWithHistory>
				<App />
			</Auth0ProviderWithHistory>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorker.unregister()

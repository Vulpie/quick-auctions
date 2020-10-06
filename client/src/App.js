import React from 'react'
import './style/App.scss'
import Header from './components/Static/Header'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Views/Home'
import Profile from './components/Views/Profile'
import UserAuctions from './components/Views/UserAuctions'
import ProtectedRoute from './auth/ProtectedRoute'

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<ProtectedRoute path="/profile" component={Profile} />
				<ProtectedRoute
					path="/user/auctions"
					component={UserAuctions}
				/>
			</Switch>
		</div>
	)
}

export default App

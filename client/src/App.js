import React from 'react'
import './style/App.scss'
import Header from './components/Static/Header'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Views/Home'
import Profile from './components/Views/Profile'
import Savings from './components/Views/Savings'

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/savings" exact component={Savings} />
            </Switch>
        </div>
    )
}

export default App

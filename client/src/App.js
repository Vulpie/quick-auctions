import React from 'react'
import './App.css'
import Navbar from './components/Global/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Views/Home'
import Profile from './components/Views/Profile'
import Savings from './components/Views/Savings'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/savings" exact component={Savings} />
            </Switch>
        </div>
    )
}

export default App

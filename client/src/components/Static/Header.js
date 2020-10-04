import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const Header = () => {
    const { isAuthenticated, isLoading, user } = useAuth0()
    useEffect(() => {
        console.log(isAuthenticated)
    }, [isAuthenticated])

    if (isLoading) {
        return <div>Loading ...</div>
    }

    return (
        <div className="header">
            <div className="header__navbar">
                <Link className="header__navbar_button" to="/">
                    Home
                </Link>
                <Link className="header__navbar_button" to="/profile">
                    Profile
                </Link>
                <Link className="header__navbar_button" to="/savings">
                    Savings
                </Link>
            </div>

            <div className="header__userbar">
                <p className="header__userbar_name">Hi {user.name}</p>
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </div>
        </div>
    )
}

export default Header

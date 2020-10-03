import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LoginButton from '../LoginButton'
import LogoutButton from '../LogoutButton'

const Navbar = () => {
    const { isAuthenticated, isLoading } = useAuth0()
    useEffect(() => {
        console.log(isAuthenticated)
    }, [isAuthenticated])

    if (isLoading) {
        return <div>Loading ...</div>
    }

    return (
        <div className="navbar">
            <Link className="navbar_item" to="/">
                Home
            </Link>
            <Link className="navbar_item" to="/profile">
                Profile
            </Link>
            <Link className="navbar_item" to="/savings">
                Savings
            </Link>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
    )
}

export default Navbar

import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
    const { logout } = useAuth0()
    return (
        <div onClick={() => logout()} className="header__userbar_button">
            Log out
        </div>
    )
}

export default LogoutButton

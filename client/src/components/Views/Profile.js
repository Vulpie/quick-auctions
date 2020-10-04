import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0()
    console.log(user)
    return (
        <div>
            {isAuthenticated && (
                <div className="profile">
                    <img
                        src={user.picture}
                        alt={user.nickname}
                        className="profile__picture"
                    />
                    <h2 className="profile__name">{user.name}</h2>
                    <div className="profile__details">
                        <p className="profile__details_item">
                            Name: {user.name}
                        </p>
                        <p className="profile__details_item">
                            Email: {user.email}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profile

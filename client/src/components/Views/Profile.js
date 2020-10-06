import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0()
	console.log(user)
	return (
		<>
			{isAuthenticated && (
				<div className="profile">
					<div className="profile__header">
						<div className="profile__header_picture">
							<img
								src={user.picture}
								alt={user.nickname}
								className="profile__header_picture_img"
							/>
						</div>

						<h2 className="profile__header_name">{user.name}</h2>
					</div>

					<div className="profile__details">
						<div className="profile__details_item">
							<p className="profile__details_item_title">Name:</p>
							<p className="profile__details_item_value">
								{user.name}
							</p>
						</div>
						<div className="profile__details_item">
							<p className="profile__details_item_title">
								Email:
							</p>
							<p className="profile__details_item_value">
								{user.email}
							</p>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Profile

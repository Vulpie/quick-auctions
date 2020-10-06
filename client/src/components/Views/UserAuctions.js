import React from 'react'
import MyAuctions from './auctions/MyAuctions'
import MyItems from './auctions/MyItems'
const UserAuctions = () => {
	return (
		<div className="auctions">
			<MyItems />
			<MyAuctions />
		</div>
	)
}

export default UserAuctions

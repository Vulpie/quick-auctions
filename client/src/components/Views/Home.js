import React from 'react'
import LatestAuctions from './home/LatestAuctions'

const Home = () => {
	return (
		<div className="home">
			<h2 className="home__title">Latest auctions:</h2>
			<LatestAuctions />
		</div>
	)
}

export default Home

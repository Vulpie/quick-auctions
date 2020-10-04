import React, { useState, useEffect } from 'react'
import AuctionItem from './AuctionItem'

const TEST_AUCTIONS = [
	{
		name: 'To Sleep in a Sea of Stars by Christopher Paolini',
		price: '39.99 PLN',
		time_left: '17h',
	},
	{
		name: 'To Sleep in a Sea of Stars',
		price: '39.99 PLN',
		time_left: '17h',
	},
	{
		name: 'To Sleep in a Sea of Stars',
		price: '39.99 PLN',
		time_left: '17h',
	},
	{
		name: 'To Sleep in a Sea of Stars',
		price: '39.99 PLN',
		time_left: '17h',
	},
]

const LatestAuctions = () => {
	const [auctions, setAuctions] = useState([...TEST_AUCTIONS])
	return (
		<div className="home__list">
			{auctions.map((item) => (
				<AuctionItem
					name={item.name}
					price={item.price}
					time_left={item.time_left}
				/>
			))}
		</div>
	)
}

export default LatestAuctions

import React, { useState, useEffect } from 'react'
import AuctionItem from '../../Static/AuctionItem'

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
	useEffect(() => {
		fetch('/api/auctions/latest')
			.then((data) => data.json())
			.then((res) => console.log(res))
	}, [])
	return (
		<div className="home__list">
			{auctions.map((item, index) => (
				<AuctionItem
					key={`${index}_lates_auction_item`}
					name={item.name}
					price={item.price}
					time_left={item.time_left}
					base_class="home__"
				/>
			))}
		</div>
	)
}

export default LatestAuctions

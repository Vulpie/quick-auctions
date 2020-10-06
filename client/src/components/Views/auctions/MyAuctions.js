import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import AuctionItem from '../../Static/AuctionItem'
const MyAuctions = () => {
	const [auctions, setAuctions] = useState()
	const { getAccessTokenSilently } = useAuth0()

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

	const getMyAuctions = async () => {
		try {
			const token = await getAccessTokenSilently()

			const my_auctions = await fetch('/user/auctions/my', {
				method: 'get',
				headers: { Authorization: `Bearer ${token}` },
			})
			const my_auctions_json = await my_auctions.json()
			setAuctions(my_auctions_json)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getMyAuctions()
	}, [])
	return (
		<div className="auctions__my-auctions">
			<h3>My auctions</h3>
			{auctions ? (
				TEST_AUCTIONS.map((item, index) => (
					<AuctionItem
						key={`${index}_my_auction_item`}
						name={item.name}
						price={item.price}
						time_left={item.time_left}
						base_class="auctions__my-auctions_"
					/>
				))
			) : (
				<p>No auctions</p>
			)}
		</div>
	)
}

export default MyAuctions
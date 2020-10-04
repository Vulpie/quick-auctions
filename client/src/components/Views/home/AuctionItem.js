import React from 'react'

const AuctionItem = ({ name, price, time_left }) => {
	return (
		<div className="home__list_item">
			<div className="home__list_item_property">
				<p className="home__list_item_property_title">Item:</p>
				<p className="home__list_item_property_value">{name}</p>
			</div>
			<div className="home__list_item_property">
				<p className="home__list_item_property_title">Price:</p>
				<p className="home__list_item_property_value">{price}</p>
			</div>
			<div className="home__list_item_property">
				<p className="home__list_item_property_title">Time left:</p>
				<p className="home__list_item_property_value">{time_left}</p>
			</div>
		</div>
	)
}

export default AuctionItem

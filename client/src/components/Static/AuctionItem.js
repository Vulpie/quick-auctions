import React from 'react'

const AuctionItem = ({ name, price, time_left, base_class }) => {
	return (
		<div className={`${base_class}list_item`}>
			<div className={`${base_class}list_item_property`}>
				<p className={`${base_class}list_item_property_title`}>Item:</p>
				<p className={`${base_class}list_item_property_value`}>
					{name}
				</p>
			</div>
			<div className={`${base_class}list_item_property`}>
				<p className={`${base_class}list_item_property_title`}>
					Price:
				</p>
				<p className={`${base_class}list_item_property_value`}>
					{price}
				</p>
			</div>
			<div className={`${base_class}list_item_property`}>
				<p className={`${base_class}list_item_property_title`}>
					Time left:
				</p>
				<p className={`${base_class}list_item_property_value`}>
					{time_left}
				</p>
			</div>
		</div>
	)
}

export default AuctionItem

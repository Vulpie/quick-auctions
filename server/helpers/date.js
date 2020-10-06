exports.dateToString = (date) => {
	if (!date) {
		const now_date = new Date()
		return new Date(now_date.toDateString()).toISOString()
	}
	new Date(date).toISOString()
}

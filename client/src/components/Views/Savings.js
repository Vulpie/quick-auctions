import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Savings = () => {
	const { getAccessTokenSilently, user } = useAuth0()
	const [msg, setMsg] = useState('')
	const callApi = async () => {
		console.log(user)
		try {
			const token = await getAccessTokenSilently()
			const response = await fetch('/auction/new', {
				method: 'post',
				headers: { Authorization: `Bearer ${token}` },
				scope: 'openid: profile email',
			})
			const parsedResponse = await response.json()
			setMsg(parsedResponse)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div>
			<div onClick={() => callApi()}>Call api</div>
			<p>Message: {msg}</p>
		</div>
	)
}

export default Savings

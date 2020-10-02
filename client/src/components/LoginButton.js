import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0()
	return (
		<div onClick={() => loginWithRedirect()} className="button">
			Click to log in
		</div>
	)
}

export default LoginButton

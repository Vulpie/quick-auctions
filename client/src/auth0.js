import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'

const Auth0ProviderWithHistory = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE
    console.log(domain)
    console.log(clientId)
    console.log(audience)

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            audience={audience}
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWithHistory

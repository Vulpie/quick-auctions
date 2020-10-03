import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Savings = () => {
    const { getAccessTokenSilently } = useAuth0()
    const [msg, setMsg] = useState('')
    const callApi = async () => {
        try {
            const token = await getAccessTokenSilently()
            console.log('Token: ', token)
            const response = await fetch('/api/check', {
                headers: { Authorization: `Bearer ${token}` },
            })
            console.log(response)
            const parsedResponse = await response.json()
            setMsg(parsedResponse)
            console.log(parsedResponse)
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

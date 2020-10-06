var jwt = require('express-jwt')
var jwks = require('jwks-rsa')

const audience = process.env.REACT_APP_AUTH0_AUDIENCE
const jwksUri = process.env.JWKS_URI
const issuer = process.env.REACT_APP_AUTH0_ISSUER

const jwtCheck = jwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri,
	}),
	audience,
	issuer,
	algorithms: ['RS256'],
})

module.exports = jwtCheck

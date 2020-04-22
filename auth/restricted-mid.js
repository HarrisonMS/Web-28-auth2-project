const jwt = require('jsonwebtoken');
const secrets = require('../api/secrets')

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  // const { authorization } = req.headers;
	if (token) {
    console.log(token)
		const secret = secrets.jwtSecret;
		jwt.verify(token, secret, function(err, decodedToken) {
			if (err) {
				res.status(401).json({ message: 'invalid token oof' });
			} else {
				req.token = decodedToken;
				next();
			}
		});
	} else {
		res.status(400).json({ message: 'Please login and try again!' });
	}
};
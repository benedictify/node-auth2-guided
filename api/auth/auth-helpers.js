const jwt = require('jsonwebtoken')

function tokenBuilder(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role,
  }
  const options = {
    expiresIn: '1d'
  }
  return jwt.sign()
}


module.exports = {
  tokenBuilder,
}

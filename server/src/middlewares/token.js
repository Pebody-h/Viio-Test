import jwt from 'jsonwebtoken'
import 'dotenv/config'

const { JWT_SECRET } = process.env

export const createToken = (dataUser) => {
  const token = jwt.sign({dataUser: dataUser}, JWT_SECRET, {expiresIn: '5h'})
  return token
}

export const checkToken = (req, res, next) => {
  const  authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.sendStatus(401)
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  })

}
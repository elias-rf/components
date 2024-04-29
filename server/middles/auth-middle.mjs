import jwtService from 'jsonwebtoken'
import { config } from '../config/index.mjs'

export function authMiddle(req, res, next) {
  const jwt = req.headers['authorization']
  const token = jwt?.split(' ')[1]

  if (token) {
    try {
      const userInfo = jwtService.verify(token, config.auth.secret)
      req.auth = userInfo
    } catch (err) {
      req.auth = {}
      next()
      return
    }
  }
  next()
}

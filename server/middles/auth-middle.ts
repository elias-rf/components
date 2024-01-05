import { config } from '@/config/index.js'
import type { NextFunction, Request, Response } from 'express'
import jwtService from 'jsonwebtoken'

export interface RequestAuth extends Request {
  auth: any
}

export function authMiddle(req: Request, res: Response, next: NextFunction) {
  const jwt = req.headers['authorization']
  const token = jwt?.split(' ')[1]

  if (token) {
    try {
      const userInfo: any = jwtService.verify(token, config.auth.secret)
      ;(req as RequestAuth).auth = userInfo
    } catch (err) {
      ;(req as RequestAuth).auth = {}
      next()
      return
    }
  }
  next()
}

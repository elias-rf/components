import { NextFunction, Request, Response } from 'express'

/**
 * Catch 404 and forward to error handler
 * @public
 */
export const error404 = (req: Request, res: Response, next: NextFunction) => {
  res.status(404)
  next(new Error('Caminho não encontrado'))
}

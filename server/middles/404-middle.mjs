/**
 * Catch 404 and forward to error handler
 * @public
 */
export const error404 = (req, res, next) => {
  res.status(404)
  next(new Error('Caminho não encontrado'))
}

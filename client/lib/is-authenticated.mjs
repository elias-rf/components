export const isAuthenticated = (user) => {
  if (user && user.usuario_id > 0) {
    return true
  }
  return false
}

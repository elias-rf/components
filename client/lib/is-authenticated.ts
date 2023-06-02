export const isAuthenticated = (user: any) => {
  if (user && user.usuario_id > 0) {
    return true;
  }
  return false;
};

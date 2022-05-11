import jwt from "jsonwebtoken";

/**
 * codifica um token JWT com os dados do usuario
 *
 * @param {object} token registro do usuario
 * @param {string} secret senha de codificação
 * @param {string} [expiration] Prazo de expiração default "8h"
 * @returns
 */
function jwtDecode(token: string, secret: string) {
  return jwt.verify(token, secret);
}

export default jwtDecode;

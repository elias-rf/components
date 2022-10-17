import jwt from "jsonwebtoken";

/**
 * decodifica um token JWT com os dados do usuario
 *
 * @param {object} token registro do usuario
 * @param {string} secret senha de codificação
 * @param {string} [expiration] Prazo de expiração default "8h"
 * @returns os dados válidos ou null
 */
export function jwtDecode(token: string, secret: string) {
  try {
    const rsp = jwt.verify(token, secret);
    return rsp;
  } catch (err) {
    return null;
  }
}

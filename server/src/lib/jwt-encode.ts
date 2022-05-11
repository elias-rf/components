import jwt from "jsonwebtoken";

/**
 * codifica um token JWT com os dados do usuario
 *
 * @param {object} user registro do usuario
 * @param {string} secret senha de codificação
 * @param {string} [expiration] Prazo de expiração default "8h"
 * @returns
 */
function jwtEncode(user: string, secret: string, expiration = "8h") {
  return jwt.sign(user, secret, {
    expiresIn: expiration,
  });
}

export default jwtEncode;

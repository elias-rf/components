import type { TCurrentUser } from "@/types";
import { sign } from "jsonwebtoken";
/**
 * codifica um token JWT com os dados do usuario
 *
 * @param {object} user registro do usuario
 * @param {string} secret senha de codificação
 * @param {string} [expiration] Prazo de expiração default "8h"
 * @returns
 */
export function jwtEncode(
  user: TCurrentUser,
  secret = "SenhaSecreta",
  expiration = "8h"
) {
  return sign(user, secret, {
    expiresIn: expiration,
  });
}

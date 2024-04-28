import crypto from "node:crypto";

/**
 * Create password hash using Password based key derivative function 2
 *
 * @param text Senha para ser criptografada
 * @param algoritm 'sha256'
 * @returns retorna o salt$hash
 */
export function passwordHash(text, algoritm = "sha256") {
  const h = crypto.createHash(algoritm);
  h.update(text);
  return h.digest("hex");
}

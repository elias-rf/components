import crypto from "crypto";

/**
 * Create password hash using Password based key derivative function 2
 *
 * @param {string} text Senha para ser criptografada
 * @param {string} algoritm 'sha256'
 * @returns {string} retorna o salt$hash
 */
function passwordHash(text: string, algoritm = "sha256") {
  const h = crypto.createHash(algoritm);
  h.update(text);
  return h.digest("hex");
}

export default passwordHash;

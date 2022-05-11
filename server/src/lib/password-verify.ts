import passwordHash from "./password-hash";

/**
 * Checking the password hash
 *
 * @param {string} password Senha para validar
 * @param {string} original Senha criptografada
 * @param {string} algoritm Default para "sha256"
 * @returns {boolean} True se a senha for correta
 */
function passwordVerify(
  password: string,
  original: string,
  algoritm = "sha256"
) {
  const passHash = passwordHash(password, algoritm);
  return passHash === original;
}

export default passwordVerify;

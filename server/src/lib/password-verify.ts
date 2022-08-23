import { passwordHash } from "./password-hash";

/**
 * Checking the password hash
 *
 * @param password Senha para validar
 * @param original Senha criptografada
 * @param algoritm Default para "sha256"
 * @returns True se a senha for correta
 */
export function passwordVerify(
  password: string,
  original: string,
  algoritm = "sha256"
) {
  const passHash = passwordHash(password, algoritm);
  return passHash === original;
}

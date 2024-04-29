import crypto from 'crypto'

/**
 * Hashes the given text using the specified algorithm.
 *
 * @param {string} text - The text to be hashed.
 * @param {string} algoritm - The algorithm to use for hashing.
 * @return {Promise<string>} A promise that resolves to the hexadecimal representation of the hash.
 */
export async function hash(text, algoritm) {
  const h = crypto.createHash(algoritm)
  h.update(text)
  return h.digest('hex')
}

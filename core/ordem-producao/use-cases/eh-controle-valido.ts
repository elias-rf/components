import { module10 } from '@/utils/string/module10.js'

/**
 * Checks whether the provided control string is valid.
 *
 * @param {string} controle - the control string to be verified
 * @return {Promise<boolean>} a promise that resolves to true if the provided
 * control string is valid, otherwise false
 */
export const ehControleValido =
  () =>
  async ({ controle }: { controle: string }) => {
    if (!controle) return false

    if (controle.length === 12) {
      const serial = controle.substring(0, 11)
      const dv = controle.substring(11)
      if (module10(serial) === dv) {
        return true
      }
    }
    return false
  }

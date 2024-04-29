/**
 * Asynchronously generates a new string by slicing the first 6 characters of the input
 * string `controle`, and concatenating them with the string "00".
 *
 * @param {Object} args - An object containing the following parameter:
 *      @param {string} args.controle - The input string to be sliced.
 * @return {Promise<string>} - A promise that resolves to a string representing the
 *      modified input string.
 */
export const fromControle =
  () =>
  async ({ controle }) => {
    return parseInt(controle.slice(0, 6) + '00')
  }

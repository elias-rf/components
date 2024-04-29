/**
 * Sleeps for the specified number of milliseconds.
 *
 * @param {number} ms - The number of milliseconds to sleep.
 * @return {Promise<void>} A promise that resolves after the specified number of milliseconds.
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

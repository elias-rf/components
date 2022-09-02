export function validateIsThrow(response: boolean, message: string) {
  if (response) {
    throw new Error(message);
  }
}

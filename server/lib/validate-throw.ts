export function validateThrow(response: string | null) {
  if (response) {
    throw new Error(response);
  }
}

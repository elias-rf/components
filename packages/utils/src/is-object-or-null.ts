export function isObjectOrNull<T extends object, U>(term: T | U): term is T {
  return typeof term === "object";
}

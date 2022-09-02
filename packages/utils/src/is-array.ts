export function isArray<T, U>(term: Array<T> | U): term is Array<T> {
  return Array.isArray(term);
}

export function isNull<T>(term: T | null): term is null {
  return term === null;
}

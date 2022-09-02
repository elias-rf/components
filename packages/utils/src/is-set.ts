export function isSet<T, U>(term: Set<T> | U): term is Set<T> {
  return term instanceof Set;
}

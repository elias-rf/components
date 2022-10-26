export function isWeakSet<T extends object, U>(
  term: WeakSet<T> | U
): term is WeakSet<T> {
  return term instanceof WeakSet;
}

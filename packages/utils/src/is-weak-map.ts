export function isWeakMap<K extends object, V, U>(
  term: WeakMap<K, V> | U
): term is WeakMap<K, V> {
  return term instanceof WeakMap;
}

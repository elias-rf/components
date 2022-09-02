export function isFunction<T extends Function, U>(term: T | U): term is T {
  return typeof term === "function";
}

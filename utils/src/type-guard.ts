export function isDefined(
  term: any
): term is number | string | boolean | bigint | symbol | object | any[] {
  return !isNull(term) && !isUndefined(term);
}

export function isUndefined(term: any): term is undefined {
  return typeof term === "undefined";
}

export function isBoolean(term: any): term is boolean {
  return typeof term === "boolean";
}

export function isNumber(term: any): term is number {
  return typeof term === "number" && !Number.isNaN(term);
}

export function isString(term: any): term is string {
  return typeof term === "string";
}

export function isBigInt(term: any): term is bigint {
  return typeof term === "bigint";
}

export function isSymbol(term: any): term is symbol {
  return typeof term === "symbol";
}

export function isObjectOrNull<T extends object, U>(term: T | U): term is T {
  return typeof term === "object";
}

export function isNonEmptyArray<T, U>(term: Array<T> | U): term is Array<T> {
  return isArray(term) && term.length > 0;
}

export function isNonEmptyString<U>(term: string | U): term is string {
  return isString(term) && term.length > 0;
}

export function isNumberOrNaN<U>(term: number | U): term is number {
  return typeof term === "number";
}

export function isInteger(term: any): term is number {
  return isNumber(term) && Number.isInteger(term);
}

export function isPositiveInteger(term: any): term is number {
  return isInteger(term) && term > 0;
}

export function isNonNegativeInteger<U>(term: number | U): term is number {
  return isInteger(term) && term >= 0;
}

export function isNegativeInteger<U>(term: number | U): term is number {
  return isInteger(term) && term < 0;
}

export function isNull<T>(term: T | null): term is null {
  return term === null;
}

export function isFunction<T extends Function, U>(term: T | U): term is T {
  return typeof term === "function";
}

export function isObject<T extends object, U>(
  term: T | U
): term is NonNullable<T> {
  return !isNull(term) && !isUndefined(term) && typeof term === "object";
}

export function isArray<T, U>(term: Array<T> | U): term is Array<T> {
  return Array.isArray(term);
}

export function isMap<K, V, U>(term: Map<K, V> | U): term is Map<K, V> {
  return term instanceof Map;
}

export function isSet<T, U>(term: Set<T> | U): term is Set<T> {
  return term instanceof Set;
}

export function isWeakMap<K extends object, V, U>(
  term: WeakMap<K, V> | U
): term is WeakMap<K, V> {
  return term instanceof WeakMap;
}

export function isWeakSet<T extends object, U>(
  term: WeakSet<T> | U
): term is WeakSet<T> {
  return term instanceof WeakSet;
}

export function isDate(term: any): term is Date {
  return term instanceof Date;
}

export function isPromise(term: any): term is Promise<any> {
  if (typeof term === "object" && typeof term.then === "function") return true;
  return false;
}

/*
function functionName(variableName: any): variableName is DesiredType {
  // body that returns boolean
}
*/

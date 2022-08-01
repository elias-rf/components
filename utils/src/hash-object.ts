import { isPlainObject } from "./is-plain-object";
/**
 * Default query keys hash function.
 * Hashes the value into a stable hash.
 */
export function hashObject(queryKey: any): string {
  return JSON.stringify(queryKey, (_, val) =>
    isPlainObject(val)
      ? Object.keys(val)
          .sort()
          .reduce((result, key) => {
            result[key] = val[key];
            return result;
          }, {} as any)
      : val
  );
}

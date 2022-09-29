/**
 * Except helper function is quite opposite of pick. Except function will return a new object without passed keys from the given object.
 **/
export function except<T extends { [prop: any]: any }>(
  obj: T,
  except: Array<string>
): Partial<T> {
  return Object.keys(obj)
    .filter((key) => !except.includes(key))
    .reduce((result: Partial<T>, key): Partial<T> => {
      result[key] = obj[key as keyof T];
      return result;
    }, {});
}

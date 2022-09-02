// It picks some field from an object and converts it to a new object.
export function pick<T>(obj: T, props: Array<string>): Object {
  return Object.keys(obj)
    .filter((key) => props.includes(key))
    .reduce((result: { [key: string]: any }, key): Object => {
      result[key] = obj[key as keyof T];
      return result;
    }, {});
}

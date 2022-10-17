// It picks some field from an object and converts it to a new object.
export function pick(
  obj: Record<string, any>,
  props: Array<string>
): Record<string, any> {
  return Object.keys(obj)
    .filter((key) => props.includes(key))
    .reduce((result: { [key: string]: any }, key): Record<string, any> => {
      result[key] = obj[key];
      return result;
    }, {});
}

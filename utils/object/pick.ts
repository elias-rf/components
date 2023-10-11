// It picks some field from an object and converts it to a new object.
export function pick(
  obj: { [key: string]: any },
  props: Array<string>
): { [key: string]: any } {
  return Object.keys(obj)
    .filter((key) => props.includes(key))
    .reduce((result: { [key: string]: any }, key) => {
      result[key] = obj[key]
      return result
    }, {})
}

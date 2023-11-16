// It picks some field from an object and converts it to a new object.

export function pick(
  obj: { [key: string]: any },
  props: Array<string>
): { [key: string]: any } {
  const result: { [key: string]: any } = {}

  for (const key in obj) {
    if (props.includes(key)) {
      result[key] = obj[key]
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      const nestedProps = props.map((prop) => prop.replace(`${key}.`, ''))
      const nestedResult = pick(obj[key], nestedProps)
      if (Object.keys(nestedResult).length > 0) {
        result[key] = nestedResult
      }
    }
  }

  return result
}

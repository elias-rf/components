export function getValuesList(data, keys) {
  const response = new Set()
  const multipleKeys = Array.isArray(keys)
  for (const record of data) {
    const value = multipleKeys ? keys.map((key) => record[key]) : record[keys]
    response.add(value)
  }
  return [...response]
}

export function pushUnique(arr: any[], value: any | any[]) {
  const response = [...arr]
  if (Array.isArray(value)) {
    for (const valueItem of value) {
      if (!response.includes(valueItem)) response.push(valueItem)
    }
    return response
  }
  if (!arr.includes(value)) response.push(value)
  return response
}

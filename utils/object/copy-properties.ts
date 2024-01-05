export function copyProperties(source: any, target: any) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key]
    }
  }
}

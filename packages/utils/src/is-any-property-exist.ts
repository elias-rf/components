// It checks if any given properties exist in an object.
export function isAnyPropertyExist(obj: any, props: Array<string>): number {
  return props.filter((key) => obj[key]).length;
}

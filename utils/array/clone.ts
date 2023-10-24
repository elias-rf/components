export const clone = <T>(items: T[]): T[] =>
  items.map((item) => (Array.isArray(item) ? clone(item) : item) as T)

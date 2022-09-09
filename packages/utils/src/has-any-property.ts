// Check if the object has any property.
export function hasAnyProperty<T extends Record<string, any>>(obj: T): number {
  return Object.keys(obj).filter((key) => obj[key as keyof T]).length;
}

// Check if the object has any property.
export function hasAnyProperty<T>(obj: T): number {
  return Object.keys(obj).filter((kev) => obj[key as keyof T]).length;
}

export function getType(obj: any): string {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
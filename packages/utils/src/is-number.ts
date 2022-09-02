export function isNumber(term: any): term is number {
  return typeof term === "number" && !Number.isNaN(term);
}

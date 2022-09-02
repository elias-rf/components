export function isUndefined(term: any): term is undefined {
  return typeof term === "undefined";
}

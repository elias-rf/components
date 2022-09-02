export function isSymbol(term: any): term is symbol {
  return typeof term === "symbol";
}

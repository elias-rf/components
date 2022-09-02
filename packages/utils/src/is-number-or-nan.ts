export function isNumberOrNaN<U>(term: number | U): term is number {
  return typeof term === "number";
}

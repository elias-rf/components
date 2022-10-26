export function isBigInt(term: any): term is bigint {
  return typeof term === "bigint";
}

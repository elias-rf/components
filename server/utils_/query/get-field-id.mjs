export function getFieldId(field, id) {
  for (const fld of id) {
    if (fld[0] === field) return fld[1]
  }
  return undefined
}

export function getName(field, mapFields) {
  const entry = Object.entries(mapFields).find(([_, val]) => val === field)
  return entry ? entry[0] : field
}

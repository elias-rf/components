export function getName(field: string, mapFields: Record<string, string>) {
  const entry = Object.entries(mapFields).find(([_, val]) => val === field)
  return entry ? entry[0] : field
}

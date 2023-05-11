/** busca names em uma tabela */
export function namesFromFields(fields: { name: string }[]) {
  return fields.map((fld) => fld.name);
}

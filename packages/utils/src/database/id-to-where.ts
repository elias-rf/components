/**
 * Cria clausula Where para knex com chave composta
 *
 * @param {string|string[]} pk Chave primária
 * @param {string|string[]} values Valor da chave
 * @returns {object} Objeto com {pk:id}
 */
export function idToWhere(
  pk: string | string[],
  values: string | string[]
): {} {
  const response: any = {};
  let pkArray = Array.isArray(pk) ? pk : [pk];
  let idArray = Array.isArray(values) ? values : [values];
  for (let i = 0; i < pkArray.length; i++) {
    response[pkArray[i]] = idArray[i];
  }
  return response;
}

/**
 * Cria clausula Where para knex com chave composta
 *
 * @param {string|string[]} pk Chave primária
 * @param {string|string[]} id Valor da chave
 * @returns {object} Objeto com {pk:id}
 */
export function idToWhere(
  pk: string[] | string,
  id: (string | number)[] | string | number
) {
  const response: { [idx: string]: string | number } = {};
  let idArray: (string | number)[] = Array.isArray(id) ? id : [id];
  let pkArray: string[] = Array.isArray(pk) ? pk : [pk];
  pkArray.forEach((it, idx) => (response[it] = idArray[idx]));

  return response;
}

/**
 * Converte um objeto de ordenação para o padrão do Knex
 *
 * @param {{ [field: string]: "asc" | "desc" }} sort Objeto de entrada no padrão {campo:"asc"}
 * @returns {{ column: string; order: string }[]} Objeto de retorno no padrão {column: "campo", order: 'asc'}
 */
function sortReplace(sort: any) {
  const rsp = Object.entries(sort).map(([column, order]) => ({
    column,
    order,
  }));

  return rsp;
}

export default sortReplace;

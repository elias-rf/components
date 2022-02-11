/**
 * Substitui todas as ocorrência de um texto em outro
 *
 * @param {string} texto - Texto completo
 * @param {string} subStr - Texto procurado
 * @param {string} newSubStr - Texto substituto
 * @returns texto limpo
 */
function replaceStringAll(
  texto: string,
  procurar: string,
  substituir: string
): string {
  return texto.split(procurar).join(substituir);
}

export default replaceStringAll;

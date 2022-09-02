/**
 * Cria uma string no padrão CSV
 *
 * @param {string[]} header Cabeçalho do CSV [['field','label']]
 * @param {object[]} dados  Corpo do CSV [{field:value}]
 * @returns {string} Texto no formato CSV
 */
function convertArrayToCSV(header: string[][], dados: object[]): string {
  const hdr = header.map((lbl) => `"${lbl[1]}"`).join(";");
  const bdy = dados
    .map((rec: any) => {
      const lin: string[] = [];
      header.forEach((h) => {
        lin.push(`"${rec[h[0]]}"`);
      });
      return lin.join(";");
    })
    .join("\r\n");
  const rsp = hdr.concat("\r\n", bdy);
  return rsp;
}

export default convertArrayToCSV;

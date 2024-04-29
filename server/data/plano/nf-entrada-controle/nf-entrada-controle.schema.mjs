export const nfEntradaControleSchema = {
  table: 'LotesNotaEntrada',
  primary: ['CdFilial', 'NumNota', 'Serie', 'Modelo'],
  fields: [
    'CdFilial',
    'NumNota',
    'Serie',
    'Modelo',
    'CdFornecedor',
    'CdProduto',
    'NumLote',
    'Quantidade',
  ],
}

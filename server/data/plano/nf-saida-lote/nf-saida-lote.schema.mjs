export const nfSaidaLoteSchema = {
  table: 'LotesNota',
  primary: ['CdFilial', 'Serie', 'Modelo', 'NumNota', 'Sequencia'],
  fields: [
    'CdFilial',
    'NumNota',
    'Serie',
    'Sequencia',
    'DtEmissao',
    'CdProduto',
    'NumLote',
    'Quantidade',
    'Modelo',
    'Cdlote',
  ],
}

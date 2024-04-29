export const nfEntradaLogSchema = {
  table: 'NfLogConferencia',
  primary: ['NumNota', 'Serie', 'Modelo'],
  fields: [
    'CdFilial',
    'Modelo',
    'Serie',
    'NumNota',
    'CdFornecedor',
    'Data',
    'Usuario',
    'Operacao',
  ],
}

export const esterilizacaoInternaSchema = {
  table: 'tEsterilizacaoInterna',
  primary: ['kLoteEstInt'],
  fields: [
    'kLoteEstInt',
    'Data',
    'DataFechamento',
    'DataHoraAutoclave',
    'Fechado',
    'Obs',
    'Resultado',
    'UsuarioFechamento',
    'UsuarioResultado',
  ],
}

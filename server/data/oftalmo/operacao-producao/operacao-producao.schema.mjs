export const operacaoProducaoSchema = {
  table: 'tOperacaoDeProducao',
  primary: ['kOperacao'],
  fields: [
    'kOperacao',
    'Operacao',
    'EhRetrabalho',
    'Especial',
    'Descricao',
    'Amostragem',
  ],
}

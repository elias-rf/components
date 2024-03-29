import type { TSchema } from '@/schemas/schema.type.js'

export const operacaoProducaoSchema: TSchema = {
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

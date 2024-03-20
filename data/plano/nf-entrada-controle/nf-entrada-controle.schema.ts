import { TSchema } from '@/schemas/schema.type.js'

export const nfEntradaControleSchema: TSchema = {
  table: 'LotesNotaEntrada',
  primary: ['CdFilial', 'NumNota', 'Serie', 'Modelo'] as const,
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

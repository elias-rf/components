import { TSchema } from '@/schemas/schema.type.js'

export const nfSaidaLoteSchema: TSchema = {
  table: 'LotesNota',
  primary: ['CdFilial', 'Serie', 'Modelo', 'NumNota', 'Sequencia'] as const,
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

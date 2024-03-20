import { TSchema } from '@/schemas/schema.type.js'

export const nfEntradaLogSchema: TSchema = {
  table: 'NfLogConferencia',
  primary: ['NumNota', 'Serie', 'Modelo'] as const,
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

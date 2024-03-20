import { TSchema } from '@/schemas/schema.type.js'

export const esterilizacaoInternaSchema: TSchema = {
  table: 'tEsterilizacaoInterna',
  primary: ['kLoteEstInt'] as const,
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

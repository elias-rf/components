import { TSchema } from '@/schemas/schema.type.js'

export const esterilizacaoExternaSchema: TSchema = {
  table: 'tEsterilizacaoExterna',
  primary: ['kLoteEstExt'] as const,
  fields: [
    'kLoteEstExt',
    'Data',
    'DataRetorno',
    'Fechado',
    'LoteEto',
    'Obs',
    'QtdCaixa',
    'Quantidade',
    'Resultado',
    'UsuarioResultado',
  ],
}

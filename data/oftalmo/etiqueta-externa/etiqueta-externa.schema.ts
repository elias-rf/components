import { TSchema } from '@/schemas/schema.type.js'

export const etiquetaExternaSchema: TSchema = {
  table: 'tEtiqueta',
  primary: ['controle'] as const,
  fields: ['controle', 'qtdImpressao', 'dataFabricacao'],
}

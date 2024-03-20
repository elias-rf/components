import { TSchema } from '@/schemas/schema.type.js'

export const etiquetaInternaSchema: TSchema = {
  table: 'tbl_producao_etiqueta',
  primary: ['NumControle'] as const,
  fields: ['NumControle', 'fkProdutoItem', 'DataInsercao'],
}

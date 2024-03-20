import { produtoMapFields } from './produto.map-fields.js'
import { produtoSchema } from './produto.schema.js'

export type TProdutoFields = (typeof produtoSchema.fields)[number]
export type TProdutoKeys = (typeof produtoSchema.primary)[number]

export type TProdutoDtoKeys = 'id'
export type TProdutoDtoFields = keyof typeof produtoMapFields

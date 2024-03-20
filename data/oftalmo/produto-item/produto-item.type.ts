import { produtoItemMapFields } from './produto-item.map-fields.js'
import { produtoItemSchema } from './produto-item.schema.js'

export type TProdutoItemFields = (typeof produtoItemSchema.fields)[number]
export type TProdutoItemKeys = (typeof produtoItemSchema.primary)[number]

export type TProdutoItemDtoKeys = 'id'
export type TProdutoItemDtoFields = keyof typeof produtoItemMapFields

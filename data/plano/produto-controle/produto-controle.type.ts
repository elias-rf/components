import { produtoControleMapFields } from '@/data/plano/produto-controle/produto-controle.map-fields.js'
import { produtoSchema } from '@/data/plano/produto/produto.schema.js'

export type TProdutoControleFields = (typeof produtoSchema.fields)[number]
export type TProdutoControleKeys = (typeof produtoSchema.primary)[number]

export type TProdutoControleDtoKeys = 'produtoId' | 'loteId'
export type TProdutoControleDtoFields = keyof typeof produtoControleMapFields

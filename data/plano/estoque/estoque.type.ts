import { estoqueMapFields } from '@/data/plano/estoque/estoque.map-fields.js'
import { estoqueSchema } from '@/data/plano/estoque/estoque.schema.js'

export type TEstoqueFields = (typeof estoqueSchema.fields)[number]
export type TEstoqueKeys = (typeof estoqueSchema.primary)[number]

export type TEstoqueDtoKeys = 'empresaId' | 'produtoId'
export type TEstoqueDtoFields = keyof typeof estoqueMapFields

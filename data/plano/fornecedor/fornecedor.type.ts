import { fornecedorMapFields } from '@/data/plano/fornecedor/fornecedor.map-fields.js'
import { fornecedorSchema } from '@/data/plano/fornecedor/fornecedor.schema.js'

export type TFornecedorFields = (typeof fornecedorSchema.fields)[number]
export type TFornecedorKeys = (typeof fornecedorSchema.primary)[number]

export type TFornecedorDtoKeys = 'id'
export type TFornecedorDtoFields = keyof typeof fornecedorMapFields

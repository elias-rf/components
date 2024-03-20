import { clienteMapFields } from '@/data/plano/cliente/cliente.map-fields.js'
import { clienteSchema } from '@/data/plano/cliente/cliente.schema.js'

export type TClienteFields = (typeof clienteSchema.fields)[number]
export type TClienteKeys = (typeof clienteSchema.primary)[number]

export type TClienteDtoKeys = 'id'
export type TClienteDtoFields = keyof typeof clienteMapFields

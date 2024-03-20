import { groupMapFields } from './group.map-fields.js'
import { groupSchema } from './group.schema.js'

export type TGroupKeys = (typeof groupSchema.primary)[number]
export type TGroupFields = (typeof groupSchema.fields)[number]

export type TGroupDtoKeys = 'id'
export type TGroupDtoFields = keyof typeof groupMapFields

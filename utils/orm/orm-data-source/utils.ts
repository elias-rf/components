import type { TSchema } from '@/schemas/schema.type.js'
import { TData, TId, TOrderBy, TSelect, TWhere } from '@/types/index.js'
import { validData as vldData } from '@/utils/orm/utils/valid/valid-data.js'
import { validFirst as vldFirst } from '@/utils/orm/utils/valid/valid-first.js'
import { validGroupBy as vldGroupBy } from '@/utils/orm/utils/valid/valid-group-by.js'
import { validId as vldId } from '@/utils/orm/utils/valid/valid-id.js'
import { validOrderBy as vldOrderBy } from '@/utils/orm/utils/valid/valid-order-by.js'
import { validReturning as vldReturning } from '@/utils/orm/utils/valid/valid-returning.js'
import { validSelect as vldSelect } from '@/utils/orm/utils/valid/valid-select.js'
import { validWhere as vldWhere } from '@/utils/orm/utils/valid/valid-where.js'
import { TAdapterKnex, TQueryKnex } from '../adapter-knex.js'

export function ormUtils(schema: TSchema) {
  const validWhere = (where: TWhere) => {
    return vldWhere(where, schema) as TWhere
  }

  const validOrderBy = (orderBy: TOrderBy) => {
    return vldOrderBy(orderBy, schema)
  }

  const getIdColumns = () => {
    return schema.primary as unknown as string[]
  }

  const getTableName = () => {
    return schema.table
  }

  const getAdapter = (db: TAdapterKnex) => () => {
    return db
  }

  const getSchema = () => {
    return schema
  }

  const validFirst = (first?: TSelect) => {
    return vldFirst(first, schema)
  }

  const validGroupBy = (groupBy?: TSelect) => {
    return vldGroupBy(groupBy, schema)
  }

  const validData = (data: Partial<TData>) => {
    return vldData(data, schema)
  }

  const getFields = () => {
    return Object.keys(schema.fields) as Array<string>
  }

  const validId = (id: TWhere = []) => {
    return vldId(id, schema)
  }

  const validSelect = (select?: TSelect) => {
    return vldSelect<string>(select, schema)
  }

  const validReturning = (returning?: TSelect) => {
    return vldReturning(returning, schema)
  }

  return {
    getFields,
    getIdColumns,
    validWhere,
    validOrderBy,
    validId,
    validSelect,
    validReturning,
    validFirst,
    validGroupBy,
    validData,
    getTableName,
    getAdapter,
    getSchema,
  }
}

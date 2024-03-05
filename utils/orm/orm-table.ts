import type { TSchema } from '@/schemas/schema.type.js'
import { TData, TId, TOrderBy, TSelect, TWhere } from '@/types/index.js'
import { getIncludeData } from '@/utils/orm/utils/get-include-data.js'
import { selectFromInclude } from '@/utils/orm/utils/valid/select-from-include.js'
import { validData as vldData } from '@/utils/orm/utils/valid/valid-data.js'
import { validFirst as vldFirst } from '@/utils/orm/utils/valid/valid-first.js'
import { validGroupBy as vldGroupBy } from '@/utils/orm/utils/valid/valid-group-by.js'
import { validId as vldId } from '@/utils/orm/utils/valid/valid-id.js'
import { validOrderBy as vldOrderBy } from '@/utils/orm/utils/valid/valid-order-by.js'
import { validReturning as vldReturning } from '@/utils/orm/utils/valid/valid-returning.js'
import { validSelect as vldSelect } from '@/utils/orm/utils/valid/valid-select.js'
import { validWhere as vldWhere } from '@/utils/orm/utils/valid/valid-where.js'
import { TAdapterKnex, TQueryKnex } from './adapter-knex.js'

export function ormTable<TFields extends string, TKeys extends string>(
  db: TAdapterKnex,
  schema: TSchema
) {
  /**
   * READ
   */
  const read = async ({
    where,
    select = [],
    include,
  }: {
    where: TId<TKeys>
    select?: TSelect<TFields>
    include?: any
  }): Promise<TData<TFields>> => {
    if (include) {
      select = selectFromInclude(select, include, schema)
    }
    const qry = {
      from: getTableName(),
      ...validId(where),
      ...validFirst(select),
      limit: 1,
    }
    let response = (await db(qry as TQueryKnex)) as TData<TFields>
    if (include) {
      response = await getIncludeData(response, include, schema)
    }

    return response
  }

  /**
   * LIST
   */
  const list = async ({
    select,
    where = [],
    orderBy = [],
    limit,
    groupBy = [],
    sum,
    min,
    max,
    include,
  }: {
    select?: TSelect<TFields>
    where?: TWhere<TFields>
    orderBy?: TOrderBy<TFields>
    limit?: number
    groupBy?: TSelect<TFields>
    sum?: any
    min?: any
    max?: any
    include?: any
  } = {}): Promise<TData<TFields>[]> => {
    if (include) {
      select = selectFromInclude(select || [], include, schema)
    }
    const qry: any = {
      from: getTableName(),
      ...validWhere(where),
      ...validOrderBy(orderBy),
      ...validGroupBy(groupBy),
      ...validSelect(select),
    }

    if (limit) qry.limit = limit
    if (sum) qry.sum = sum
    if (min) qry.min = min
    if (max) qry.max = max

    let response = (await db(qry as TQueryKnex)) as Array<TData<TFields>>

    if (include) {
      response = await getIncludeData(response, include, schema)
    }

    return response
  }

  /**
   * COUNT
   */
  const count = async ({
    select,
    count = ['* as ttl'],
    where = [],
  }: {
    select?: Array<TFields | '*'>
    count: (TFields | string)[]
    where?: TWhere<TFields>
  }): Promise<TData<TFields> | number> => {
    const qry = {
      from: getTableName(),
      ...validWhere(where),
      ...validSelect(select),
      count,
    }

    return db(qry as TQueryKnex) as Promise<TData<TFields> | number>
  }

  /**
   * UPDATE
   */
  const update = async ({
    where,
    data,
    returning,
    debug,
  }: {
    where: TId<TKeys>
    data: Partial<TData<TFields>>
    returning?: TSelect<TFields>
    debug?: boolean
  }): Promise<TData<TFields> | number> => {
    const qry = {
      from: getTableName(),
      update: validData(data),
      ...validId(where),
      ...validReturning(returning),
      debug,
    } as unknown as TQueryKnex

    return db(qry) as Promise<TData<TFields> | number>
  }

  /**
   * CREATE
   */
  const create = async ({
    data,
    returning,
  }: {
    data: Partial<TData<TFields>>
    returning?: TSelect<TFields>
  }) => {
    const qry = {
      from: getTableName(),
      insert: validData(data),
      ...validReturning(returning),
    } as unknown as TQueryKnex

    return db(qry) as Promise<TData<TFields> | number>
  }
  create.rpc = true

  /**
   * DELETE
   */
  const del = async ({
    where,
    returning,
  }: {
    where: [TKeys, any][]
    returning?: TSelect<TFields>
  }): Promise<Record<TFields, any> | number> => {
    return db({
      del: true,
      from: getTableName(),
      ...validId(where),
      ...validReturning(returning),
    } as unknown as TQueryKnex) as Record<TFields, any> | number
  }
  del.rpc = true

  /**
   * INCREMENT
   */
  const increment = async ({
    increment,
    where = [],
    returning,
  }: {
    returning?: TSelect<TFields>
    where?: TWhere<TFields>
    increment: [TFields, number]
  }): Promise<Record<TFields, any> | number> => {
    const qry = {
      from: getTableName(),
      increment,
      ...validWhere(where),
      ...validReturning(returning),
    } as unknown as TQueryKnex

    return db(qry) as Record<TFields, any> | number
  }
  increment.rpc = true

  const validWhere = (where: TWhere<TFields>) => {
    return vldWhere(where, schema)
  }

  const validOrderBy = (orderBy: TOrderBy<TFields>) => {
    return vldOrderBy(orderBy, schema)
  }

  const validId = (id: Array<[TKeys, any]>) => {
    return vldId(id, schema)
  }

  const validSelect = (select?: TSelect<TFields>) => {
    return vldSelect<TFields>(select, schema)
  }

  const validReturning = (returning?: TSelect<TFields>) => {
    return vldReturning(returning, schema)
  }

  const validFirst = (first?: TSelect<TFields>) => {
    return vldFirst(first, schema)
  }

  const validGroupBy = (groupBy?: TSelect<TFields>) => {
    return vldGroupBy(groupBy, schema)
  }

  const validData = (data: Partial<TData<TFields>>) => {
    return vldData(data, schema)
  }

  const getFields = () => {
    return Object.keys(schema.fields) as Array<TFields>
  }

  const getIdColumns = () => {
    return schema.primary as unknown as TKeys[]
  }

  const getTableName = () => {
    return schema.table
  }

  const getAdapter = () => {
    return db
  }
  const getSchema = () => {
    return schema
  }

  return {
    rpc: {
      list,
      read,
      count,
      update,
      create,
      del,
      increment,
    },
    util: {
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
    },
  }
}

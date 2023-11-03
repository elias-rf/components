import { getIncludeData } from '@/orm/utils/get-include-data'
import { selectFromInclude } from '@/orm/utils/valid/select-from-include'
import { validData as vldData } from '@/orm/utils/valid/valid-data'
import { validFirst as vldFirst } from '@/orm/utils/valid/valid-first'
import { validGroupBy as vldGroupBy } from '@/orm/utils/valid/valid-group-by'
import { validId as vldId } from '@/orm/utils/valid/valid-id'
import { validOrderBy as vldOrderBy } from '@/orm/utils/valid/valid-order-by'
import { validReturning as vldReturning } from '@/orm/utils/valid/valid-returning'
import { validSelect as vldSelect } from '@/orm/utils/valid/valid-select'
import { validWhere as vldWhere } from '@/orm/utils/valid/valid-where'
import type { TSchema } from '@/schemas/schema.type'
import { TData, TId, TOrderBy, TSelect, TWhere } from '@/types'
import { OrmDatabase } from './orm-database'
import type { Query } from './orm.type'

export function ormTable<TFields extends string, TKeys extends string>(
  db: OrmDatabase,
  schema: TSchema
) {
  const read = async ({
    where,
    select = [],
    include,
  }: {
    where: TId<TKeys>
    select?: TSelect<TFields>
    include?: any
  }) => {
    if (include) {
      select = selectFromInclude(select, include, schema)
    }
    const qry = {
      from: getTableName(),
      ...validId(where),
      ...validFirst(select),
    }
    let response = (await db.run(qry as Query)) as TData<TFields>
    if (include) {
      response = await getIncludeData(response, include, schema)
    }

    return response
  }
  read.rpc = true

  const list = async ({
    select = ['*'],
    where = [],
    orderBy = [],
    limit = 50,
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
  } = {}) => {
    if (include) {
      select = selectFromInclude(select, include, schema)
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
    let response = (await db.run(qry as Query)) as Array<TData<TFields>>

    if (include) {
      response = await getIncludeData(response, include, schema)
    }

    return response
  }
  list.rpc = true

  const count = async ({
    select,
    count = '* as ttl',
    where = [],
  }: {
    select?: Array<TFields | '*'>
    count: TFields | string
    where?: TWhere<TFields>
  }) => {
    const qry = {
      from: getTableName(),
      ...validWhere(where),
      ...validSelect(select),
      count,
    }

    return db.run(qry as Query) as Promise<TData<TFields> | number>
  }
  count.rpc = true

  const update = async ({
    id,
    data,
    returning,
  }: {
    id: TId<TKeys>
    data: Partial<TData<TFields>>
    returning?: TSelect<TFields>
  }) => {
    const qry = {
      from: getTableName(),
      update: validData(data),
      ...validId(id),
      ...validReturning(returning),
    } as unknown as Query

    return db.run(qry) as Promise<TData<TFields> | number>
  }
  update.rpc = true

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
    } as unknown as Query

    return db.run(qry) as Promise<TData<TFields> | number>
  }
  create.rpc = true

  const del = async ({
    id,
    returning,
  }: {
    id: [TKeys, any][]
    returning?: TSelect<TFields>
  }): Promise<Record<TFields, any> | number> => {
    return db.run({
      del: true,
      from: getTableName(),
      ...validId(id),
      ...validReturning(returning),
    } as unknown as Query) as Record<TFields, any> | number
  }
  del.rpc = true

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
    } as unknown as Query

    return db.run(qry) as Record<TFields, any> | number
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

  const validFirst = (first?: TSelect<TFields>) => {
    return vldFirst(first, schema)
  }

  const validReturning = (returning?: TSelect<TFields>) => {
    return vldReturning(returning, schema) as TSelect<TFields>
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

  return {
    rpc: { list, read, count, update, create, del, increment },
    util: {
      getFields,
      getIdColumns,
      validWhere,
      validOrderBy,
      validId,
      validSelect,
      validFirst,
      validReturning,
      validGroupBy,
      validData,
      getTableName,
    },
  }
}

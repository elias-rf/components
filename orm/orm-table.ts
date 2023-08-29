import type { TSchema } from '@/schemas/schema.type'
import { getType } from '@/utils/identify/get-type'
import { isEmpty } from '@/utils/identify/is-empty'
import autoBind from 'auto-bind'
import { OrmDatabase } from './orm-database'
import type { Query } from './orm.type'

export class OrmTable<T extends string> {
  db
  schema

  constructor(db: OrmDatabase, schema: TSchema) {
    autoBind(this)
    this.db = db
    this.schema = schema
  }

  async list({
    filter = [],
    sort = [],
    limit = 50,
    select = ['*'],
    group = [],
    sum,
    min,
    max,
  }: {
    filter?: [T, any?, any?][]
    sort?: [T, 'asc' | 'desc'][]
    limit?: number
    select?: T[] | ['*']
    sum?: any
    min?: any
    max?: any
    group?: T[]
    related?: string
  } = {}): Promise<Record<T, any>[]> {
    this.assertSelect(select)
    this.validSort(sort)
    const qry: Query = {
      from: this.getTableName(),
      ...this.validFilter(filter),
    }
    if (select) qry.select = select
    if (limit) qry.limit = limit
    if (!isEmpty(filter)) qry.where = filter
    if (!isEmpty(sort)) qry.orderBy = sort
    if (sum) qry.sum = sum
    if (min) qry.sum = min
    if (max) qry.max = max
    if (group.length > 0) qry.groupBy = group
    return this.db.run(qry)
  }

  async read({
    id,
    select = [],
  }: {
    id: Array<[T, any]>
    select?: T[]
  }): Promise<Record<T, any>> {
    this.validId(id)
    this.assertSelect(select)
    const qry: Query = {
      from: this.getTableName(),
      where: id,
    }

    if (select) qry.first = select

    const rec = (await this.db.run(qry)) as Record<T, any>
    return rec
  }

  async count({
    filter = [],
    count = '* as ttl',
    select,
  }: {
    filter?: [T, any?, any?][]
    select?: T[]
    count?: T | string
  }): Promise<Record<T, any> | number> {
    this.validFilter(filter)
    this.assertSelect(select)
    const qry: Query = { from: this.getTableName(), where: filter, count }

    if (select) qry.select = select
    const data = (await this.db.run(qry)) as Record<T, any> | number
    return data
  }

  async update({
    id,
    data,
    returning,
  }: {
    id: [T, any][]
    returning?: T[]
    data: Partial<Record<T, any>>
  }): Promise<Record<T, any> | number> {
    this.validId(id)
    this.assertData(data)
    this.assertSelect(returning)

    const qry: Query = {
      from: this.getTableName(),
      returning,
      update: data,
      where: id,
    }

    return this.db.run(qry) as Record<T, any> | number
  }

  async create({
    data,
    returning,
  }: {
    data: Partial<Record<T, any>>
    returning?: T[]
  }): Promise<Record<T, any> | number> {
    this.assertData(data)
    this.assertSelect(returning)

    const qry: Query = { from: this.getTableName(), insert: data, returning }

    return this.db.run(qry) as Record<T, any> | number
  }

  async del({
    id,
    returning,
  }: {
    id: [T, any][]
    returning?: T[]
  }): Promise<Record<T, any> | number> {
    this.validId(id)

    return this.db.run({
      del: true,
      from: this.getTableName(),
      where: id,
      returning,
    }) as Record<T, any> | number
  }

  async increment({
    filter = [],
    increment,
    returning,
  }: {
    filter?: [T, any?, any?][]
    increment?: [T, number]
    returning?: T[]
  }): Promise<Record<T, any> | number> {
    this.validFilter(filter)
    this.assertSelect(returning)

    const qry: Query = {
      from: this.getTableName(),
      where: filter,
      increment,
      returning,
    }

    return this.db.run(qry) as Record<T, any> | number
  }
  validFilter(filter: Array<[T, any?, any?]>) {
    const nameList = this.getFields()
    const fieldsInvalidos = []
    let fieldsLivres = nameList.sort()
    if (!Array.isArray(filter))
      throw new Error('filter deve ser [string, any?, any?][]')

    for (const flt of filter) {
      const [field, value1, value2] = flt
      const value = value2 || value1
      if (typeof field !== 'string' || flt.length < 2 || flt.length > 3)
        throw new Error('filter deve ser [string, any?, any?][]')
      if (!nameList.includes(field)) {
        fieldsInvalidos.push(field)
      } else {
        if (getType(value) !== this.getFieldType(field)) {
          throw new Error(
            `${this.getTableName()}.${field} deve ser do tipo ${this.getFieldType(
              field
            )} mas é ${getType(value)}`
          )
        }
      }
      fieldsLivres = fieldsLivres.filter((f) => f !== field)
    }
    if (fieldsInvalidos.length > 0) {
      throw new Error(
        `[${fieldsInvalidos}] não ${
          fieldsInvalidos.length === 1
            ? 'é um campo válido'
            : 'são campos válidos'
        } para where em ${this.getTableName()} use: ${fieldsLivres}`
      )
    }
    return { where: filter }
  }
  validSort(sortBy: [T, 'asc' | 'desc'][]) {
    const nameList = this.getFields()
    const fieldsInvalidos = []
    let fieldsLivres = nameList.sort()

    if (!Array.isArray(sortBy))
      throw new Error(`sort deve ser [string, "asc" | "desc"][]`)

    for (const sort of sortBy) {
      const field = sort[0]
      if (!nameList.includes(field)) {
        fieldsInvalidos.push(field)
      }
      fieldsLivres = fieldsLivres.filter((f) => f !== field)
    }
    if (fieldsInvalidos.length > 0) {
      throw new Error(
        `[${fieldsInvalidos}] não ${
          fieldsInvalidos.length == 1 ? 'é válido' : 'são válidos'
        } para order em ${this.getTableName()} use: ${fieldsLivres}`
      )
    }
  }

  validId(id: Array<[T, any]>) {
    const idColumns = this.getIdColumns()

    const fieldsInvalidos: string[] = []
    let fieldsLivres = idColumns.sort()

    if (!Array.isArray(id)) throw new Error('id deve ser Array<[string, any]>')

    for (const fields of id) {
      const [field, value] = fields
      if (typeof field !== 'string' || fields.length !== 2)
        throw new Error('id deve ser Array<[string, any]>')
      if (!idColumns.includes(field)) {
        fieldsInvalidos.push(field)
      } else {
        if (getType(value) !== this.getFieldType(field)) {
          throw new Error(
            `${this.getTableName()}.${field} deve ser do tipo ${this.getFieldType(
              field
            )} mas é ${getType(value)}`
          )
        }
      }
      fieldsLivres = fieldsLivres.filter((f) => f !== field)
    }
    if (fieldsInvalidos.length > 0) {
      throw new Error(
        `[${fieldsInvalidos}] não ${
          fieldsInvalidos.length === 1 ? 'é id válido' : 'são ids válidos'
        }${
          fieldsLivres.length > 0 ? ` em ${this.getTableName()} use: ` : ''
        }${fieldsLivres}`
      )
    }
    return { query: id }
  }

  assertSelect(select?: T[] | ['*']) {
    if (select === undefined) return

    if (select.length === 1 && select[0] === '*') return

    const nameList = this.getFields()
    const fieldsInvalidos = []
    let fieldsLivres = nameList.sort()
    let fld: T
    for (fld of select as T[]) {
      if (!nameList.includes(fld)) {
        fieldsInvalidos.push(fld)
      }
      fieldsLivres = fieldsLivres.filter((f) => f !== fld)
    }
    if (fieldsInvalidos.length > 0) {
      throw new Error(
        `[${fieldsInvalidos}] não ${
          fieldsInvalidos.length === 1
            ? 'é um campo válido'
            : 'são campos válidos'
        } em ${this.getTableName()} use: ${fieldsLivres}`
      )
    }
  }

  assertData(data: Partial<Record<T, any>>) {
    const nameListOk = this.getFields()

    const fieldsInvalidos = []
    let fieldsLivres = nameListOk

    for (const field in data) {
      if (!nameListOk.includes(field)) {
        fieldsInvalidos.push(field)
      } else {
        if (getType(data[field]) !== this.getFieldType(field)) {
          throw new Error(
            `${this.getTableName()}.${field} deve ser do tipo ${this.getFieldType(
              field
            )} mas é ${getType(data[field])}`
          )
        }
      }
      fieldsLivres = fieldsLivres.filter((f) => f !== field)
    }

    if (fieldsInvalidos.length === 1) {
      throw new Error(
        `[${fieldsInvalidos}] não é um campo válido${
          fieldsLivres.length > 0 ? ` em ${this.getTableName()} use: ` : ''
        }${fieldsLivres}`
      )
    }

    if (fieldsInvalidos.length > 1) {
      throw new Error(
        `[${fieldsInvalidos}] não são campos válidos${
          fieldsLivres.length > 0 ? ` em ${this.getTableName()} use: ` : ''
        }${fieldsLivres}`
      )
    }
  }

  getFields(): T[] {
    return Object.keys(this.schema.fields) as T[]
  }

  getIdColumns() {
    return this.schema.primary
  }

  getTableName() {
    return this.schema.table
  }
  getFieldType(field: string) {
    const type = this.schema.fields[field].data_type
    switch (type) {
      case 'tinyint':
      case 'int':
      case 'bit':
      case 'tCodigoEmpresa':
      case 'smallint':
      case 'numeric':
        return 'number'
      case 'char':
      case 'tNomePessoa':
      case 'text':
      case 'tMemo':
      case 'tSmallMemo':
      case 'varchar':
        return 'string'
      case 'real':
      case 'decimal':
      case 'money':
      case 'smallmoney':
        return 'number'
      case 'smalldatetime':
      case 'datetime':
        return 'string'
      default:
        return type
    }
  }
}

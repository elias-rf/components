export type TId<TKeys> = [field: TKeys, value: any][]
export type TWhere<TFields = string> = (
  | [field: TFields, value: any]
  | [field: TFields, equalitity: string, value: any]
)[]

export type TSelect<TFields extends string = string> = (TFields | '*')[]
export type TOrderBy<TFields extends string = string> = [
  TFields,
  'asc' | 'desc',
][]
export type TData<TFields extends string = string> = {
  [fields in TFields]: any
}

/** Lista de registros selecionados */
export type TSelection<T> = TId<T>

/** Objeto com chave primária de um registro */
export type TSelected = { [fields: string]: any }
export type TInclude = { [name: string]: (string | [string, string, any])[] }

export type TCount<TFields extends string = string> = (args: {
  select?: Array<TFields | '*'>
  count?: (TFields | string)[]
  where?: TWhere<TFields>
}) => Promise<TData<TFields> | number>

export type TUpdate<
  TFields extends string = string,
  TKeys extends string = string,
> = (args: {
  where?: TWhere<TKeys>
  data?: Partial<TData<TFields>>
  returning?: TSelect<TFields>
  debug?: boolean
}) => Promise<TData<TFields>[] | number>

export type TCreate<TFields extends string = string> = (args: {
  data?: Partial<TData<TFields>>
  returning?: TSelect<TFields>
}) => Promise<TData<TFields>[]>

export type TDel<
  TFields extends string = string,
  TKeys extends string = string,
> = (args: {
  where?: TWhere<TKeys>
  returning?: TSelect<TFields>
}) => Promise<number>

export type TIncrement<TFields extends string = string> = (args: {
  returning?: TSelect<TFields>
  where?: TWhere<TFields>
  increment?: [TFields, number]
}) => Promise<TData<TFields> | number>

export type TList<TFields extends string = string> = (args: {
  select?: TSelect<TFields>
  where?: TWhere<TFields>
  orderBy?: TOrderBy<TFields>
  limit?: number
  groupBy?: TSelect<TFields>
  sum?: any
  min?: any
  max?: any
  include?: any
}) => Promise<TData<TFields>[]>

export type TRead<
  TFields extends string = string,
  TKeys extends string = string,
> = (args: {
  where?: TWhere<TKeys>
  select?: TSelect<TFields>
  include?: any
}) => Promise<TData<TFields>>

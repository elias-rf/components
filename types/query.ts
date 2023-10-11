export type TId<TKeys> = Array<[field: TKeys, value: any]>
export type TWhere<TFields> = Array<
  | [field: TFields, value: any]
  | [field: TFields, equalitity: string, value: any]
>
export type TSelect<TFields> = Array<TFields | '*'>
export type TOrderBy<TFields> = Array<[TFields, 'asc' | 'desc']>
export type TData<TFields extends string> = Record<TFields, any>

/** Lista de registros selecionados */
export type TSelection<T> = TId<T>

export type TAggregate = [field: string, value: any]
export type TIncrement = [field: string, value: any]

/** Array com nome dos campos chave primária */
export type TPks = string[]

/** Objeto com chave primária de um registro */
export type TSelected = { [fields: string]: any }

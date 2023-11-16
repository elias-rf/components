export * from './model'
export * from './query'

/** Dados do usuário logado */
export type TCurrentUser = {
  usuario_id?: number
  nome_login?: string
  nome?: string
  group_ids?: string
  token?: string
}

export type TCan = {
  [permission: string]: boolean
}

/** Tipos aceitos por Input */
export type TInputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'number'
  | 'password'
  | 'text'

/** Objeto genérico */
export type TGenericObject = Record<string, any>

/** Registro genérico */
export type TUnknownObject = Record<PropertyKey, unknown>

/** Array genérico */
export type TUnknownArray = unknown[]

/** Dados para component arvore */
export type TreeData = {
  key: string
  label: string
  child?: TreeData
}[]

export type TFormStatus = 'edit' | 'new' | 'view' | 'none'
export type TFormButtonStatus = {
  editDisabled: boolean
  createDisabled: boolean
  delDisabled: boolean
  saveDisabled: boolean
  cancelDisabled: boolean
  formDisabled: boolean
}

export type TColumn = {
  label: string
  name: string
  align?: 'center' | 'left' | 'right' | 'justify'
  format?: (v: any) => any
  parse?: (v: any) => any
  sortable?: boolean
  width?: string
}

export type TRow = { [field: string]: any }

import { oftalmoDataSource } from '@/data/oftalmo/index.js'
import { planoDataSource } from '@/data/plano/index.js'

export const dataSource = {
  oftalmo: oftalmoDataSource,
  plano: planoDataSource,
}

export type TDataSource = typeof dataSource

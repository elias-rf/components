import { TDataSource } from '@/data/index.js'
import { list } from './list.js'
import { read } from './read.js'

export const operacaoProducaoUseCases = (dataSource: TDataSource) => ({
  list: list(dataSource),
  read: read(dataSource),
})

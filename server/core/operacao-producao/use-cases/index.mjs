import { list } from './list.mjs'
import { read } from './read.mjs'

export const operacaoProducaoUseCases = (dataSource) => ({
  list: list(dataSource),
  read: read(dataSource),
})

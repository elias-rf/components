import { TDataSource } from '@/data/index.js'
import { read } from './read.js'

export const produtoPlanoUseCases = (dataSource: TDataSource) => ({
  read: read(dataSource),
})

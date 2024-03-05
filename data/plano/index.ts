import { clienteDataSource } from '@/data/plano/cliente/cliente.data-source.js'
import { planoDb } from './plano.db.js'

export const planoDataSource = {
  cliente: { ...clienteDataSource(planoDb) },
}

export type TPlanoDataSource = typeof planoDataSource

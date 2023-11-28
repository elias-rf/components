import { config } from '@/config/index.js'
import { adapterKnex } from '@/orm/adapter-knex.js'
import Knex from 'knex'

export const dbPlano = adapterKnex(Knex(config.db.plano))

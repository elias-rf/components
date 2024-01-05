import { config } from '@/config/index.js'
import { adapterKnex } from '@/orm/adapter-knex.js'
import Knex from 'knex'

export const dbLog = adapterKnex(Knex(config.db.log))

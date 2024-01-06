import { config } from '@/utils/config/index.js'
import { adapterKnex } from '@/utils/orm/adapter-knex.js'
import Knex from 'knex'

export const dbLog = adapterKnex(Knex(config.db.log))

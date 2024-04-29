import Knex from 'knex'
import { config } from '../../config/index.mjs'
import { adapterKnex } from '../../utils/orm/adapter-knex.mjs'

export const dbSys = adapterKnex(Knex(config.db.sys))

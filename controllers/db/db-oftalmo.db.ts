import { config } from '@/config/index.js'
import { AdapterKnex } from '@/orm/index.js'
import Knex from 'knex'

export const dbOftalmo = new AdapterKnex(Knex(config.db.oftalmo))

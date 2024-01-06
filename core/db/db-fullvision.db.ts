import { config } from '@/utils/config/index.js'
import { adapterKnex } from '@/utils/orm/adapter-knex.js'
import Knex from 'knex'

export const dbFullvision = adapterKnex(Knex(config.db.plano))

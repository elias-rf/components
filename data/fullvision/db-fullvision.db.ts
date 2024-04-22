import { config } from '@/utils/config/index.mjs'
import { adapterKnex } from '@/utils/orm/adapter-knex.js'
import Knex from 'knex'

export const dbFullvision = adapterKnex(Knex(config.db.plano))

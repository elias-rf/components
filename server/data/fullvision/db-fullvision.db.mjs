import Knex from 'knex'
import { config } from '../../../config/index.mjs'
import { adapterKnex } from '../../../utils/orm/adapter-knex.mjs'

export const dbFullvision = adapterKnex(Knex(config.db.plano))

import { OrmDatabase } from '@/orm'
import Knex from 'knex'
import { config } from '@/config'

export const dbSys = new OrmDatabase(Knex(config.db.sys))

import { config } from '@/config'
import { OrmDatabase } from '@/orm'
import Knex from 'knex'

export const dbLog = new OrmDatabase(Knex(config.db.log))

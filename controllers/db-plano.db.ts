import { OrmDatabase } from "@/orm";
import  Knex  from "knex";
import {config} from '@/config'

export const dbPlano = new OrmDatabase(Knex(config.db.plano))
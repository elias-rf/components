import dotenv from 'dotenv-flow'
import type { Knex } from 'knex'
import tls from 'tls'
import * as v from 'valibot'

dotenv.config({
  silent: true,
})

tls.DEFAULT_MIN_VERSION = 'TLSv1'

type TSqlConfig = {
  client: string
  debug: boolean
  useNullAsDefault: boolean
  connection: {
    database: string
    host: string
    user: string
    password: string
    options: {
      trustServerCertificate: boolean
      enableArithAbort: boolean
      tdsVersion?: string
    }
  }
}

interface Config {
  app: {
    port: number
    env: string
    mock?: boolean
  }
  fs: {
    roots: object
  }
  db: {
    sys: Knex.Config
    log: Knex.Config
    oftalmo: TSqlConfig
    plano: TSqlConfig
    fullvision: TSqlConfig
  }
  auth: {
    expiration: number
    secret: string
  }
}

const schemaSqlConnection = v.object({
  client: v.string(),
  debug: v.boolean(),
  useNullAsDefault: v.boolean(),
  connection: v.object({
    database: v.string(),
    host: v.string(),
    user: v.string(),
    password: v.string(),
    options: v.object({
      trustServerCertificate: v.boolean(),
      enableArithAbort: v.boolean(),
      tdsVersion: v.string(),
    }),
  }),
})

export const config: Config = {
  app: {
    port: parseInt(process.env.PORT ? process.env.PORT : '3000'),
    env: process.env.NODE_ENV || 'development',
    mock: process.env.MOCK === 'true',
  },
  auth: {
    expiration: parseInt(process.env.auth_expiration || '3600'),
    secret: process.env.auth_secret || 'S3gr3d0',
  },
  fs: { roots: JSON.parse(process.env.fs_roots || '{}') },
  db: {
    sys: {
      client: 'better-sqlite3',
      debug: false,
      useNullAsDefault: true,
      connection: {
        filename: './sys.sqlite',
      },
    },
    log: {
      client: 'better-sqlite3',
      debug: false,
      useNullAsDefault: true,
      connection: {
        filename: './log.sqlite',
      },
    },
    oftalmo: v.parse(
      schemaSqlConnection,
      JSON.parse(process.env.db_oftalmo as string)
    ),
    plano: v.parse(
      schemaSqlConnection,
      JSON.parse(process.env.db_plano as string)
    ),
    fullvision: v.parse(
      schemaSqlConnection,
      JSON.parse(process.env.db_fullvision as string)
    ),
  },
}

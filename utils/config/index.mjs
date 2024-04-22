import dotenv from 'dotenv-flow'
import tls from 'tls'
import * as v from 'valibot'

dotenv.config({
  silent: true,
})

tls.DEFAULT_MIN_VERSION = 'TLSv1'

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

export const config = {
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
    oftalmo: v.parse(schemaSqlConnection, JSON.parse(process.env.db_oftalmo)),
    plano: v.parse(schemaSqlConnection, JSON.parse(process.env.db_plano)),
    fullvision: v.parse(
      schemaSqlConnection,
      JSON.parse(process.env.db_fullvision)
    ),
  },
}

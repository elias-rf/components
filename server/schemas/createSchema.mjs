import fs from 'fs'
import knex from 'knex'
import path from 'path'
import { fileURLToPath } from 'url'
import { SchemaInspector } from 'knex-schema-inspector'
import { connections } from './connections.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function main() {
  const db = process.argv[2]

  if (!['oftalmo', 'plano', 'sys'].includes(db)) {
    console.log('use plano|oftalmo|sys')
    process.exit(1)
  }

  const server = knex(connections[db])

  const inspector = await SchemaInspector(server)

  const tables = await inspector.tables()
  for (const table of tables) {
    let schema = { database: db, table, relations: {}, primary: [] }
    if (fs.existsSync(`${__dirname}/${db}/${table}.schema.ts`)) {
      schema = await import(`${__dirname}/${db}/${table}.schema.ts`)
      schema = schema[table] || {
        database: '',
        table: '',
        relations: {},
        primary: [],
      }
    }

    const infoFields = await inspector.columnInfo(table)

    schema.database = db

    schema.table = table
    schema.primary = infoFields.reduce((rsp, fld) => {
      if (fld.is_primary_key && !rsp.includes(fld.name)) {
        rsp.push(fld.name)
      }
      return rsp
    }, schema.primary)
    schema.fields = infoFields.reduce((rsp, item) => {
      rsp[item.name] = item
      return rsp
    }, {})

    const schemaFile = stringifySchema(schema.table, schema)

    saveSchema(db, schema.table, schemaFile)
  }
  process.exit(0)
}

function stringifySchema(schemaTable, schema) {
  return `export type T${schemaTable} = keyof typeof ${schemaTable}.fields

export const ${schemaTable} = ${JSON.stringify(schema, null, '  ')}
  `
}

function saveSchema(db, file, schema) {
  const dir = `${__dirname}/${db}`

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  fs.writeFileSync(`${dir}/${file}.schema.ts`, schema)

  console.log(`${dir}/${file}.schema.ts`)
  // process.exit(0)
}

main()

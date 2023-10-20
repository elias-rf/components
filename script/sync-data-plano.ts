import { printAt } from '@/script/screen'
import { omit } from '@/utils/object/omit'
import { eachOfLimit } from 'async'
import Knex from 'knex'
import { table } from 'table'

const source = Knex({
  client: 'mssql',
  debug: false,
  useNullAsDefault: true,
  connection: {
    database: 'visionTech',
    host: '192.168.192.10',
    user: 'sa',
    password: '#$3pol3-3',
    options: {
      trustServerCertificate: true,
      enableArithAbort: true,
      tdsVersion: '7_3_B',
    },
  },
})
const dest = Knex({
  client: 'mssql',
  debug: false,
  useNullAsDefault: true,
  connection: {
    database: 'visionTech',
    host: 'localhost',
    user: 'sa',
    password: '1qaz@WSX',
    options: {
      trustServerCertificate: true,
      enableArithAbort: true,
      tdsVersion: '7_3_B',
    },
  },
})

function objToTable(obj: any) {
  const response = [['table', 'count', 'id', 'updated', 'jumped']] as any[]
  for (const prop in obj) {
    response.push([
      prop,
      obj[prop].count,
      obj[prop].id,
      obj[prop].updated,
      obj[prop].jumped,
    ])
  }
  return table(response, {
    singleLine: true,
  })
}

const obj: { [table: string]: any } = {}

async function copy(table: string, key: string, exc: string[] = []) {
  obj[table] = { count: 0, id: 0, updated: 0, jumped: 0 } as any
  const data = await source(table).select('*').limit(5000).orderBy(key, 'desc')
  await eachOfLimit(
    data,
    5,
    async (row, index) => {
      const resp = await dest(table).where(key, row[key])
      obj[table].count = index
      obj[table].id = row[key]

      if (resp.length === 0) {
        await dest(table).insert(omit(row, exc))
        obj[table].updated++
      } else {
        obj[table].jumped++
      }
      printAt(1, 1, objToTable(obj))
    },
    (err: any) => {
      if (err) {
        printAt(20, 1, err.message + ' #####')
      } else {
        obj[table] = 'done'
      }
    }
  )
}

async function main() {
  await copy('CadCli', 'CdCliente')
  await copy('CadPro', 'CdProduto')
  await copy('CadVen', 'CdVendedor')
  await copy('CategPro', 'CdCategoria')
  await copy('Estoque', 'CdProduto')
  await copy('ItemNota', 'NumNota')
  await copy('MestreNota', 'NumNota')
  await copy('NFItem', 'NroNF')
  await copy('NfMestre', 'NroNf')
  await copy('ObsNota', 'NumNota')

  // process.exit(0)
}

main()

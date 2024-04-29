import { printAt } from '@/script/screen.mjs'
import Knex from 'knex'
import * as _ from 'lodash-es'
import { Writable } from 'stream'
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

const obj = {}

function objToTable(obj) {
  const response = [['table', 'count', 'id', 'updated', 'jumped']]
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

async function copy(table, key, exc = []) {
  obj[table] = { count: 0, id: 0, updated: 0, jumped: 0 }
  const data = source(table)
    .select('*')
    .limit(5000)
    .orderBy(key, 'desc')
    .stream()

  const writable = new Writable({
    objectMode: true,
    write: async (row, encoding, callback) => {
      // console.log(row)
      const resp = await dest(table).where(key, row[key])
      if (row[key]) obj[table].id = row[key]

      if (resp.length === 0) {
        await dest(table).insert(_.omit(row, exc))
        obj[table].updated++
      } else {
        obj[table].jumped++
      }
      printAt(1, 1, objToTable(obj))

      callback()
    },
  })
  data.pipe(writable)
  return new Promise((resolve, reject) => {
    data.on('end', () => resolve(true))
  })
}

async function main() {
  await copy('LotesNota', 'NumLote')
  await copy('CadCli', 'CdCliente')
  await copy('CadPro', 'CdProduto')
  await copy('CadVen', 'CdVendedor')
  await copy('CategPro', 'CdCategoria')
  await copy('Estoque', 'CdProduto')
  await copy('ItemNota', 'NumNota', ['PlanoContaSped'])
  await copy('MestreNota', 'NumNota')
  await copy('NFItem', 'NroNF')
  await copy('NfMestre', 'NroNf')
  await copy('ObsNota', 'NumNota')
  await copy('NatOpe', 'Nop')
}

main()

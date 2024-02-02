import { printAt } from '@/script/screen.js'
import Knex from 'knex'
import * as _ from 'lodash-es'
import { Writable } from 'stream'
import { table } from 'table'

const source = Knex({
  client: 'mssql',
  debug: false,
  useNullAsDefault: true,
  connection: {
    database: 'OftalmoXPProducao',
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
    database: 'OftalmoXPProducao',
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

const obj: { [table: string]: any } = {}

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

async function copy(table: string, key: string, exc: string[] = []) {
  obj[table] = { count: 0, id: 0, updated: 0, jumped: 0 } as any
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
  await copy('tOrdemProducao', 'kOp', ['ts', 'raio'])
  await copy('phonebook', 'id')
  await copy('tEsterilizacaoExterna', 'kLoteEstExt')
  await copy('tEsterilizacaoInterna', 'kLoteEstInt')
  await copy('tEtiqueta', 'controle')
  await copy('tbl_producao_Etiqueta', 'NumControle')
  await copy('tOperacaoOrdemProducao', 'kOperacaoOP', [
    'DataInicio',
    'DataFim',
    'HoraInicio',
    'HoraFim',
  ])
}

main()

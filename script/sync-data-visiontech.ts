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
        try {
          await dest(table).insert(omit(row, exc))
          obj[table].updated++
        } catch (e: any) {
          console.log(`🚀 ~ file: sync-data-visiontech.ts:75 ~ e:`, e)
        }
      } else {
        obj[table].jumped++
      }
      printAt(1, 1, objToTable(obj))
    },
    (err: any) => {
      if (err) {
        console.log(`🚀 ~ file: sync-data-visiontech.ts:80 ~ copy ~ err:`, err)

        printAt(20, 1, err.message + ' #####')
      } else {
        obj[table] = 'done'
      }
    }
  )
}

async function main() {
  // await copy('tOrdemProducao', 'kOp', ['ts', 'raio'])
  // await copy('phonebook', 'id')
  // await copy('tEsterilizacaoExterna', 'kLoteEstExt')
  // await copy('tEsterilizacaoInterna', 'kLoteEstInt')
  // await copy('tEtiqueta', 'controle')
  // await copy('tbl_producao_Etiqueta', 'NumControle')
  await copy('tOperacaoOrdemProducao', 'kOperacaoOP', [
    'DataInicio',
    'DataFim',
    'HoraInicio',
    'HoraFim',
  ])

  // process.exit(0)
}

main()

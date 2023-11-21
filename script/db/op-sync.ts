import { dest } from './dest.js'
import { source } from './source.js'

async function copyOPItem(kop: string) {
  console.log(`🚀 ~ file: op-sync.ts:6 ~ copyOPItem ~ kop:`, kop)

  const table = 'tOperacaoOrdemProducao'
  const key = 'kOperacaoOP'
  const data = await source(table)
    .select('*')
    .where('fkop', kop)
    .orderBy(key, 'desc')
  if (data.length === 0) console.log('no data')
  for (const row of data) {
    delete row.HoraInicio
    delete row.DataInicio
    delete row.HoraFim
    delete row.DataFim
    console.log('-', table, key, row[key])
    const resp = await dest(table).where(key, row[key])
    if (resp.length === 0) {
      await dest(table).insert(row)
      console.log('-', 'created')
    }
  }
}

async function copyOP(qtd: string) {
  const table = 'tOrdemProducao'
  const key = 'kOp'
  const data = await source(table)
    .select('*')
    .limit(parseInt(qtd))
    .orderBy(key, 'desc')
  for (const row of data) {
    delete row.ts
    console.log(table, key, row[key])
    const resp = await dest(table).where(key, row[key])
    if (resp.length === 0) {
      await dest(table).insert(row)
      console.log('created')
    }
    await copyOPItem(row[key])
  }
}

async function main() {
  const qtd = process.argv[2] || '1'

  await copyOP(qtd) // (, );
  console.log('OK')
  process.exit(0)
}

main()

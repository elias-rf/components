import { dbOftalmo } from '@/controllers/db/db-oftalmo.db.js'
import { AdapterKnex, ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { day } from '@/utils/date/day.js'
import { isoDate, object, parse, regex, string } from 'valibot'

export const esterilizacaoInternaSchema: TSchema = {
  table: 'tEsterilizacaoInterna',
  primary: ['kLoteEstInt'] as const,
  fields: [
    'kLoteEstInt',

    'Data',

    'Resultado',

    'UsuarioResultado',

    'Obs',

    'Fechado',

    'UsuarioFechamento',

    'DataFechamento',

    'DataHoraAutoclave',
  ],
}

export type TEsterilizacaoInternaFields =
  (typeof esterilizacaoInternaSchema.fields)[number]
export type TEsterilizacaoInternaKeys =
  (typeof esterilizacaoInternaSchema.primary)[number]

function esterilizacaoInternaControllerFactory(
  db: AdapterKnex,
  schema: TSchema
) {
  const orm = ormTable<TEsterilizacaoInternaFields, TEsterilizacaoInternaKeys>(
    db,
    schema
  )

  const diario = async ({
    inicio,
    fim,
  }: {
    inicio: string
    fim: string
  }): Promise<{ dia: string; dia_semana: string; quantidade: number }[]> => {
    parse(
      object({
        inicio: string([isoDate('data inicial inválida')]),
        fim: string([isoDate('data final inválida')]),
      }),
      { inicio, fim }
    )
    const qry = await db.run({
      from: 'tOperacaoOrdemProducao',
      selectRaw: ['DataInicio as dia, Sum(QtdConforme) AS quantidade'],
      orderBy: [['DataInicio', 'desc']],
      groupBy: ['DataInicio'],
      where: [['DataInicio', 'between', [inicio, fim]]],
      whereRaw: ['fkOperacao in (3058, 3158)'],
    })
    return qry.map((rec: any) => {
      rec.dia_semana = day(rec.dia).format('ddd')
      rec.dia = rec.dia.toISOString().substring(0, 10)
      return rec
    })
  }
  diario.rpc = true

  const mensal = async ({
    mes,
  }: {
    mes: string
  }): Promise<{ mes: string; quantidade: number }[]> => {
    parse(string([regex(/^\d{4}-(?:0[1-9]|1[0-2])$/, 'mês inválido')]), mes)
    const qry = await db.run({
      from: 'tOperacaoOrdemProducao',
      selectRaw: [
        'CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade',
      ],
      orderByRaw: ['CONVERT(CHAR(7),[DataInicio],120) desc'],
      groupByRaw: ['CONVERT(CHAR(7),[DataInicio],120)'],
      whereRaw: [
        'fkOperacao in (3058, 3158) and CONVERT(CHAR(7),[DataInicio],120)>=?',
        [mes],
      ],
    })
    return qry
  }
  mensal.rpc = true

  const modelo = async ({
    data,
    produto,
  }: {
    data: string
    produto: string
  }): Promise<{ modelo: string; quantidade: number }[]> => {
    parse(
      object({
        data: string([isoDate('data inválida')]),
        produto: string(),
      }),
      { data, produto }
    )
    const knex = db.getDriver()
    const qry = await knex(
      knex.raw(
        '((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp'
      )
    )
      .select({ modelo: 'tbl_Produto_Item.NomeProdutoItem' })
      .sum('tOperacaoOrdemProducao.QtdConforme AS quantidade')
      .groupBy(
        'tbl_Produto_Item.NomeProdutoItem',
        'tOperacaoOrdemProducao.DataInicio',
        'tbl_Produto.fkCategoria'
      )
      .where({
        DataInicio: data,
        fkCategoria: produto,
      })
      .whereIn('fkOperacao', [3058, 3158])
    return qry as { modelo: string; quantidade: number }[]
  }
  modelo.rpc = true

  const produto = async ({
    data,
  }: {
    data: string
  }): Promise<{ produto: string; quantidade: number }[]> => {
    parse(object({ data: string([isoDate('data inicial inválida')]) }), {
      data,
    })
    const knex = db.getDriver()
    const qry = await knex(
      knex.raw(
        '((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp'
      )
    )
      .select({ produto: 'tbl_Produto.fkCategoria' })
      .sum('tOperacaoOrdemProducao.QtdConforme AS quantidade')
      .orderBy('tbl_Produto.fkCategoria', 'asc')
      .groupBy(['tbl_Produto.fkCategoria', 'tOperacaoOrdemProducao.DataInicio'])
      .where({ DataInicio: data })
      .whereIn('fkOperacao', [3058, 3158])
    return qry as { produto: string; quantidade: number }[]
  }
  produto.rpc = true

  return {
    ...orm.rpc,
    diario,
    mensal,
    modelo,
    produto,
  }
}

export const esterilizacaoInternaController =
  esterilizacaoInternaControllerFactory(dbOftalmo, esterilizacaoInternaSchema)

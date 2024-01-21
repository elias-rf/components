import { dbOftalmo } from '@/core/db/db-oftalmo.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import * as v from 'valibot'

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
  db: TAdapterKnex,
  schema: TSchema
) {
  const orm = ormTable<TEsterilizacaoInternaFields, TEsterilizacaoInternaKeys>(
    db,
    schema
  )

  const esterilizacaoInterna_diario = async ({
    inicio,
    fim,
  }: {
    inicio: string
    fim: string
  }): Promise<{ dia: string; dia_semana: string; quantidade: number }[]> => {
    v.parse(
      v.object({
        inicio: v.string([v.isoDate('data inicial inválida')]),
        fim: v.string([v.isoDate('data final inválida')]),
      }),
      { inicio, fim }
    )
    const qry = await db({
      from: 'tOperacaoOrdemProducao',
      selectRaw: ['DataInicio as dia, Sum(QtdConforme) AS quantidade'],
      orderBy: [['DataInicio', 'desc']],
      groupBy: ['DataInicio'],
      where: [['DataInicio', 'between', [inicio, fim]]],
      whereRaw: ['fkOperacao in (3058, 3158)'],
    })
    return qry.map((rec: any) => {
      rec.dia_semana = format(rec.dia, 'EEEEEE', { locale: ptBR })
      rec.dia = format(rec.dia, 'yyyy-MM-dd')
      return rec
    })
  }

  const esterilizacaoInterna_mensal = async ({
    mes,
  }: {
    mes: string
  }): Promise<{ mes: string; quantidade: number }[]> => {
    v.parse(
      v.string([v.regex(/^\d{4}-(?:0[1-9]|1[0-2])$/, 'mês inválido')]),
      mes
    )
    const qry = await db({
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

  const esterilizacaoInterna_modelo = async ({
    data,
    produto,
  }: {
    data: string
    produto: string
  }): Promise<{ modelo: string; quantidade: number }[]> => {
    v.parse(
      v.object({
        data: v.string([v.isoDate('data inválida')]),
        produto: v.string(),
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

  const esterilizacaoInterna_produto = async ({
    data,
  }: {
    data: string
  }): Promise<{ produto: string; quantidade: number }[]> => {
    v.parse(
      v.object({ data: v.string([v.isoDate('data inicial inválida')]) }),
      {
        data,
      }
    )
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

  return {
    esterilizacaoInterna_list: orm.rpc.list,
    esterilizacaoInterna_read: orm.rpc.read,
    esterilizacaoInterna_count: orm.rpc.count,
    esterilizacaoInterna_update: orm.rpc.update,
    esterilizacaoInterna_create: orm.rpc.create,
    esterilizacaoInterna_del: orm.rpc.del,
    esterilizacaoInterna_increment: orm.rpc.increment,
    esterilizacaoInterna_diario,
    esterilizacaoInterna_mensal,
    esterilizacaoInterna_modelo,
    esterilizacaoInterna_produto,
  }
}

export const esterilizacaoInternaController =
  esterilizacaoInternaControllerFactory(dbOftalmo, esterilizacaoInternaSchema)

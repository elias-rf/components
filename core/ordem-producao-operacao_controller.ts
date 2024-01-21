import { dbOftalmo } from '@/core/db/db-oftalmo.db.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { TAdapterKnex } from '@/utils/orm/adapter-knex.js'
import { ormTable } from '@/utils/orm/index.js'
import { UTCDateMini } from '@date-fns/utc'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import * as v from 'valibot'

export const tOperacaoOrdemProducao: TSchema = {
  table: 'tOperacaoOrdemProducao',
  primary: ['kOperacaoOP'],
  relations: {
    operacao: {
      method: () =>
        import('./operacao-producao_controller.js').then(
          (m) => m.operacaoProducaoController.operacaoProducao_read
        ),
      where: [['kOperacao', 'fkOperacao']],
    },
    empregado: {
      method: () =>
        import('./empregado_controller.js').then(
          (m) => m.empregadoController.empregado_read
        ),
      where: [['kEmpregado', 'fkEmpregado']],
    },
  },
  fields: [
    'kOperacaoOP',
    'fkOp',
    'fkOperacaoLP',
    'fkOperacao',
    'fkFuncionario',
    'fkMaquina',
    'DataHoraInicio',
    'DataInicio',
    'HoraInicio',
    'DataHoraFim',
    'DataFim',
    'HoraFim',
    'QtdInicial',
    'QtdConforme',
    'QtdRetrabalho',
    'fkOperacaoRetrab',
    'Complemento',
    'fkOPFilha',
    'ViaFilhaAntiga',
    'IdPagina',
    'OPAntiga',
    'ClasseOP',
    'EspPriAlca',
    'EspSegAlca',
  ] as const,
}

export type TOrdemProducaoOperacaoFields =
  (typeof tOperacaoOrdemProducao.fields)[number]
export type TOrdemProducaoOperacaoKeys =
  (typeof tOperacaoOrdemProducao.primary)[number]

function ordemProducaoOperacaoControllerFactory(
  db: TAdapterKnex,
  schema: TSchema
) {
  const orm = ormTable<
    TOrdemProducaoOperacaoFields,
    TOrdemProducaoOperacaoKeys
  >(db, schema)

  const ordemProducaoOperacao_diario = async ({
    operacao,
    inicio,
    fim,
  }: {
    operacao: number
    inicio: string
    fim: string
  }): Promise<
    Array<{ dia: string; diaSemana: string; quantidade: number }>
  > => {
    v.parse(
      v.object({
        operacao: v.union(
          [v.number(), v.string()],
          'operacao dever ser number ou string'
        ),
        inicio: v.string([v.isoDate('data inicial inválida')]),
        fim: v.string([v.isoDate('data final inválida')]),
      }),
      {
        operacao,
        inicio,
        fim,
      }
    )

    const data = await db({
      from: orm.util.getTableName(),
      select: ['DataInicio as dia'],
      sum: ['QtdConforme as quantidade'],
      orderBy: [['DataInicio', 'desc']],
      groupBy: ['DataInicio'],
      where: [
        ['fkOperacao', operacao],
        ['DataInicio', 'between', [inicio, fim]],
      ],
    })

    return data.map((item: any) => {
      const itemDia = new UTCDateMini(item.dia)
      item.diaSemana = format(itemDia, 'EEEEEE', { locale: ptBR })
      item.dia = format(itemDia, 'yyyy-MM-dd')
      return item
    })
  }

  const ordemProducaoOperacao_mensal = async ({
    operacao,
    mes,
  }: {
    operacao: number
    mes: string
  }) => {
    v.parse(
      v.object({
        operacao: v.union(
          [v.number(), v.string()],
          'operacao dever ser number ou string'
        ),
        mes: v.string([v.regex(/^\d{4}-(?:0[1-9]|1[0-2])$/, 'mês inválido')]),
      }),
      { operacao, mes }
    )

    const qry = await db({
      from: orm.util.getTableName(),
      selectRaw: [
        'CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade',
      ],
      orderByRaw: ['CONVERT(CHAR(7),[DataInicio],120) desc'],
      groupByRaw: ['CONVERT(CHAR(7),[DataInicio],120)'],
      havingRaw: ['CONVERT(CHAR(7),[DataInicio],120)>=?', [mes]],
      where: [['fkOperacao', operacao]],
    })
    return qry
  }

  const ordemProducaoOperacao_modelo = async ({
    operacao,
    data,
    produto,
  }: {
    operacao: string
    data: string
    produto: string
  }) => {
    v.parse(
      v.object({
        operacao: v.union([v.string(), v.number()]),
        data: v.string([v.isoDate('data inicial inválida')]),
        produto: v.union([v.string(), v.number()]),
      }),
      {
        operacao,
        data,
        produto,
      }
    )
    const knex = db.getDriver()
    const qry = await knex(
      knex.raw(
        '((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp'
      )
    )
      .select(
        knex.raw(
          'tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade'
        )
      )
      .groupBy(
        knex.raw(
          'tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria'
        )
      )
      .where({
        fkOperacao: operacao,
        DataInicio: data,
        fkCategoria: produto,
      })
    return qry
  }

  const ordemProducaoOperacao_produto = async ({
    operacao,
    data,
  }: {
    operacao: string
    data: string
  }) => {
    v.parse(
      v.object({
        operacao: v.union([v.string(), v.number()]),
        data: v.string([v.isoDate('data inicial inválida')]),
      }),
      {
        operacao,
        data,
      }
    )
    const knex = db.getDriver()
    const qry = await knex<any, { produto: string; quantidade: number }[]>(
      knex.raw(
        '((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp'
      )
    )
      .select(
        knex.raw(
          'tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade'
        )
      )
      .orderBy('tbl_Produto.fkCategoria', 'asc')
      .groupBy(['tbl_Produto.fkCategoria', 'tOperacaoOrdemProducao.DataInicio'])
      .where({ fkOperacao: operacao, DataInicio: data })
    return qry as { produto: string; quantidade: number }[]
  }

  const ordemProducaoOperacao_turno = async ({
    operacao,
    data,
  }: {
    operacao: string
    data: string
  }) => {
    v.parse(
      v.object({
        operacao: v.union([v.string(), v.number()]),
        data: v.string([v.isoDate('data inicial inválida')]),
      }),
      {
        operacao,
        data,
      }
    )
    const knex = db.getDriver()
    const qry = await knex(
      knex.raw(
        '((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp'
      )
    )
      .select(
        knex.raw(
          "case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end as turno, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .groupBy(
        knex.raw(
          "case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end"
        )
      )
      .where({ fkOperacao: operacao, DataInicio: data })
    return qry
  }

  return {
    ordemProducaoOperacao_list: orm.rpc.list,
    ordemProducaoOperacao_read: orm.rpc.read,
    ordemProducaoOperacao_count: orm.rpc.count,
    ordemProducaoOperacao_update: orm.rpc.update,
    ordemProducaoOperacao_create: orm.rpc.create,
    ordemProducaoOperacao_del: orm.rpc.del,
    ordemProducaoOperacao_increment: orm.rpc.increment,
    ordemProducaoOperacao_diario,
    ordemProducaoOperacao_mensal,
    ordemProducaoOperacao_modelo,
    ordemProducaoOperacao_produto,
    ordemProducaoOperacao_turno,
  }
}

export const ordemProducaoOperacaoController =
  ordemProducaoOperacaoControllerFactory(dbOftalmo, tOperacaoOrdemProducao)

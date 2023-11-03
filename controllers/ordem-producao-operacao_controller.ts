import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'
import { day } from '@/utils/date/day'
import { isoDate, number, object, parse, regex, string, union } from 'valibot'

export const tOperacaoOrdemProducao: TSchema = {
  table: 'tOperacaoOrdemProducao',
  primary: ['kOperacaoOP'],
  relations: {
    operacao: {
      method: () =>
        import('./operacao-producao_controller').then(
          (m) => m.operacaoProducaoController.read
        ),
      where: [['kOperacao', 'fkOperacao']],
    },
    empregado: {
      method: () =>
        import('./empregado_controller').then(
          (m) => m.empregadoController.read
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
  db: OrmDatabase,
  schema: TSchema
) {
  const orm = ormTable<
    TOrdemProducaoOperacaoFields,
    TOrdemProducaoOperacaoKeys
  >(db, schema)

  const diario = async ({
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
    parse(
      object({
        operacao: union(
          [number(), string()],
          'operacao dever ser number ou string'
        ),
        inicio: string([isoDate('data inicial inválida')]),
        fim: string([isoDate('data final inválida')]),
      }),
      {
        operacao,
        inicio,
        fim,
      }
    )

    const data = await db.run({
      from: orm.util.getTableName(),
      select: ['DataInicio as dia'],
      sum: 'QtdConforme as quantidade',
      orderBy: [['DataInicio', 'desc']],
      groupBy: ['DataInicio'],
      where: [
        ['fkOperacao', operacao],
        ['DataInicio', 'between', [inicio, fim]],
      ],
    })

    return data.map((item: any) => {
      item.diaSemana = day.utc(item.dia).format('ddd')
      item.dia = day.utc(item.dia).format('YYYY-MM-DD')
      return item
    })
  }
  diario.rpc = true

  const mensal = async ({
    operacao,
    mes,
  }: {
    operacao: number
    mes: string
  }) => {
    parse(
      object({
        operacao: union(
          [number(), string()],
          'operacao dever ser number ou string'
        ),
        mes: string([regex(/^\d{4}-(?:0[1-9]|1[0-2])$/, 'mês inválido')]),
      }),
      { operacao, mes }
    )

    const qry = await db.run({
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
  mensal.rpc = true

  const modelo = async ({
    operacao,
    data,
    produto,
  }: {
    operacao: string
    data: string
    produto: string
  }) => {
    parse(
      object({
        operacao: union([string(), number()]),
        data: string([isoDate('data inicial inválida')]),
        produto: union([string(), number()]),
      }),
      {
        operacao,
        data,
        produto,
      }
    )
    const knex = db.knex
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
  modelo.rpc = true

  const produto = async ({
    operacao,
    data,
  }: {
    operacao: string
    data: string
  }) => {
    parse(
      object({
        operacao: union([string(), number()]),
        data: string([isoDate('data inicial inválida')]),
      }),
      {
        operacao,
        data,
      }
    )
    const knex = db.knex
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
  produto.rpc = true

  const turno = async ({
    operacao,
    data,
  }: {
    operacao: string
    data: string
  }) => {
    parse(
      object({
        operacao: union([string(), number()]),
        data: string([isoDate('data inicial inválida')]),
      }),
      {
        operacao,
        data,
      }
    )
    const knex = db.knex
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
  turno.rpc = true

  return {
    ...orm.rpc,
    diario,
    mensal,
    modelo,
    produto,
    turno,
  }
}

export const ordemProducaoOperacaoController =
  ordemProducaoOperacaoControllerFactory(dbOftalmo, tOperacaoOrdemProducao)

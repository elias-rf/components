import { TDataSource } from '@/data/index.js'
import * as v from 'valibot'

/**
 * TRANSFERENCIA DIARIO
 * @param param0
 * @returns
 */
export const transferenciaDiario =
  (dataSource: TDataSource) =>
  async ({
    inicio,
    fim,
  }: {
    inicio: string
    fim: string
  }): Promise<
    {
      [dia: string]: any
      LITEFLEX?: number
      ENLITE?: number
      METILCELULOSE?: number
      'ANEL CAPSULAR'?: number
      'CORNEAL RING'?: number
    }[]
  > => {
    v.parse(v.string([v.isoDate('data inicial inválida')]), inicio)
    v.parse(v.string([v.isoDate('data final inválida')]), fim)

    const aux: {
      [dia: string]: {
        LITEFLEX?: number
        ENLITE?: number
        METILCELULOSE?: number
        'ANEL CAPSULAR'?: number
        'CORNEAL RING'?: number
      }
    } = {}
    const rsp: {
      [dia: string]: any
      LITEFLEX?: number
      ENLITE?: number
      METILCELULOSE?: number
      'ANEL CAPSULAR'?: number
      'CORNEAL RING'?: number
    }[] = []
    const qry = (await dataSource.plano.ds({
      fromRaw: [
        'NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)',
      ],
      selectRaw: [
        'CONVERT(CHAR(10),[MestreNota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade',
      ],
      orderBy: [['MestreNota.DtEmissao', 'desc']],
      groupBy: ['MestreNota.DtEmissao', 'CategPro.NmCategoria'],
      where: [
        ['MestreNota.DtEmissao', 'between', [inicio, fim]],
        ['MestreNota.CdFilial', 1],
        ['NatOpe.Nop', 5151],
        ['MestreNota.NotadeComplemento', 'N'],
        ['MestreNota.Tipo', '<>', 'C'],
      ],
    })) as {
      dia: string
      NmCategoria: string
      quantidade: number
    }[]

    for (const item of qry) {
      aux[item.dia] = {
        ...aux[item.dia],
        ...{ [item.NmCategoria]: item.quantidade },
      }
    }

    for (const [key, value] of Object.entries(aux)) {
      const item = { dia: key, ...(<any>value) }
      rsp.push(item)
    }
    return rsp
  }

import { TDataSource, dataSource } from '@/data/index.js'
import * as v from 'valibot'

/**
 * TRANSFERENCIA MODELO
 * @param param0
 * @returns
 */
export const transferenciaModelo =
  (dataSource: TDataSource) =>
  async ({ data }: { data: string }) => {
    v.parse(v.string([v.isoDate('data inválida')]), data)

    const qry = await dataSource.plano.ds({
      fromRaw: [
        'NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)',
      ],
      selectRaw: [
        'CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade',
      ],

      orderBy: [['CadPro.Descricao', 'asc']],
      groupBy: ['CadPro.Descricao'],
      where: [
        ['MestreNota.DtEmissao', data],
        ['MestreNota.CdFilial', 1],
        ['NatOpe.Nop', 5151],
        ['MestreNota.Tipo', '<>', 'C'],
        ['MestreNota.NotadeComplemento', 'N'],
      ],
    })
    return qry
  }

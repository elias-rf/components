import { UTCDateMini } from '@date-fns/utc'
import { format } from 'date-fns'
import * as v from 'valibot'

/**
 * VENDA DIARIO
 */
export const vendaDiario =
  (dataSource) =>
  async ({ inicio, fim, uf }) => {
    v.parse(v.string([v.isoDate('data inicial inválida')]), inicio)
    v.parse(v.string([v.isoDate('data final inválida')]), fim)
    v.parse(v.array(v.string('uf deve ser string')), uf)

    let qry = {
      fromRaw: [
        'MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF',
      ],
      select: ['NmCategoria', 'MestreNota.DtEmissao'],
      selectRaw: [
        "sum(itemNota.Quantidade * (case MestreNota.tipo when 'E' then ItemNota.VlLiquido * -1 else ItemNota.VlLiquido end)) as valor",
      ],
      sum: ['ItemNota.Quantidade as quantidade'],
      where: [
        ['MestreNota.FgEstatistica', 'S'],
        ['MestreNota.CdFilial', 2],
        ['CadPro.FgEstatistica', 'S'],
        ['CadVen.FgControle', 'S'],
        ['ItemNota.ImprimeComponentes', 'N'],
        ['ItemNota.Sequencia', '>', 0],
        ['MestreNota.Tipo', '<>', 'C'],
        ['MestreNota.cdcliente', '<>', 3158],
        ['MestreNota.DtEmissao', 'between', [inicio, fim]],
      ],
      whereRaw: [
        'ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadCli.CdCliente = MestreNota.CdCliente and CadPro.CdProduto = ItemNota.CdProduto and Cadcli.Cidade = cidadeserf.NmCidadeIBGE',
      ],
      groupBy: ['NmCategoria', 'MestreNota.DtEmissao'],
      orderBy: [
        ['NmCategoria', 'asc'],
        ['MestreNota.DtEmissao', 'desc'],
      ],
    }
    if (uf.length > 0) {
      qry.where?.push(['cidadeserf.uf', 'in', uf])
    }
    const result = await dataSource.plano.ds(qry)

    const response = result.map((item) => {
      item.DtEmissao = format(new UTCDateMini(item.DtEmissao), 'yyyy-MM-dd')
      return item
    })
    return response
  }

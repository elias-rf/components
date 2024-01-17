import { formatMoney } from '@/utils/format/format-money.js'
import { format, parse } from 'date-fns/fp'
import { flowRight } from 'lodash-es'

export type Record = {
  origem: string
  NmCategoria: string
  DtEmissao: string
  NumNota: string
  Serie: string
  Tipo: string
  CdProduto: string
  Quantidade: number
  VlTotal: number
  Descricao: string
  CdVendedor: string
  NmVendedor: string
  uf: string
}

function sortMesDesc(a: any, b: any) {
  if (a.mes < b.mes) return 1
  if (a.mes > b.mes) return -1
  return 0
}

function sortProdutoAsc(a: any, b: any) {
  if (a.produto < b.produto) return -1
  if (a.produto > b.produto) return 1
  return 0
}

export const mesSchema: any = [
  { name: 'mes', label: 'Mes' },
  { name: 'valor', label: 'Faturamento', fieldClass: 'text-right' },
]

export function mensal(data?: Record[]) {
  if (data === undefined) return []
  const rsp = data.reduce(
    (previous, current) => {
      const mes = flowRight([format('yyyy-MM'), parse('yyyy-MM-dd')])(
        current.DtEmissao
      )
      const sinal = current.Tipo === 'S' ? 1 : -1

      const valor = sinal * current.VlTotal + (previous[mes] ?? 0)
      previous[mes] = valor
      return previous
    },
    {} as { [mes: string]: number }
  )
  const resp = Object.keys(rsp).map((prop) => {
    return { mes: prop, valor: formatMoney(rsp[prop]) }
  })
  return resp.sort(sortMesDesc)
}

export const produtoSchema = [
  { field: 'produto', label: 'Produto', primaryKey: true },
  { field: 'valor', label: 'Faturamento', fieldClass: 'text-right' },
  { field: 'quantidade', label: 'Quantidade', fieldClass: 'text-right' },
  { field: 'valorMedio', label: 'Valor Médio', fieldClass: 'text-right' },
]

export function mensalProduto(mesCorrente: string[], data?: Record[]) {
  if (data === undefined) return []
  const rsp = data.reduce(
    (previous, current) => {
      const mes = flowRight([format('yyyy-MM'), parse('yyyy-MM-dd')])(
        current.DtEmissao
      ) // day(current.DtEmissao).format('YYYY-MM')
      if (mes === mesCorrente[0]) {
        const produto = current.NmCategoria
        if (!Object.hasOwn(previous, produto)) {
          previous[produto] = { valor: 0, quantidade: 0 }
        }
        const sinal = current.Tipo === 'S' ? 1 : -1
        const valor = sinal * current.VlTotal + (previous[produto].valor ?? 0)
        const quantidade =
          sinal * current.Quantidade + (previous[produto].quantidade ?? 0)
        previous[produto].valor = valor
        previous[produto].quantidade = quantidade
      }
      return previous
    },
    {} as { [produto: string]: { valor: number; quantidade: number } }
  )
  const resp = Object.keys(rsp).map((prop) => {
    return {
      produto: prop,
      valor: formatMoney(rsp[prop].valor),
      quantidade: rsp[prop].quantidade,
      valorMedio: formatMoney(rsp[prop].valor / rsp[prop].quantidade),
    }
  })
  return resp.sort(sortProdutoAsc)
}

export const vendedorSchema = [
  { field: 'vendedor', label: 'Vendedor', primaryKey: true },
  { field: 'valor', label: 'Faturamento', fieldClass: 'text-right' },
]

export function mensalVendedor(mesCorrente: string[], data?: Record[]) {
  if (data === undefined) return []
  const rsp = data.reduce(
    (previous, current) => {
      const mes = flowRight([format('yyyy-MM'), parse('yyyy-MM-dd')])(
        current.DtEmissao
      ) // day(current.DtEmissao).format('YYYY-MM')
      if (mes === mesCorrente[0]) {
        const vendedor = current.NmVendedor
        if (!Object.hasOwn(previous, vendedor)) {
          previous[vendedor] = { valor: 0 }
        }
        const sinal = current.Tipo === 'S' ? 1 : -1
        const valor = sinal * current.VlTotal + (previous[vendedor].valor ?? 0)
        previous[vendedor].valor = valor
      }
      return previous
    },
    {} as { [vendedor: string]: { valor: number } }
  )
  const resp = Object.keys(rsp).map((prop) => {
    return {
      vendedor: prop,
      valor: formatMoney(rsp[prop].valor),
    }
  })
  return resp.sort(sortProdutoAsc)
}

export function mensalVendedorProduto(
  mesCorrente: string[],
  vendedorCorrente: string[],
  data?: Record[]
) {
  if (data === undefined) return []
  const rsp = data.reduce(
    (previous, current) => {
      const mes = flowRight([format('yyyy-MM'), parse('yyyy-MM-dd')])(
        current.DtEmissao
      ) // day(current.DtEmissao).format('YYYY-MM')
      if (
        mes === mesCorrente[0] &&
        current.NmVendedor === vendedorCorrente[0]
      ) {
        const produto = current.NmCategoria
        if (!Object.hasOwn(previous, produto)) {
          previous[produto] = { valor: 0, quantidade: 0 }
        }
        const sinal = current.Tipo === 'S' ? 1 : -1
        const valor = sinal * current.VlTotal + (previous[produto].valor ?? 0)
        const quantidade =
          sinal * current.Quantidade + (previous[produto].quantidade ?? 0)
        previous[produto].valor = valor
        previous[produto].quantidade = quantidade
      }
      return previous
    },
    {} as { [produto: string]: { valor: number; quantidade: number } }
  )
  const resp = Object.keys(rsp).map((prop) => {
    return {
      produto: prop,
      valor: formatMoney(rsp[prop].valor),
      quantidade: rsp[prop].quantidade,
      valorMedio: formatMoney(rsp[prop].valor / rsp[prop].quantidade),
    }
  })
  return resp.sort(sortProdutoAsc)
}

export const ufSchema = [
  { field: 'uf', label: 'Estado', primaryKey: true },
  { field: 'valor', label: 'Faturamento', fieldClass: 'text-right' },
]

export function mensalVendedorUf(
  mesCorrente: string[],
  vendedorCorrente: string[],
  data?: Record[]
) {
  if (data === undefined) return []
  const rsp = data.reduce(
    (previous, current) => {
      const mes = flowRight([format('yyyy-MM'), parse('yyyy-MM-dd')])(
        current.DtEmissao
      ) // day(current.DtEmissao).format('YYYY-MM')
      if (
        mes === mesCorrente[0] &&
        current.NmVendedor === vendedorCorrente[0]
      ) {
        const uf = current.uf
        if (!Object.hasOwn(previous, uf)) {
          previous[uf] = { valor: 0 }
        }
        const sinal = current.Tipo === 'S' ? 1 : -1
        const valor = sinal * current.VlTotal + (previous[uf].valor ?? 0)
        previous[uf].valor = valor
      }
      return previous
    },
    {} as { [uf: string]: { valor: number } }
  )
  const resp = Object.keys(rsp).map((prop) => {
    return {
      uf: prop,
      valor: formatMoney(rsp[prop].valor),
    }
  })
  return resp.sort(sortProdutoAsc)
}

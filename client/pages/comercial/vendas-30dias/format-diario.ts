import { round } from '@/utils/number/round.js'
import { format, parse, subDays } from 'date-fns/fp'
import { flowRight } from 'lodash-es'

function getSum(lista: any[], produto: string, data: Date) {
  const dataInicial = flowRight([format('yyyy-MM-dd'), subDays(30)])(data)
  const dataFinal = format('yyyy-MM-dd')(data)
  const produtoArray = lista.filter((item: any) => {
    return (
      item.NmCategoria === produto &&
      item.DtEmissao >= dataInicial &&
      item.DtEmissao <= dataFinal
    )
  })

  const sum = produtoArray.reduce(
    (accumulator: { quantidade: number; valor: number }, currentValue: any) => {
      accumulator.quantidade = accumulator.quantidade + currentValue.quantidade
      accumulator.valor = accumulator.valor + currentValue.valor
      return accumulator
    },
    { quantidade: 0, valor: 0 }
  )
  return {
    dia: format('yyyy-MM-dd')(data),
    quantidade: sum.quantidade,
    fat: sum.valor,
    valor: round(sum.valor / sum.quantidade, 2), // valor médio
  }
}

type TFormatDiario = {
  dia: string
  quantidade: number
  fat: number
  valor: number
}

export type TFormatDiarios = {
  liteflex: TFormatDiario[]
  metil: TFormatDiario[]
  enlite: TFormatDiario[]
  hilite: TFormatDiario[]
  anel: TFormatDiario[]
  enliteLiteflex: TFormatDiario[]
}

export function formatDiario(origem: any[], fim: string): TFormatDiarios {
  const destino: any = {
    liteflex: [],
    metil: [],
    enlite: [],
    hilite: [],
    anel: [],
    enliteLiteflex: [],
  }

  for (let dia = 45; dia >= 0; dia--) {
    const diaFinal = flowRight([subDays(dia), parse(new Date(), 'yyyy-MM-dd')])(
      fim
    )
    destino.liteflex.push(getSum(origem, 'LITEFLEX', diaFinal))
    destino.metil.push(getSum(origem, 'METILCELULOSE', diaFinal))
    destino.enlite.push(getSum(origem, 'ENLITE', diaFinal))
    destino.hilite.push(getSum(origem, 'HILITE', diaFinal))
    destino.anel.push(getSum(origem, 'CORNEAL RING', diaFinal))
  }
  destino.enliteLiteflex = destino.liteflex.map((item: any, idx: number) => {
    return {
      dia: item.dia,
      quantidade: item.quantidade + destino.enlite[idx].quantidade,
      fat: item.fat + destino.enlite[idx].fat,
      valor: round(
        (item.fat + destino.enlite[idx].fat) /
          (item.quantidade + destino.enlite[idx].quantidade),
        2
      ), // valor médio
    }
  })

  return destino
}

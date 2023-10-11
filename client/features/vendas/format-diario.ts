import { day } from '@/utils/date/day'
import { round } from '@/utils/number/round'

function getSum(lista: any[], produto: string, data: day.Dayjs) {
  const dataInicial = data.add(-30, 'day').format('YYYY-MM-DD')
  const dataFinal = data.format('YYYY-MM-DD')
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
    dia: data.format('YYYY-MM-DD'),
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
  liteflex?: TFormatDiario[]
  metil?: TFormatDiario[]
  enlite?: TFormatDiario[]
  hilite?: TFormatDiario[]
  anel?: TFormatDiario[]
  enliteLiteflex?: TFormatDiario[]
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
    const diaFinal = day(fim).subtract(dia, 'day')
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

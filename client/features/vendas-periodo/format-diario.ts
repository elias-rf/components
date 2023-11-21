import { round } from '@/utils/number/round.js'

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

export function formatDiario(
  origem: {
    NmCategoria: string
    DtEmissao: string
    valor: number
    quantidade: number
  }[]
): TFormatDiarios {
  let destino: any = {
    liteflex: { quantidade: 0, valor: 0, valorMedio: 0 },
    metil: { quantidade: 0, valor: 0, valorMedio: 0 },
    enlite: { quantidade: 0, valor: 0, valorMedio: 0 },
    hilite: { quantidade: 0, valor: 0, valorMedio: 0 },
    anel: { quantidade: 0, valor: 0, valorMedio: 0 },
  }
  destino = origem.reduce((acc, item) => {
    acc[item.NmCategoria].valor += item.valor
    acc[item.NmCategoria].quantidade += item.quantidade
  }, destino)

  for (const prod in destino) {
    destino[prod].valorMedio = round(
      destino[prod].valor / destino[prod].quantidade,
      2
    )
  }

  return destino
}

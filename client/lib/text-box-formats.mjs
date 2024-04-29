import { formatMoney } from '../utils/format/format-money.mjs'

export const moeda = {
  format: (vlr) => {
    return formatMoney(vlr)
  },
  parse: (vlr) => {
    const num = vlr.replaceAll(/[^0-9,-]/g, '')
    const intl = num.replaceAll(',', '.')
    const rsp = parseFloat(intl)
    if (isNaN(rsp)) {
      return 0.0
    }
    return rsp
  },
}

export const moedaReal = {
  format: (vlr) => {
    return 'R$ ' + formatMoney(vlr)
  },
  parse: (vlr) => {
    const num = vlr.replaceAll(/[^0-9,-]/g, '')
    const intl = num.replaceAll(',', '.')
    const rsp = parseFloat(intl)
    if (isNaN(rsp)) {
      return 0.0
    }
    return rsp
  },
}

export const inteiro = {
  format: (vlr) => {
    return formatMoney(vlr, 0)
  },
  parse: (vlr) => {
    if (typeof vlr === 'string') {
      const num = vlr.replaceAll(/[^0-9,-]/g, '')
      const intl = num.replaceAll(',', '.')
      const rsp = parseInt(intl)
      if (isNaN(rsp)) {
        return 0
      }
      return rsp
    }
    return vlr
  },
}

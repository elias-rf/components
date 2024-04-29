import {
  TAgendaTelefoneDtoFields,
  TAgendaTelefoneDtoKeys,
} from '../../../data/oftalmo/agenda-telefone/agenda-telefone.type.mjs'

export const del = (dataSource) => async (args) => {
  return dataSource.del(args)
}

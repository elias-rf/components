import {
  TAgendaTelefoneDtoFields,
  TAgendaTelefoneDtoKeys,
} from '../../../data/oftalmo/agenda-telefone/agenda-telefone.type.mjs'

export const read = (dataSource) => async (args) => {
  return dataSource.read(args)
}

export const create = (dataSource) => async (args) => {
  return dataSource.oftalmo.agendaTelefone.create(args)
}

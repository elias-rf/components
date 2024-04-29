export const count = (dataSource) => async (args) => {
  return dataSource.oftalmo.agendaTelefone.count(args)
}

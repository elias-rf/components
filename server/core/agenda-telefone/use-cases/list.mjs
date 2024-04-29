export const list = (dataSource) => async (args) => {
  return dataSource.oftalmo.agendaTelefone.list(args)
}

export const read = (dataSource) => async (args) => {
  return dataSource.oftalmo.agendaTelefone.read(args)
}

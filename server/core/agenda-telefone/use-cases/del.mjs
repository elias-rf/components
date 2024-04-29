export const del = (dataSource) => async (args) => {
  return dataSource.oftalmo.agendaTelefone.del(args)
}

export const del = (dataSource) => async (args) => {
  return dataSource.oftalmo.etiquetaInterna.del(args)
}

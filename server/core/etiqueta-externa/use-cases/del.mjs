export const del = (dataSource) => async (args) => {
  return dataSource.oftalmo.etiquetaExterna.del(args)
}

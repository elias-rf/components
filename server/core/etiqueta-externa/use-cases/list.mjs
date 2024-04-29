export const list = (dataSource) => async (args) => {
  return dataSource.oftalmo.etiquetaExterna.list(args)
}

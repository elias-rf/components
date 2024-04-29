export const create = (dataSource) => async (args) => {
  return dataSource.oftalmo.etiquetaExterna.create(args)
}

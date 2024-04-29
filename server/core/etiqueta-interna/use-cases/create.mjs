export const create = (dataSource) => async (args) => {
  return dataSource.oftalmo.etiquetaInterna.create(args)
}

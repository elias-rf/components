export const update = (dataSource) => async (args) => {
  return dataSource.oftalmo.etiquetaInterna.update(args)
}

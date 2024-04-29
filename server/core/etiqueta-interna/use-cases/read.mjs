export const read = (dataSource) => async (args) => {
  return dataSource.oftalmo.etiquetaInterna.read(args)
}

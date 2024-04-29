export const read = (dataSource) => async (args) => {
  return dataSource.oftalmo.etiquetaExterna.read(args)
}

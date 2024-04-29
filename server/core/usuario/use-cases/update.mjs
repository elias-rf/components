export const update = (dataSource) => async (args) => {
  delete args.data?.id
  return dataSource.update(args)
}

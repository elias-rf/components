export const create = (dataSource) => async (args) => {
  delete args.data?.id
  return dataSource.create(args)
}

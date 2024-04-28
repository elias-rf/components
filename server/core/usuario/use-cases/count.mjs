export const count = (dataSource) => async (args) => {
  return dataSource.count(args);
};

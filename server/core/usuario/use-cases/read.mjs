export const read = (dataSource) => async (args) => {
  return dataSource.read(args);
};

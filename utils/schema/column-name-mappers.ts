export function columnNameMappers(colToProp: Record<string, string>) {
  const propToCol = Object.keys(colToProp).reduce((propToCol, column) => {
    propToCol[colToProp[column]] = column;
    return propToCol;
  }, {});

  return {
    format: (columns: Record<string, any>) => {
      const response = {};
      for (const col in columns) response[colToProp[col]] = columns[col];
      return response;
    },
    parse: (props: Record<string, any>) => {
      const response = {};
      for (const col in props) response[propToCol[col]] = props[col];
      return response;
    },
  };
}

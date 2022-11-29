export function knexMockHistory({ history }: any) {
  const response: any = {};
  for (const prop in history) {
    if (prop !== "all" && history[prop].length > 0) {
      response[prop] = history[prop].map(({ bindings, sql }: any) => ({
        bindings,
        sql,
      }));
    }
  }
  return response;
}

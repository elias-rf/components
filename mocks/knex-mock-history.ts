export function knexMockHistory(tracker: any, show = ["bindings", "sql"]) {
  const history = tracker.history;
  const all = history.all;

  return all.map(({ bindings, sql }: any) => {
    const response: any = {};
    if (show.includes("bindings")) {
      response.bindings = bindings;
    }
    if (show.includes("sql")) {
      response.sql = sql;
    }
    return response;
  });
}

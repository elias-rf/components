export function knexMockHistory(tracker, show = ["bindings", "sql"]) {
  const history = tracker.history;
  const all = history.all;

  return all.map(({ bindings, sql }) => {
    const response = {};
    if (show.includes("bindings")) {
      response.bindings = bindings;
    }
    if (show.includes("sql")) {
      response.sql = sql;
    }
    return response;
  });
}

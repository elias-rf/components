export function argsFromDto(data, fields) {
  const response = {};
  if (data?.select) {
    response.select = selectArgs(data.select, fields);
  }
  if (data?.groupBy) {
    response.groupBy = selectArgs(data.groupBy, fields);
  }
  if (data?.returning) {
    response.returning = selectArgs(data.returning, fields);
  }
  if (data?.where) {
    response.where = whereArgs(data.where, fields);
  }
  if (data?.orderBy) {
    response.orderBy = orderByArgs(data.orderBy, fields);
  }
  if (data?.count) {
    response.count = data.count;
  }
  if (data?.limit) {
    response.limit = data.limit;
  }
  if (data?.sum) {
    response.sum = data.sum;
  }
  if (data?.min) {
    response.min = data.min;
  }
  if (data?.max) {
    response.max = data.max;
  }
  if (data?.include) {
    response.include = data.include;
  }
  if (data?.increment) {
    response.increment = incrementArgs(data.increment, fields);
  }
  if (data?.data) {
    response.data = dataArgs(data.data, fields);
  }
  return response;
}

function incrementArgs(data, fields) {
  if (!data) {
    return data;
  }
  const response = [...data];
  response[0] = fields[data[0]];
  return response;
}

function selectArgs(data, fields) {
  return data?.map((item) => fields[item]);
}

function whereArgs(data, fields) {
  return data?.map((item) => {
    const response = [...item];
    response[0] = fields[response[0]];
    return response;
  });
}
function orderByArgs(data, fields) {
  return data?.map((item) => {
    const response = [...item];
    response[0] = fields[response[0]];
    return response;
  });
}

function dataArgs(data = {}, fields) {
  return Object.keys(data).reduce((acc, key) => {
    acc[fields[key]] = data[key];
    return acc;
  }, {});
}

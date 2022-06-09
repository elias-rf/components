export default function knexMock(response: any, error?: any) {
  let called = 0;
  let calledStack: any[] = [];
  let mockStack: any[] = [];

  const k = {
    select: (...args: any) => {
      mockStack.push({ select: args });
      return k;
    },
    sum: (...args: any) => {
      mockStack.push({ sum: args });
      return k;
    },
    limit: (...args: any) => {
      mockStack.push({ limit: args });
      return k;
    },
    distinct: (...args: any) => {
      mockStack.push({ distinct: args });
      return k;
    },
    join: (...args: any) => {
      mockStack.push({ join: args });
      return k;
    },
    returning: (...args: any) => {
      mockStack.push({ returning: args });
      return k;
    },
    raw: (...args: any) => {
      mockStack.push({ raw: args });
      return k;
    },
    groupBy: (...args: any) => {
      mockStack.push({ groupBy: args });
      return k;
    },
    groupByRaw: (...args: any) => {
      mockStack.push({ groupByRaw: args });
      return k;
    },
    orderByRaw: (...args: any) => {
      mockStack.push({ orderByRaw: args });
      return k;
    },
    orderBy: (...args: any) => {
      mockStack.push({ orderBy: args });
      return k;
    },
    from: (...args: any) => {
      mockStack.push({ from: args });
      return k;
    },
    havingRaw: (...args: any) => {
      mockStack.push({ havingRaw: args });
      return k;
    },
    where: (...args: any) => {
      if (typeof args[0] === "function") {
        mockStack.push({ where: ["Function"] });
      } else {
        mockStack.push({ where: args });
      }
      return k;
    },
    whereRaw: (...args: any) => {
      mockStack.push({ whereRaw: args });
      return k;
    },
    whereNull: (...args: any) => {
      mockStack.push({ whereNull: args });
      return k;
    },
    whereBetween: (...args: any) => {
      mockStack.push({ whereBetween: args });
      return k;
    },
    whereIn: (...args: any) => {
      mockStack.push({ whereIn: args });
      return k;
    },
    andWhere: (...args: any) => {
      mockStack.push({ andWhere: args });
      return k;
    },
    update: (...args: any) => {
      mockStack.push({ update: args });
      return k;
    },
    insert: (...args: any) => {
      mockStack.push({ insert: args });
      return k;
    },
    del: (...args: any) => {
      mockStack.push({ del: args });
      return k;
    },
    then: (resolve: (resp: any) => any, reject: (resp: any) => any) => {
      calledStack.push(mockStack);
      const tmp = [...mockStack];
      mockStack = [];
      called++;
      if (Array.isArray(response)) {
        if (resolve) {
          return Promise.resolve(resolve(response[called - 1]));
        } else {
          reject(error);
        }
      } else {
        return resolve(response(tmp));
      }
    },
  };

  const knex = (table?: any) => {
    if (table) mockStack.push({ knex: table });
    return k;
  };

  knex.raw = (args: any) => {
    mockStack.push({ raw: args });
    return k;
  };
  knex.mock = {
    stack: calledStack,
    clear: () => {
      calledStack = [];
      mockStack = [];
    },
  };

  return knex;
}

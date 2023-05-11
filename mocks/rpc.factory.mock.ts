export function rpcFactoryMock(table: string) {
  return {
    query: {
      async schema() {
        return [{ table }];
      },
      async clear() {
        return { table };
      },
      async list(args: any) {
        return [{ table, args }];
      },
      async read(args: any) {
        return { table, args };
      },
    },
    mutation: {
      async create(args: any) {
        return { table, args };
      },
      async update(args: any) {
        return { table, args };
      },
      async del(args: any) {
        return [{ table, args }];
      },
    },
  };
}

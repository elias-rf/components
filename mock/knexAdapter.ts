function getCmd(cmd: string, stack: any[]) {
  return stack.filter(
    (item: { [idx: string]: any }) => Object.keys(item)[0] === cmd
  );
}

export default function knexAdapter(dao: any) {
  return (stack: any) => {
    let rsp = dao;

    getCmd("knex", stack).forEach((item: any) => {
      rsp = rsp.from(item.knex);
    });

    getCmd("where", stack).forEach((item: any) => {
      item.where.forEach((it: any) => (rsp = rsp.where(it)));
    });

    getCmd("orderBy", stack).forEach((item: any) => {
      item.orderBy.forEach((it: any) => (rsp = rsp.order(it)));
    });

    getCmd("select", stack).forEach((item: any) => {
      rsp = rsp.select(item.select);
    });

    const response = rsp.get();

    rsp.reset();
    return response;
  };
}

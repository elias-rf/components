import React from "react";
import { OrderBy, Schema, Where } from "../../..";
import useQueryString from "../../lib/hooks/use-query-string";
import isEmpty from "../../utils/is/is-empty";
import Table, { Search } from "./table";

interface DatatableProps {
  list: (
    where?: Where[],
    orderBy?: OrderBy[],
    noCache?: boolean
  ) => Promise<any>;
  schema: (target: string) => Promise<Schema>;
  searchable: boolean;
}

export default function Datatable({
  list,
  schema,
  searchable = true,
}: DatatableProps) {
  const [where, setWhere] = useQueryString<Where[]>("where");
  const [orderBy, setOrderBy] = useQueryString<OrderBy[]>("orderBy");
  const [refresh] = useQueryString<number>("refresh");
  const [selected, setSelected] = useQueryString<string[]>("selected");
  const [data, setData] = React.useState([]);
  const [dataSchema, setDataSchema] = React.useState<any>({});

  // SCHEMA
  React.useEffect(() => {
    async function get() {
      if (isEmpty(dataSchema)) {
        const rsp = await schema("table");
        setDataSchema(rsp);
      }
    }
    get();
  }, []);

  // READ LIST
  React.useEffect(() => {
    async function get() {
      const rsp = await list(where, orderBy);
      setData(rsp);
    }
    if (!isEmpty(list)) {
      get();
    }
  }, [where, orderBy]);

  // REFRESH
  React.useEffect(() => {
    async function get() {
      const rsp = await list(where, orderBy, true);
      setData(rsp);
    }
    if (!isEmpty(list)) {
      get();
    }
  }, [refresh]);

  function handleOrderBy(orderBy: OrderBy[] = []) {
    setOrderBy(orderBy);
  }
  function handleSelected(selected: any) {
    setSelected(selected);
  }
  function handleWhere(where: Where[] = []) {
    setWhere(where);
  }

  return (
    <div>
      {searchable ? (
        <Search
          where={where}
          schema={dataSchema}
          onWhere={setWhere}
        />
      ) : null}
      <Table
        data={data}
        schema={dataSchema}
        onOrderBy={handleOrderBy}
        orderBy={orderBy}
        onSelect={handleSelected}
        selected={selected}
        onWhere={searchable ? undefined : handleWhere}
        where={where}
      />
    </div>
  );
}

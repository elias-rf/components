import { OrderBy, Schema, Where } from "@vt/types";
import { isEmpty } from "@vt/utils";
import React from "react";
import { Search } from "./search";
import { Table } from "./table";
// import useQueryString from "../../lib/hooks/use-query-string";

interface DatatableProps {
  list: (
    where?: Where[],
    orderBy?: OrderBy[],
    noCache?: boolean
  ) => Promise<any>;
  schema: Schema;
  searchable: boolean;
}

export function Datatable({ list, schema, searchable = true }: DatatableProps) {
  const [where, setWhere] = React.useState("where");
  const [orderBy, setOrderBy] = React.useState("orderBy");
  const [refresh] = React.useState("refresh");
  const [selected, setSelected] = React.useState("selected");

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
        <Search where={where} schema={dataSchema} onWhere={setWhere} />
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

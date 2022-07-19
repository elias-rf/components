import React from "react";
import { OrderBy, Schema, Where } from "../..";
import Table, { Search } from "../../client/src/features/ui/table";
import { TableAction, tableActionTypes } from "./table";

export default {
  title: "Table/Table",
};

let data: { [index: string]: any }[] = [
  { id: "1", nome: "fulano", compra: 1.5 },
  { id: "2", nome: "beltrano", compra: 2.4 },
  { id: "3", nome: "cicrano", compra: 3.14 },
];

const schema: Schema = {
  pk: ["id"],
  fields: [
    {
      label: "ID",
      field: "id",
      type: "ID",
      labelClass: "text-left",
      fieldClass: "text-left",
    },
    {
      label: "Nome",
      field: "nome",
      labelClass: "text-center",
      fieldClass: "text-center",
      sortable: false,
    },
    {
      label: "Valor de compra",
      field: "compra",
      labelClass: "text-right",
      fieldClass: "text-right",
    },
  ],
};

export const Simples = () => {
  return (
    <div>
      <Table data={data} schema={schema} />
    </div>
  );
};

export const Procura = () => {
  const [where, setWhere] = React.useState<Where[]>([["id", "<", "4"]]);

  const options = {
    selectedClass: "bg-gray-300",
  };

  function handleDispatch(action: any) {
    console.log(action);
  }

  return (
    <div>
      <Search where={where} schema={schema} dispatch={handleDispatch} />
      <Table
        data={data}
        where={where}
        schema={schema}
        dispatch={handleDispatch}
      />
    </div>
  );
};

export const Filtrado = () => {
  const [selected, setSelected] = React.useState(["2"]);
  const [where, setWhere] = React.useState<Where[]>([["id", "<", "4"]]);
  const [order, setOrder] = React.useState<OrderBy[]>([["id", "desc"]]);

  function handleTableDispatch(action: TableAction) {
    switch (action.type) {
      case tableActionTypes.select:
        setSelected(action.payload as string[]);
        break;

      default:
        break;
    }
    console.log(
      `🚀 ~ file: table.stories.tsx ~ line 111 ~ handleTableDispatch ~ action`,
      action
    );
  }

  return (
    <div>
      <Table
        data={data}
        schema={schema}
        selected={selected}
        orderBy={order}
        where={where}
        dispatch={handleTableDispatch}
      />
    </div>
  );
};

export const Tree = () => {
  const [selected, setSelected] = React.useState(["1"]);
  const [order, setOrder] = React.useState<OrderBy[]>([["id", "desc"]]);

  function handleTableDispatch(action: TableAction) {
    switch (action.type) {
      case tableActionTypes.select:
        setSelected(action.payload as string[]);
        break;
      case tableActionTypes.order:
        setOrder(action.payload as OrderBy[]);
        break;

      default:
        console.log(
          `🚀 ~ file: table.stories.tsx ~ line 111 ~ handleTableDispatch ~ action`,
          action
        );
        break;
    }
  }

  return (
    <div>
      <Table
        data={data}
        schema={schema}
        selected={selected}
        orderBy={order}
        dispatch={handleTableDispatch}
      >
        <Table data={data} schema={schema} />
      </Table>
    </div>
  );
};

export const Ordenacao = () => {
  const [selected, setSelected] = React.useState(["1"]);
  const [dt, setDt] = React.useState(data);
  const [order, setOrder] = React.useState<OrderBy[]>([["id", "desc"]]);

  React.useEffect(() => {
    let aux = [...dt];
    const field = order[0][0];
    const ordem = order[0][1];
    if (ordem === "asc") {
      aux.sort((a, b) => a[field] - b[field]);
    } else {
      aux.sort((a, b) => b[field] - a[field]);
    }
    setDt(aux);
  }, [order]);

  React.useEffect(() => {
    console.log("setSelected", selected);
  }, [selected]);

  function handleTableDispatch(action: any) {
    console.log(
      `🚀 ~ file: table.stories.tsx ~ line 111 ~ handleTableDispatch ~ action`,
      action
    );
  }

  return (
    <div>
      {JSON.stringify(order)}
      <Table
        data={dt}
        schema={schema}
        selected={selected}
        orderBy={order}
        dispatch={handleTableDispatch}
      />
    </div>
  );
};

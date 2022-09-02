import { CustomEvent, Order, Schema, Where } from "@er/types";
import React from "react";
import { Search } from "./search";
import { Table } from "./table";

export default {
  title: "Table/Table",
};

const data: { [index: string]: any }[] = [
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
      <Table
        name={"table1"}
        data={data}
        schema={schema}
      />
    </div>
  );
};

export const Procura = () => {
  const [where] = React.useState<Where[]>([["id", "<", "4"]]);

  function handleDispatch(action: any) {
    console.log(action);
  }

  return (
    <div>
      <Search
        where={where}
        schema={schema}
        dispatch={handleDispatch}
      />
      <Table
        name={"table1"}
        data={data}
        where={where}
        schema={schema}
        onOrder={handleDispatch}
        onSelect={handleDispatch}
        onWhere={handleDispatch}
      />
    </div>
  );
};

export const Filtrado = () => {
  const [selected, setSelected] = React.useState(["2"]);
  const [where, setWhere] = React.useState<Where[]>([["id", "<", "4"]]);
  const [order, setOrder] = React.useState<Order[]>([["id", "desc"]]);

  function handleWhere(event: CustomEvent) {
    setWhere(event.value);
  }
  function handleSelect(event: CustomEvent) {
    setSelected(event.value);
  }

  function handleOrder(event: CustomEvent) {
    setOrder(event.value);
  }

  return (
    <div>
      <Table
        name={"table1"}
        data={data}
        schema={schema}
        selected={selected}
        order={order}
        where={where}
        onOrder={handleOrder}
        onSelect={handleSelect}
        onWhere={handleWhere}
      />
      <div>Order: {JSON.stringify(order)}</div>
      <div>Where: {JSON.stringify(where)}</div>
      <div>Selected: {JSON.stringify(selected)}</div>
    </div>
  );
};

export const Tree = () => {
  const [selected, setSelected] = React.useState(["1"]);
  const [order, setOrder] = React.useState<Order[]>([["id", "desc"]]);

  function handleTableDispatch(action: CustomEvent) {
    switch (action.type) {
      case tableActionTypes.select:
        setSelected(action.payload as string[]);
        break;
      case tableActionTypes.order:
        setOrder(action.payload as Order[]);
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
        name={"table1"}
        data={data}
        schema={schema}
        selected={selected}
        order={order}
        onOrder={handleTableDispatch}
        onSelect={handleTableDispatch}
        onWhere={handleTableDispatch}
      >
        <Table
          name={"table2"}
          data={data}
          schema={schema}
        />
      </Table>
    </div>
  );
};

export const Ordenacao = () => {
  const [selected] = React.useState(["1"]);
  const [dt, setDt] = React.useState(data);
  const [order] = React.useState<Order[]>([["id", "desc"]]);

  React.useEffect(() => {
    const aux = [...dt];
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

  function handleTableDispatch(action: CustomEvent) {
    console.log(
      `🚀 ~ file: table.stories.tsx ~ line 111 ~ handleTableDispatch ~ action`,
      action
    );
  }

  return (
    <div>
      {JSON.stringify(order)}
      <Table
        name={"table1"}
        data={dt}
        schema={schema}
        selected={selected}
        order={order}
        onOrder={handleTableDispatch}
        onSelect={handleTableDispatch}
        onWhere={handleTableDispatch}
      />
    </div>
  );
};

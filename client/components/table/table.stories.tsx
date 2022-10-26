import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { IEvent, Order, Schema, Where } from "../../../types";
import { Search } from "./search";
import { Table } from "./table";

export default {
  title: "Components/Table/Table",
  component: Table,
  argTypes: {
    onOrder: { action: "onClick" },
    showOrderBy: { monitor: "orderBy" },
    showSelected: { monitor: "selected" },
    showWhere: { monitor: "where" },
  },
} as ComponentMeta<typeof Table>;

const data: { [index: string]: any }[] = [
  { id: "1", nome: "fulano", compra: 1.5 },
  { id: "2", nome: "beltrano", compra: 2.4 },
  { id: "3", nome: "cicrano", compra: 3.14 },
];

const schema: Schema = [
  {
    label: "ID",
    field: "id",
    name: "id",
    type: "string",
    labelClass: "text-left",
    fieldClass: "text-left",
    primaryKey: true,
  },
  {
    label: "Nome",
    field: "nome",
    name: "nome",
    labelClass: "text-center",
    fieldClass: "text-center",
    sortable: false,
  },
  {
    label: "Valor de compra",
    name: "compra",
    field: "compra",
    labelClass: "text-right",
    fieldClass: "text-right",
  },
];

/** TABELA SIMPLES */
export const Simples: ComponentStory<typeof Table> = () => {
  return (
    <div>
      <Table data={data} schema={schema} />
    </div>
  );
};

/** TABELA COM PROCURA */
export const Procura: ComponentStory<typeof Table> = (props) => {
  const [selected, setSelected] = React.useState(["2"]);
  const [where, setWhere] = React.useState<Where[]>([["id", "=", "4"]]);
  const [orderBy, setOrderBy] = React.useState<Order[]>([["id", "desc"]]);

  function handleWhere(event: IEvent) {
    console.log(
      `🚀 ~ file: table.stories.tsx ~ line 67 ~ handleWhere ~ event`,
      event
    );
    setWhere(event.value);
    props.onWhere(event.value);
    props.showWhere(event.value);
  }
  function handleSelect(event: IEvent) {
    setSelected(event.value);
    props.showSelected(event.value);
  }

  function handleOrder(event: IEvent) {
    setOrderBy(event.value);
    props.showOrderBy(event.value);
  }

  return (
    <div>
      {JSON.stringify(where)}
      <Search where={where} schema={schema} onWhere={handleWhere} />
      <Table
        name={"table1"}
        data={data}
        schema={schema}
        selected={selected}
        orderBy={orderBy}
        where={where}
        onOrder={handleOrder}
        onSelect={handleSelect}
        onWhere={handleWhere}
      />
    </div>
  );
};

/** TABELA COM FILTRO */
export const Filtrado: ComponentStory<typeof Table> = (props) => {
  const [selected, setSelected] = React.useState(["2"]);
  const [where, setWhere] = React.useState<Where[]>([["id", "=", "4"]]);
  const [orderBy, setOrderBy] = React.useState<Order[]>([["id", "desc"]]);

  function handleWhere(event: IEvent) {
    setWhere(event.value);
    props.showWhere(event.value);
  }
  function handleSelect(event: IEvent) {
    setSelected(event.value);
    props.showSelected(event.value);
  }

  function handleOrder(event: IEvent) {
    setOrderBy(event.value);
    props.showOrderBy(event.value);
  }

  return (
    <div>
      <Table
        name={"table1"}
        data={data}
        schema={schema}
        selected={selected}
        orderBy={orderBy}
        where={where}
        onOrder={handleOrder}
        onSelect={handleSelect}
        onWhere={handleWhere}
      />
    </div>
  );
};

/** TABELA COM TREE */
export const Tree: ComponentStory<typeof Table> = () => {
  const [selected, setSelected] = React.useState(["2"]);
  const [where, setWhere] = React.useState<Where[]>([["id", "=", "4"]]);
  const [orderBy, setOrderBy] = React.useState<Order[]>([["id", "desc"]]);

  function handleWhere(event: IEvent) {
    setWhere(event.value);
    props.showWhere(event.value);
  }
  function handleSelect(event: IEvent) {
    setSelected(event.value);
    props.showSelected(event.value);
  }

  function handleOrder(event: IEvent) {
    setOrderBy(event.value);
    props.showOrderBy(event.value);
  }

  return (
    <div>
      <Table
        name={"table1"}
        data={data}
        schema={schema}
        selected={selected}
        orderBy={orderBy}
        onOrder={handleOrder}
        onSelect={handleSelect}
        onWhere={handleWhere}
      >
        <Table name={"table2"} data={data} schema={schema} />
      </Table>
    </div>
  );
};

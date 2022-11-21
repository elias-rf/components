import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TEvent, TFieldClient, TOrder, TWhere } from "../../../types";
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

const schema: TFieldClient[] = [
  {
    label: "ID",
    name: "id",
    type: "string",
    labelClass: "text-left",
    fieldClass: "text-left",
    primaryKey: true,
  },
  {
    label: "Nome",
    name: "nome",
    labelClass: "text-center",
    fieldClass: "text-center",
    sortable: false,
  },
  {
    label: "Valor de compra",
    name: "compra",
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
export const Procura: ComponentStory<typeof Table> = () => {
  const [selected, setSelected] = React.useState(["2"]);
  const [where, setWhere] = React.useState<TWhere[]>([["id", "=", "4"]]);
  const [orderBy, setOrderBy] = React.useState<TOrder[]>([["id", "desc"]]);

  function handleWhere(event: TEvent) {
    setWhere(event.value);
    action("where")(event.value);
  }
  function handleSelect(event: TEvent) {
    setSelected(event.value);
    action("select")(event.value);
  }

  function handleOrder(event: TEvent) {
    setOrderBy(event.value);
    action("order")(event.value);
  }

  return (
    <div>
      <Search where={where} schema={schema} onWhereEvent={handleWhere} />
      <Table
        name={"table1"}
        data={data}
        schema={schema}
        selected={selected}
        order={orderBy}
        where={where}
        onOrderEvent={handleOrder}
        onSelectEvent={handleSelect}
        onWhereEvent={handleWhere}
      />
    </div>
  );
};

/** TABELA COM FILTRO */
export const Filtrado: ComponentStory<typeof Table> = () => {
  const [selected, setSelected] = React.useState(["2"]);
  const [where, setWhere] = React.useState<TWhere[]>([["id", "=", "4"]]);
  const [orderBy, setOrderBy] = React.useState<TOrder[]>([["id", "desc"]]);

  function handleWhere(event: TEvent) {
    setWhere(event.value);
    action("where")(event.value);
  }
  function handleSelect(event: TEvent) {
    setSelected(event.value);
    action("select")(event.value);
  }

  function handleOrder(event: TEvent) {
    setOrderBy(event.value);
    action("order")(event.value);
  }

  return (
    <div>
      <Table
        name={"table1"}
        data={data}
        schema={schema}
        selected={selected}
        order={orderBy}
        where={where}
        onOrderEvent={handleOrder}
        onSelectEvent={handleSelect}
        onWhereEvent={handleWhere}
      />
    </div>
  );
};

/** TABELA COM TREE */
export const Tree: ComponentStory<typeof Table> = (props: any) => {
  const [selected, setSelected] = React.useState(["2"]);
  const [_where, setWhere] = React.useState<TWhere[]>([["id", "=", "4"]]);
  const [orderBy, setOrderBy] = React.useState<TOrder[]>([["id", "desc"]]);

  function handleWhere(event: TEvent) {
    setWhere(event.value);
    props.showWhere(event.value);
  }
  function handleSelect(event: TEvent) {
    setSelected(event.value);
    props.showSelected(event.value);
  }

  function handleOrder(event: TEvent) {
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
        order={orderBy}
        onOrderEvent={handleOrder}
        onSelectEvent={handleSelect}
        onWhereEvent={handleWhere}
      >
        <Table name={"table2"} data={data} schema={schema} />
      </Table>
    </div>
  );
};

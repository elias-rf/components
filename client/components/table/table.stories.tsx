import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TOrder, TWhere } from "../../../types";
import { TFieldDef } from "../../../types/model";
import delIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import newIcon from "../../assets/icons/new.svg";
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

const schema: TFieldDef[] = [
  {
    label: "ID",
    name: "id",
    typeField: "string",
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
      <Table
        data={data}
        schema={schema}
      />
    </div>
  );
};

/** TABELA COM PROCURA */
export const Procura: ComponentStory<typeof Table> = () => {
  const [selected, setSelected] = React.useState(["2"]);
  const [where, setWhere] = React.useState<TWhere[]>([["id", "=", "4"]]);
  const [orderBy, setOrderBy] = React.useState<TOrder[]>([["id", "desc"]]);

  function handleWhere(event: any) {
    setWhere(event.currentTarget.value);
    action("where")(event.currentTarget.value);
  }
  function handleSelect(event: any) {
    setSelected(event.currentTarget.value);
    action("select")(event.currentTarget.value);
  }

  function handleOrder(event: any) {
    setOrderBy(event.currentTarget.value);
    action("order")(event.currentTarget.value);
  }

  return (
    <div>
      <Search
        where={where}
        schema={schema}
        onWhere={handleWhere}
      />
      <Table
        name={"table1"}
        data={data}
        schema={schema}
        selected={selected}
        order={orderBy}
        where={where}
        onOrder={handleOrder}
        onSelect={handleSelect}
        onWhere={handleWhere}
      />
    </div>
  );
};

/** TABELA COM FILTRO */
export const Filtrado: ComponentStory<typeof Table> = () => {
  const [selected, setSelected] = React.useState(["2"]);
  const [where, setWhere] = React.useState<TWhere[]>([["id", "=", "4"]]);
  const [orderBy, setOrderBy] = React.useState<TOrder[]>([["id", "desc"]]);

  function handleWhere(event: any) {
    setWhere(event.currentTarget.value);
    action("where")(event.currentTarget.value);
  }
  function handleSelect(event: any) {
    setSelected(event.currentTarget.value);
    action("select")(event.currentTarget.value);
  }

  function handleOrder(event: any) {
    setOrderBy(event.currentTarget.value);
    action("order")(event.currentTarget.value);
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
        onOrder={handleOrder}
        onSelect={handleSelect}
        onWhere={handleWhere}
      />
    </div>
  );
};

/** TABELA COM TREE */
export const Tree: ComponentStory<typeof Table> = (props: any) => {
  const [selected, setSelected] = React.useState(["2"]);
  const [_where, setWhere] = React.useState<TWhere[]>([["id", "=", "4"]]);
  const [orderBy, setOrderBy] = React.useState<TOrder[]>([["id", "desc"]]);

  function handleWhere(event: any) {
    setWhere(event.currentTarget.value);
    props.showWhere(event.currentTarget.value);
  }
  function handleSelect(event: any) {
    setSelected(event.currentTarget.value);
    props.showSelected(event.currentTarget.value);
  }

  function handleOrder(event: any) {
    setOrderBy(event.currentTarget.value);
    props.showOrderBy(event.currentTarget.value);
  }

  return (
    <div>
      <Table
        name={"table1"}
        data={data}
        schema={schema}
        selected={selected}
        order={orderBy}
        onOrder={handleOrder}
        onSelect={handleSelect}
        onWhere={handleWhere}
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

/** TABELA COM TREE Filter*/
export const TreeFilter: ComponentStory<typeof Table> = () => {
  const [selected, setSelected] = React.useState(["2"]);
  const [where, setWhere] = React.useState<TWhere[]>([["id", "=", "4"]]);
  const [orderBy, setOrderBy] = React.useState<TOrder[]>([["id", "desc"]]);
  const commands = {
    head() {
      return (
        <button
          onClick={() => console.log("novo")}
          title="button"
        >
          <img
            src={newIcon}
            title="image"
          />
        </button>
      );
    },
    row({ record }: { record: any }) {
      return (
        <div className={"space-x-2"}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("edit", record);
            }}
            title="button"
          >
            <img
              src={editIcon}
              title="image"
            />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("del", record);
            }}
            title="button"
          >
            <img
              src={delIcon}
              title="image"
            />
          </button>
        </div>
      );
    },
  };
  function handleWhere(event: any) {
    setWhere(event.currentTarget.value);
    action("where")(event.currentTarget.value);
  }
  function handleSelect(event: any) {
    setSelected(event.currentTarget.value);
    action("select")(event.currentTarget.value);
  }

  function handleOrder(event: any) {
    setOrderBy(event.currentTarget.value);
    action("order")(event.currentTarget.value);
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
        onOrder={handleOrder}
        onSelect={handleSelect}
        onWhere={handleWhere}
        commands={commands}
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

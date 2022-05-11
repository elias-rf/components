import React from "react";
import Table, { TableAction, tableActionTypes } from "../ui/table/table";
import Form, { FormAction, formActionTypes } from "../ui/form/form";
import type { Where, OrderBy, Schema, Pks } from "types";

import DataContext, { ClientContext } from "@/contexts/data-context";
import PhonebookService from "@/features/phonebook/phonebook.service";

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
function Phonebook() {
  const { clientKnex } = React.useContext(DataContext) as ClientContext;
  const [data, setData] = React.useState([]);
  const [schema, setSchema] = React.useState<Schema>({
    pk: ["id"],
    fields: [],
  });
  const [record, setRecord] = React.useState({});
  const [selected, setSelected] = React.useState<Pks>([]);
  const [orderBy, setOrderBy] = React.useState<OrderBy[]>([]);
  const [where, setWhere] = React.useState<Where[]>([]);

  const phonebook = PhonebookService(clientKnex);

  React.useEffect(() => {
    async function get() {
      const sch: Schema = await phonebook.schema();
      setSchema(sch);
      const list = await phonebook.list(where, orderBy);
      setData(list);
    }
    get();
  }, []);

  React.useEffect(() => {
    async function get() {
      const response = await phonebook.read(selected);
      setData(response);
    }
  }, [selected]);

  async function handleForm(action: FormAction) {
    switch (action.type) {
      case formActionTypes.change:
        console.log(action.payload);
        break;

      default:
        break;
    }
  }

  function handleTable(action: TableAction) {
    switch (action.type) {
      case tableActionTypes.select:
        setSelected(action.payload as string[]);
        break;
      case tableActionTypes.order:
        setSelected(action.payload as string[]);
        break;
      case tableActionTypes.where:
        setSelected(action.payload as string[]);
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <Form
        schema={schema}
        record={record}
        dispatch={handleForm}
      />
      <Table
        schema={schema}
        data={data}
        selected={selected}
        orderBy={orderBy}
        where={where}
        dispatch={handleTable}
      />
    </div>
  );
}

export default Phonebook;

import Search, { SearchAction } from "./search";
import React from "react";
import { Schema, Where } from "../../../types";

export default {
  title: "Table/Search",
};

let data = [
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

export const Procura = () => {
  const [where, setWhere] = React.useState<Where[]>([["id", "<", "4"]]);

  const options = {
    selectedClass: "bg-gray-300",
  };

  function handleDispatch(action: SearchAction) {
    console.log(action);
  }

  return (
    <div>
      <Search
        where={where}
        schema={schema}
        dispatch={handleDispatch}
      />
    </div>
  );
};

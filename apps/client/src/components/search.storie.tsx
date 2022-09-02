import { Schema, Where } from "@er/types";
import React from "react";
import { Search, SearchAction } from "./search";

export default {
  title: "Table/Search",
};

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
  const [where] = React.useState<Where[]>([["id", "<", "4"]]);

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

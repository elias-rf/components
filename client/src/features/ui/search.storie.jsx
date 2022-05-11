import React from "react";
import Search from "./table/search";
import { action } from "@storybook/addon-actions";

const schema = {
  fields: [
    {
      label: "ID",
      field: "id",
      type: "number",
    },
    {
      label: "Nome",
      field: "nome",
      type: "string",
    },
    {
      label: "Valor de compra",
      field: "compra",
      type: "boolean",
    },
  ],
};

export default {
  title: "Componentes/Search",
  component: Search,
};

export const Default = () => {
  const [where, setWhere] = React.useState([["id", "<", 4]]);

  return (
    <div>
      <Search
        schema={schema}
        where={where}
        onWhere={setWhere}
      />
    </div>
  );
};

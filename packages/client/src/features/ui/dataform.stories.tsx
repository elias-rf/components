import Dataform from "./dataform";
import React from "react";

import { DataProvider } from "../../contexts/data-context";
import { BrowserRouter } from "react-router-dom";

function schema(target) {
  return Promise.resolve({
    pk: ["id"],
    fields: [
      {
        field: "id",
        label: "Código",
        type: "number",
        fieldClass: "w-16",
      },
      {
        field: "quantidade",
        label: "Quant",
        type: "number",
        fieldClass: "w-16",
      },
      {
        field: "produto",
        label: "Prod",
        type: "string",
        fieldClass: "text-left",
      },
      {
        field: "valor",
        label: "Vlr",
        type: "currency",
        fieldClass: "text-left",
      },
      {
        field: "enabled",
        label: "Enabled",
        type: "boolean",
        fieldClass: "text-left",
      },
    ],
  });
}

function read([id]) {
  return Promise.resolve({
    id,
    quantidade: 10,
    produto: "item 1",
    valor: 2.3,
    enabled: true,
  });
}

const Template = (args: any) => <Dataform {...args} />;

export const Default = Template.bind({});

Default.args = {
  schema,
  read,
};

export const Editable = Template.bind({});

Editable.args = {
  schema,
  read,
};

import { TTableDef } from "@/types/model";

export const ParametroExames: TTableDef = {
  database: "plano",
  table: "ParametroExames",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "string",
    },
    {
      field: "data",
      label: "data",
      name: "data",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "hora",
      label: "hora",
      name: "hora",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
    {
      field: "CdExame",
      label: "CdExame",
      name: "CdExame",
      typeField: "string",
    },
    {
      field: "P_A_S",
      label: "P_A_S",
      name: "P_A_S",
      typeField: "string",
    },
    {
      field: "P_A_D",
      label: "P_A_D",
      name: "P_A_D",
      typeField: "string",
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      typeField: "string",
    },
    {
      field: "Laudo",
      label: "Laudo",
      name: "Laudo",
      typeField: "string",
    },
    {
      field: "OpGrid",
      label: "OpGrid",
      name: "OpGrid",
      typeField: "string",
    },
  ],
};

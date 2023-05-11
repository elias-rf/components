import { TTableDef } from "@/types/model";

export const ContFor: TTableDef = {
  database: "plano",
  table: "ContFor",
  fields: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumSequencia",
      label: "NumSequencia",
      name: "NumSequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NmContato",
      label: "NmContato",
      name: "NmContato",
      typeField: "string",
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
    },
    {
      field: "Ramal",
      label: "Ramal",
      name: "Ramal",
      typeField: "int",
    },
    {
      field: "Cargo",
      label: "Cargo",
      name: "Cargo",
      typeField: "string",
    },
  ],
};

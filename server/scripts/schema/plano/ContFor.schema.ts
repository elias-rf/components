import { TTable } from "../../../../types";

export const ContFor: TTable = {
  database: "plano",
  table: "ContFor",
  fields: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumSequencia",
      label: "NumSequencia",
      name: "NumSequencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NmContato",
      label: "NmContato",
      name: "NmContato",
      type: "string",
      size: 80,
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      type: "string",
      size: 15,
    },
    {
      field: "Ramal",
      label: "Ramal",
      name: "Ramal",
      type: "int",
      size: 2,
    },
    {
      field: "Cargo",
      label: "Cargo",
      name: "Cargo",
      type: "string",
      size: 25,
    },
  ],
};

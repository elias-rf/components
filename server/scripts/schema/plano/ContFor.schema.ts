import { TTable } from "../../../../types/model";

export const ContFor: TTable = {
  database: "plano",
  table: "ContFor",
  fields: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumSequencia",
      label: "NumSequencia",
      name: "NumSequencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NmContato",
      label: "NmContato",
      name: "NmContato",
      typeField: "string",
      size: 80,
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
      size: 15,
    },
    {
      field: "Ramal",
      label: "Ramal",
      name: "Ramal",
      typeField: "int",
      size: 2,
    },
    {
      field: "Cargo",
      label: "Cargo",
      name: "Cargo",
      typeField: "string",
      size: 25,
    },
  ],
};

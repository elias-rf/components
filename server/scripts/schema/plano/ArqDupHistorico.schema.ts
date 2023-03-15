import { TTable } from "../../../../types/model";

export const ArqDupHistorico: TTable = {
  database: "plano",
  table: "ArqDupHistorico",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
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
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Historico",
      label: "Historico",
      name: "Historico",
      typeField: "string",
      size: 1024,
      allowNull: false,
    },
  ],
};

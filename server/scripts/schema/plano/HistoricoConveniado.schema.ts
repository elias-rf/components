import { TEntity } from "../../../../types";

export const HistoricoConveniado: TEntity = {
  database: "plano",
  table: "HistoricoConveniado",
  fields: [
    {
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "CdFuncionario",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Historico",
      label: "Historico",
      name: "Historico",
      type: "string",
      size: 512,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      type: "string",
      size: 64,
      allowNull: false,
    },
  ],
};

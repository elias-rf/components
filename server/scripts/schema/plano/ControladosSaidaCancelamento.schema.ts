import { TEntity } from "../../../../types";

export const ControladosSaidaCancelamento: TEntity = {
  database: "plano",
  table: "ControladosSaidaCancelamento",
  schema: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumPDV",
      label: "NumPDV",
      name: "NumPDV",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
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
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      type: "string",
      size: 2048,
    },
    {
      field: "NmUsuario",
      label: "NmUsuario",
      name: "NmUsuario",
      type: "string",
      size: 40,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      type: "string",
      size: 3,
      allowNull: false,
    },
  ],
};

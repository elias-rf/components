import { TTableDef } from "@/types/model";

export const CartaoFidelidadeDebito: TTableDef = {
  database: "plano",
  table: "CartaoFidelidadeDebito",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtMovimentacao",
      label: "DtMovimentacao",
      name: "DtMovimentacao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PontosMilhagem",
      label: "PontosMilhagem",
      name: "PontosMilhagem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Comentarios",
      label: "Comentarios",
      name: "Comentarios",
      typeField: "string",

      allowNull: false,
    },
  ],
};

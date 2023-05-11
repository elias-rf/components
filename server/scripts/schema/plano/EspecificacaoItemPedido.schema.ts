import { TTableDef } from "@/types/model";

export const EspecificacaoItemPedido: TTableDef = {
  database: "plano",
  table: "EspecificacaoItemPedido",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",

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
      field: "Especificacao",
      label: "Especificacao",
      name: "Especificacao",
      typeField: "string",
    },
  ],
};

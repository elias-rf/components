import { TTableDef } from "../../../../types/model";

export const EspecificacaoItemPedido: TTableDef = {
  database: "plano",
  table: "EspecificacaoItemPedido",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
      size: 1,
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
      field: "Especificacao",
      label: "Especificacao",
      name: "Especificacao",
      typeField: "string",
      size: 20,
    },
  ],
};

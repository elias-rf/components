import { TTableDef } from "@/types/model";

export const MsgConflitos: TTableDef = {
  database: "plano",
  table: "MsgConflitos",
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
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "CdSalOrigem",
      label: "CdSalOrigem",
      name: "CdSalOrigem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdSalDestino",
      label: "CdSalDestino",
      name: "CdSalDestino",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgTipoMensagem",
      label: "FgTipoMensagem",
      name: "FgTipoMensagem",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
  ],
};

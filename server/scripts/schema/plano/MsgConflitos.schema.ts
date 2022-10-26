import { TEntity } from "../../../../types";

export const MsgConflitos: TEntity = {
  database: "plano",
  table: "MsgConflitos",
  schema: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      type: "string",
      size: 10,
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
      field: "CdSalOrigem",
      label: "CdSalOrigem",
      name: "CdSalOrigem",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "CdSalDestino",
      label: "CdSalDestino",
      name: "CdSalDestino",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "FgTipoMensagem",
      label: "FgTipoMensagem",
      name: "FgTipoMensagem",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 1024,
    },
  ],
};

import { TTableDef } from "@/types/model";

export const PedidoOrdemFaturamento: TTableDef = {
  database: "plano",
  table: "PedidoOrdemFaturamento",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
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
      field: "NumOrdemFaturamento",
      label: "NumOrdemFaturamento",
      name: "NumOrdemFaturamento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtInclusao",
      label: "DtInclusao",
      name: "DtInclusao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};

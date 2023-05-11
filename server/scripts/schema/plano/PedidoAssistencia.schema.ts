import { TTableDef } from "@/types/model";

export const PedidoAssistencia: TTableDef = {
  database: "plano",
  table: "PedidoAssistencia",
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
      field: "NumSerieEqpto",
      label: "NumSerieEqpto",
      name: "NumSerieEqpto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtLimiteGarantia",
      label: "DtLimiteGarantia",
      name: "DtLimiteGarantia",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DescricaoEqpto",
      label: "DescricaoEqpto",
      name: "DescricaoEqpto",
      typeField: "string",
    },
    {
      field: "DefeitoReclamado",
      label: "DefeitoReclamado",
      name: "DefeitoReclamado",
      typeField: "string",
    },
  ],
};

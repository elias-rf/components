import { TTableDef } from "@mono/types/model";

export const PedidoAssistencia: TTableDef = {
  database: "plano",
  table: "PedidoAssistencia",
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
      field: "NumSerieEqpto",
      label: "NumSerieEqpto",
      name: "NumSerieEqpto",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "DtLimiteGarantia",
      label: "DtLimiteGarantia",
      name: "DtLimiteGarantia",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DescricaoEqpto",
      label: "DescricaoEqpto",
      name: "DescricaoEqpto",
      typeField: "string",
      size: 256,
    },
    {
      field: "DefeitoReclamado",
      label: "DefeitoReclamado",
      name: "DefeitoReclamado",
      typeField: "string",
      size: 1024,
    },
  ],
};

import { TEntity } from "../../../../types";

export const PedidoAssistencia: TEntity = {
  database: "plano",
  table: "PedidoAssistencia",
  schema: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 4,
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
      field: "NumSerieEqpto",
      label: "NumSerieEqpto",
      name: "NumSerieEqpto",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "DtLimiteGarantia",
      label: "DtLimiteGarantia",
      name: "DtLimiteGarantia",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DescricaoEqpto",
      label: "DescricaoEqpto",
      name: "DescricaoEqpto",
      type: "string",
      size: 256,
    },
    {
      field: "DefeitoReclamado",
      label: "DefeitoReclamado",
      name: "DefeitoReclamado",
      type: "string",
      size: 1024,
    },
  ],
};

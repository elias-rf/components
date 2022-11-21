import { TTable } from "../../../../types";

export const ObsMovCreditoCliente: TTable = {
  database: "plano",
  table: "ObsMovCreditoCliente",
  fields: [
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
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
      type: "float",
      size: 8,
      scale: 4,
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
      field: "TipoMovimentacao",
      label: "TipoMovimentacao",
      name: "TipoMovimentacao",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 512,
    },
  ],
};

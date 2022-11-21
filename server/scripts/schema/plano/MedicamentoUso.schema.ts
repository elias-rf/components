import { TTable } from "../../../../types";

export const MedicamentoUso: TTable = {
  database: "plano",
  table: "MedicamentoUso",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      type: "string",
      size: 8,
    },
    {
      field: "DtInicio",
      label: "DtInicio",
      name: "DtInicio",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtFim",
      label: "DtFim",
      name: "DtFim",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Posologia",
      label: "Posologia",
      name: "Posologia",
      type: "string",
      size: 15,
    },
  ],
};

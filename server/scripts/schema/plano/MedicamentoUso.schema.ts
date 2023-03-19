import { TTableDef } from "../../../../types/model";

export const MedicamentoUso: TTableDef = {
  database: "plano",
  table: "MedicamentoUso",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "string",
      size: 8,
    },
    {
      field: "DtInicio",
      label: "DtInicio",
      name: "DtInicio",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtFim",
      label: "DtFim",
      name: "DtFim",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Posologia",
      label: "Posologia",
      name: "Posologia",
      typeField: "string",
      size: 15,
    },
  ],
};

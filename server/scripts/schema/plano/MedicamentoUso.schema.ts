import { TTableDef } from "@/types/model";

export const MedicamentoUso: TTableDef = {
  database: "plano",
  table: "MedicamentoUso",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "string",
    },
    {
      field: "DtInicio",
      label: "DtInicio",
      name: "DtInicio",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtFim",
      label: "DtFim",
      name: "DtFim",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Posologia",
      label: "Posologia",
      name: "Posologia",
      typeField: "string",
    },
  ],
};

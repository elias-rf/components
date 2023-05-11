import { TTableDef } from "@/types/model";

export const MedicamentoInterv: TTableDef = {
  database: "plano",
  table: "MedicamentoInterv",
  fields: [
    {
      field: "CdIntervencao",
      label: "CdIntervencao",
      name: "CdIntervencao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
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

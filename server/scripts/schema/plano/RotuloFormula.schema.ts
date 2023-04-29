import { TTableDef } from "@mono/types/model";

export const RotuloFormula: TTableDef = {
  database: "plano",
  table: "RotuloFormula",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumFormula",
      label: "NumFormula",
      name: "NumFormula",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NmCliente",
      label: "NmCliente",
      name: "NmCliente",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
    {
      field: "NmMedico",
      label: "NmMedico",
      name: "NmMedico",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
    {
      field: "CdRotulo",
      label: "CdRotulo",
      name: "CdRotulo",
      typeField: "int",
      size: 4,
    },
    {
      field: "DescricaoRotulo",
      label: "DescricaoRotulo",
      name: "DescricaoRotulo",
      typeField: "string",
      size: 3072,
    },
    {
      field: "FgImpressao",
      label: "FgImpressao",
      name: "FgImpressao",
      typeField: "string",
      size: 1,
    },
  ],
};

import { TTableDef } from "@/types/model";

export const RotuloFormula: TTableDef = {
  database: "plano",
  table: "RotuloFormula",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumFormula",
      label: "NumFormula",
      name: "NumFormula",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NmCliente",
      label: "NmCliente",
      name: "NmCliente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmMedico",
      label: "NmMedico",
      name: "NmMedico",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdRotulo",
      label: "CdRotulo",
      name: "CdRotulo",
      typeField: "int",
    },
    {
      field: "DescricaoRotulo",
      label: "DescricaoRotulo",
      name: "DescricaoRotulo",
      typeField: "string",
    },
    {
      field: "FgImpressao",
      label: "FgImpressao",
      name: "FgImpressao",
      typeField: "string",
    },
  ],
};

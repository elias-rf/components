import { TTableDef } from "@/types/model";

export const MestreNotaTerceiros: TTableDef = {
  database: "plano",
  table: "MestreNotaTerceiros",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFornecedorNotaReferencia",
      label: "CdFornecedorNotaReferencia",
      name: "CdFornecedorNotaReferencia",
      typeField: "int",

      allowNull: false,
    },
  ],
};

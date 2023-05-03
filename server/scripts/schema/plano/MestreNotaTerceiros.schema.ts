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
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "CdFornecedorNotaReferencia",
      label: "CdFornecedorNotaReferencia",
      name: "CdFornecedorNotaReferencia",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
  ],
};

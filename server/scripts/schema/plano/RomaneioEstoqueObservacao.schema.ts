import { TTableDef } from "@/types/model";

export const RomaneioEstoqueObservacao: TTableDef = {
  database: "plano",
  table: "RomaneioEstoqueObservacao",
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
      field: "NumRomaneio",
      label: "NumRomaneio",
      name: "NumRomaneio",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",

      allowNull: false,
    },
  ],
};

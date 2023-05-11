import { TTableDef } from "@/types/model";

export const ParametrosContAcesso: TTableDef = {
  database: "plano",
  table: "ParametrosContAcesso",
  fields: [
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Base",
      label: "Base",
      name: "Base",
      typeField: "string",
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",
    },
  ],
};

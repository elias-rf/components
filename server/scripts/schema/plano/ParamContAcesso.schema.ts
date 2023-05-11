import { TTableDef } from "@/types/model";

export const ParamContAcesso: TTableDef = {
  database: "plano",
  table: "ParamContAcesso",
  fields: [
    {
      field: "Base",
      label: "Base",
      name: "Base",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Estacao",
      label: "Estacao",
      name: "Estacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
  ],
};

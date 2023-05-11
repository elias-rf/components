import { TTableDef } from "@/types/model";

export const ConfiguracaoSiTefFilial: TTableDef = {
  database: "plano",
  table: "ConfiguracaoSiTefFilial",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "ConfiguracaoSiTefFilial_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "IPSiTef",
      label: "IPSiTef",
      name: "IPSiTef",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "IdLoja",
      label: "IdLoja",
      name: "IdLoja",
      typeField: "int",

      allowNull: false,
    },
  ],
};

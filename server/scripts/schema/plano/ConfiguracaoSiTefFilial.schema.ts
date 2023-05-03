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
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "IPSiTef",
      label: "IPSiTef",
      name: "IPSiTef",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "IdLoja",
      label: "IdLoja",
      name: "IdLoja",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
  ],
};

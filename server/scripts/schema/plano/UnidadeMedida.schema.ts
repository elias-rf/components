import { TTableDef } from "@/types/model";

export const UnidadeMedida: TTableDef = {
  database: "plano",
  table: "UnidadeMedida",
  fields: [
    {
      field: "Unidade",
      label: "Unidade",
      name: "UnidadeMedida_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoUnidade",
      label: "DescricaoUnidade",
      name: "DescricaoUnidade",
      typeField: "string",

      allowNull: false,
    },
  ],
};

import { TTableDef } from "@mono/types/model";

export const UnidadeMedida: TTableDef = {
  database: "plano",
  table: "UnidadeMedida",
  fields: [
    {
      field: "Unidade",
      label: "Unidade",
      name: "UnidadeMedida_id",
      typeField: "string",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "DescricaoUnidade",
      label: "DescricaoUnidade",
      name: "DescricaoUnidade",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
  ],
};

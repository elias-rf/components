import { TTableDef } from "@/types/model";

export const Cidade: TTableDef = {
  database: "plano",
  table: "Cidade",
  fields: [
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "Cidade_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "UF",
      label: "UF",
      name: "UF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NmCidade",
      label: "NmCidade",
      name: "NmCidade",
      typeField: "string",
    },
  ],
};

import { TTableDef } from "@/types/model";

export const CadVenOBS: TTableDef = {
  database: "plano",
  table: "CadVenOBS",
  fields: [
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CadVenOBS_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
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

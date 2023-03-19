import { TTableDef } from "../../../../types/model";

export const CadVenOBS: TTableDef = {
  database: "plano",
  table: "CadVenOBS",
  fields: [
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CadVenOBS_id",
      typeField: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 1024,
      allowNull: false,
    },
  ],
};

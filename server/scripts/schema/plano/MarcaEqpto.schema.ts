import { TTableDef } from "../../../../types/model";

export const MarcaEqpto: TTableDef = {
  database: "plano",
  table: "MarcaEqpto",
  fields: [
    {
      field: "CdMarcaEqpto",
      label: "CdMarcaEqpto",
      name: "MarcaEqpto_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmMarcaEqpto",
      label: "NmMarcaEqpto",
      name: "NmMarcaEqpto",
      typeField: "string",
      size: 40,
      allowNull: false,
    },
  ],
};

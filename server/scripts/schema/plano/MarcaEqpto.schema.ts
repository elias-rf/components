import { TEntity } from "../../../../types";

export const MarcaEqpto: TEntity = {
  database: "plano",
  table: "MarcaEqpto",
  schema: [
    {
      field: "CdMarcaEqpto",
      label: "CdMarcaEqpto",
      name: "MarcaEqpto_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmMarcaEqpto",
      label: "NmMarcaEqpto",
      name: "NmMarcaEqpto",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};

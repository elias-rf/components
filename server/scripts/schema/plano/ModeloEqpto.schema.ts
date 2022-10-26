import { TEntity } from "../../../../types";

export const ModeloEqpto: TEntity = {
  database: "plano",
  table: "ModeloEqpto",
  schema: [
    {
      field: "CdModeloEqpto",
      label: "CdModeloEqpto",
      name: "ModeloEqpto_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmModeloEqpto",
      label: "NmModeloEqpto",
      name: "NmModeloEqpto",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};

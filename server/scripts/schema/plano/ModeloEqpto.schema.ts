import { TTableDef } from "@/types/model";

export const ModeloEqpto: TTableDef = {
  database: "plano",
  table: "ModeloEqpto",
  fields: [
    {
      field: "CdModeloEqpto",
      label: "CdModeloEqpto",
      name: "ModeloEqpto_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmModeloEqpto",
      label: "NmModeloEqpto",
      name: "NmModeloEqpto",
      typeField: "string",

      allowNull: false,
    },
  ],
};

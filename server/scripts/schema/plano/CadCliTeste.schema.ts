import { TTableDef } from "@/types/model";

export const CadCliTeste: TTableDef = {
  database: "plano",
  table: "CadCliTeste",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCliTeste_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      typeField: "string",

      allowNull: false,
    },
  ],
};

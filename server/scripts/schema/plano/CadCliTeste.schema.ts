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
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Texto",
      label: "Texto",
      name: "Texto",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
  ],
};

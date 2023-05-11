import { TTableDef } from "@/types/model";

export const Equipamentos: TTableDef = {
  database: "plano",
  table: "Equipamentos",
  fields: [
    {
      field: "CdEquipamento",
      label: "CdEquipamento",
      name: "Equipamentos_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmEquipamento",
      label: "NmEquipamento",
      name: "NmEquipamento",
      typeField: "string",
    },
  ],
};

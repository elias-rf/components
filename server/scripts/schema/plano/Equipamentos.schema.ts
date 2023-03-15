import { TTable } from "../../../../types/model";

export const Equipamentos: TTable = {
  database: "plano",
  table: "Equipamentos",
  fields: [
    {
      field: "CdEquipamento",
      label: "CdEquipamento",
      name: "Equipamentos_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmEquipamento",
      label: "NmEquipamento",
      name: "NmEquipamento",
      typeField: "string",
      size: 40,
    },
  ],
};

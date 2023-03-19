import { TTableDef } from "../../../../types/model";

export const ParametrosComandoSQL: TTableDef = {
  database: "plano",
  table: "ParametrosComandoSQL",
  fields: [
    {
      field: "IdComando",
      label: "IdComando",
      name: "ParametrosComandoSQL_id",
      typeField: "string",
      size: 128,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Comando",
      label: "Comando",
      name: "Comando",
      typeField: "string",
      size: 5140,
      allowNull: false,
    },
  ],
};

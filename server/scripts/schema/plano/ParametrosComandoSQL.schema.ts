import { TTableDef } from "@/types/model";

export const ParametrosComandoSQL: TTableDef = {
  database: "plano",
  table: "ParametrosComandoSQL",
  fields: [
    {
      field: "IdComando",
      label: "IdComando",
      name: "ParametrosComandoSQL_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Comando",
      label: "Comando",
      name: "Comando",
      typeField: "string",

      allowNull: false,
    },
  ],
};

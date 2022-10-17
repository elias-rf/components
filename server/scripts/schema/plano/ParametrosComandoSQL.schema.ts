import { TEntity } from "../../../../types";

export const ParametrosComandoSQL: TEntity = {
  database: "plano",
  table: "ParametrosComandoSQL",
  fields: [
    {
      field: "IdComando",
      label: "IdComando",
      name: "ParametrosComandoSQL_id",
      type: "string",
      size: 128,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Comando",
      label: "Comando",
      name: "Comando",
      type: "string",
      size: 5140,
      allowNull: false,
    },
  ],
};

import { TTableDef } from "@/types/model";

export const tPlanComponente: TTableDef = {
  database: "oftalmo",
  table: "tPlanComponente",
  fields: [
    {
      field: "kPlanComponente",
      label: "kPlanComponente",
      name: "tPlanComponente_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkPlanItem",
      label: "fkPlanItem",
      name: "fkPlanItem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NomeComponente",
      label: "NomeComponente",
      name: "NomeComponente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "BaseFrequencia",
      label: "BaseFrequencia",
      name: "BaseFrequencia",
      typeField: "string",

      allowNull: false,
      defaultValue: "Dia",
    },
    {
      field: "Frequencia",
      label: "Frequencia",
      name: "Frequencia",
      typeField: "int",

      allowNull: false,
      defaultValue: "1",
    },
    {
      field: "TempoAviso",
      label: "TempoAviso",
      name: "TempoAviso",
      typeField: "int",

      allowNull: false,
      defaultValue: "1",
    },
  ],
};

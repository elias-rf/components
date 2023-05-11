import { TTableDef } from "@/types/model";

export const CALCSENHA: TTableDef = {
  database: "plano",
  table: "CALCSENHA",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CALCSENHA_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "IdMultiplica",
      label: "IdMultiplica",
      name: "IdMultiplica",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "IdDivide",
      label: "IdDivide",
      name: "IdDivide",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "IdUsuario",
      label: "IdUsuario",
      name: "IdUsuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DHAlteracao",
      label: "DHAlteracao",
      name: "DHAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "MotAlteracao",
      label: "MotAlteracao",
      name: "MotAlteracao",
      typeField: "string",

      allowNull: false,
    },
  ],
};

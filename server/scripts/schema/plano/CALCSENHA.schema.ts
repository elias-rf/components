import { TTableDef } from "@mono/types/model";

export const CALCSENHA: TTableDef = {
  database: "plano",
  table: "CALCSENHA",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CALCSENHA_id",
      typeField: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "IdMultiplica",
      label: "IdMultiplica",
      name: "IdMultiplica",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "IdDivide",
      label: "IdDivide",
      name: "IdDivide",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "IdUsuario",
      label: "IdUsuario",
      name: "IdUsuario",
      typeField: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "DHAlteracao",
      label: "DHAlteracao",
      name: "DHAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "MotAlteracao",
      label: "MotAlteracao",
      name: "MotAlteracao",
      typeField: "string",
      size: 255,
      allowNull: false,
    },
  ],
};

import { TEntity } from "../../../../types";

export const CALCSENHA: TEntity = {
  database: "plano",
  table: "CALCSENHA",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CALCSENHA_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "IdMultiplica",
      label: "IdMultiplica",
      name: "IdMultiplica",
      type: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "IdDivide",
      label: "IdDivide",
      name: "IdDivide",
      type: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "IdUsuario",
      label: "IdUsuario",
      name: "IdUsuario",
      type: "string",
      size: 20,
      allowNull: false,
    },
    {
      field: "DHAlteracao",
      label: "DHAlteracao",
      name: "DHAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "MotAlteracao",
      label: "MotAlteracao",
      name: "MotAlteracao",
      type: "string",
      size: 255,
      allowNull: false,
    },
  ],
};

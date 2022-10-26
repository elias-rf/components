import { TEntity } from "../../../../types";

export const AdministradoraBanco: TEntity = {
  database: "plano",
  table: "AdministradoraBanco",
  schema: [
    {
      field: "CdAdministradora",
      label: "CdAdministradora",
      name: "AdministradoraBanco_id",
      type: "string",
      size: 10,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      type: "string",
      size: 32,
      allowNull: false,
    },
  ],
};

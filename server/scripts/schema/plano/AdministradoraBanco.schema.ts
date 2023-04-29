import { TTableDef } from "@mono/types/model";

export const AdministradoraBanco: TTableDef = {
  database: "plano",
  table: "AdministradoraBanco",
  fields: [
    {
      field: "CdAdministradora",
      label: "CdAdministradora",
      name: "AdministradoraBanco_id",
      typeField: "string",
      size: 10,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
  ],
};

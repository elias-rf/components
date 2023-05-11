import { TTableDef } from "@/types/model";

export const AdministradoraBanco: TTableDef = {
  database: "plano",
  table: "AdministradoraBanco",
  fields: [
    {
      field: "CdAdministradora",
      label: "CdAdministradora",
      name: "AdministradoraBanco_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",

      allowNull: false,
    },
  ],
};

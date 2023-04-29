import { TTableDef } from "@mono/types/model";

export const AdministradoraFilial: TTableDef = {
  database: "plano",
  table: "AdministradoraFilial",
  fields: [
    {
      field: "CdAdministradora",
      label: "CdAdministradora",
      name: "CdAdministradora",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
  ],
};

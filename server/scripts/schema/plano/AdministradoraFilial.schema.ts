import { TTable } from "../../../../types/model";

export const AdministradoraFilial: TTable = {
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

import { TEntity } from "../../../../types";

export const AdministradoraFilial: TEntity = {
  database: "plano",
  table: "AdministradoraFilial",
  schema: [
    {
      field: "CdAdministradora",
      label: "CdAdministradora",
      name: "CdAdministradora",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
  ],
};

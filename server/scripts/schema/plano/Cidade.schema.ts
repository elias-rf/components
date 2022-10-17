import { TEntity } from "../../../../types";

export const Cidade: TEntity = {
  database: "plano",
  table: "Cidade",
  fields: [
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "Cidade_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "UF",
      label: "UF",
      name: "UF",
      type: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "NmCidade",
      label: "NmCidade",
      name: "NmCidade",
      type: "string",
      size: 50,
    },
  ],
};

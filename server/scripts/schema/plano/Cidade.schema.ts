import { TTable } from "../../../../types/model";

export const Cidade: TTable = {
  database: "plano",
  table: "Cidade",
  fields: [
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "Cidade_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "UF",
      label: "UF",
      name: "UF",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "NmCidade",
      label: "NmCidade",
      name: "NmCidade",
      typeField: "string",
      size: 50,
    },
  ],
};

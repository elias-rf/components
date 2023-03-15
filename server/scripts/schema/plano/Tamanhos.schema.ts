import { TTable } from "../../../../types/model";

export const Tamanhos: TTable = {
  database: "plano",
  table: "Tamanhos",
  fields: [
    {
      field: "CdTamanho",
      label: "CdTamanho",
      name: "Tamanhos_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 20,
    },
  ],
};

import { TTable } from "../../../../types/model";

export const TipoLIberacao: TTable = {
  database: "plano",
  table: "TipoLIberacao",
  fields: [
    {
      field: "CdTipoLiberacao",
      label: "CdTipoLiberacao",
      name: "TipoLIberacao_id",
      typeField: "int",
      size: 9,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
  ],
};

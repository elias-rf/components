import { TTable } from "../../../../types/model";

export const Exames: TTable = {
  database: "plano",
  table: "Exames",
  fields: [
    {
      field: "CdExame",
      label: "CdExame",
      name: "Exames_id",
      typeField: "string",
      size: 6,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 40,
    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      typeField: "string",
      size: 10,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};

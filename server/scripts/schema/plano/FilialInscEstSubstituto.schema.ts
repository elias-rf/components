import { TEntity } from "../../../../types";

export const FilialInscEstSubstituto: TEntity = {
  database: "plano",
  table: "FilialInscEstSubstituto",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
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
      field: "InscEstSubstituto",
      label: "InscEstSubstituto",
      name: "InscEstSubstituto",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};

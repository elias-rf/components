import { TTableDef } from "@/types/model";

export const FilialInscEstSubstituto: TTableDef = {
  database: "plano",
  table: "FilialInscEstSubstituto",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
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
      field: "InscEstSubstituto",
      label: "InscEstSubstituto",
      name: "InscEstSubstituto",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};

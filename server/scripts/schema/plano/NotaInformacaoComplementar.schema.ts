import { TTableDef } from "../../../../types/model";

export const NotaInformacaoComplementar: TTableDef = {
  database: "plano",
  table: "NotaInformacaoComplementar",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "CdInformacaoComplementar",
      label: "CdInformacaoComplementar",
      name: "CdInformacaoComplementar",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
  ],
};

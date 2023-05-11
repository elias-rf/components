import { TTableDef } from "@/types/model";

export const NotaInformacaoComplementar: TTableDef = {
  database: "plano",
  table: "NotaInformacaoComplementar",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdInformacaoComplementar",
      label: "CdInformacaoComplementar",
      name: "CdInformacaoComplementar",
      typeField: "int",

      allowNull: false,
    },
  ],
};

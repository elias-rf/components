import { TTableDef } from "@/types/model";

export const ProducaoEtiquetaExterna: TTableDef = {
  database: "plano",
  table: "ProducaoEtiquetaExterna",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumFormula",
      label: "NumFormula",
      name: "NumFormula",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumControle",
      label: "NumControle",
      name: "NumControle",
      typeField: "int",
    },
    {
      field: "FgAtualizacao",
      label: "FgAtualizacao",
      name: "FgAtualizacao",
      typeField: "string",
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",

      allowNull: false,
    },
  ],
};

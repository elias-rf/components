import { TTableDef } from "../../../../types/model";

export const ProducaoEtiquetaExterna: TTableDef = {
  database: "plano",
  table: "ProducaoEtiquetaExterna",
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
      field: "NumFormula",
      label: "NumFormula",
      name: "NumFormula",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "NumControle",
      label: "NumControle",
      name: "NumControle",
      typeField: "int",
      size: 9,
    },
    {
      field: "FgAtualizacao",
      label: "FgAtualizacao",
      name: "FgAtualizacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
  ],
};

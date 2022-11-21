import { TTable } from "../../../../types";

export const ProducaoEtiquetaInterna: TTable = {
  database: "plano",
  table: "ProducaoEtiquetaInterna",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumFormula",
      label: "NumFormula",
      name: "NumFormula",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};

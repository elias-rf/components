import { TTable } from "../../../../types/model";

export const ProducaoEtiquetaInterna: TTable = {
  database: "plano",
  table: "ProducaoEtiquetaInterna",
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
  ],
};

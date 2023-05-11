import { TTableDef } from "@/types/model";

export const ProducaoFormula: TTableDef = {
  database: "plano",
  table: "ProducaoFormula",
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
      field: "LoteEsterilizacao",
      label: "LoteEsterilizacao",
      name: "LoteEsterilizacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LoteFabricante",
      label: "LoteFabricante",
      name: "LoteFabricante",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "QuantidadeOriginal",
      label: "QuantidadeOriginal",
      name: "QuantidadeOriginal",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "IndiceRefracao20",
      label: "IndiceRefracao20",
      name: "IndiceRefracao20",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
    {
      field: "IndiceRefracao35",
      label: "IndiceRefracao35",
      name: "IndiceRefracao35",
      typeField: "int",

      scale: 4,
      allowNull: false,
    },
  ],
};

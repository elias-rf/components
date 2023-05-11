import { TTableDef } from "@/types/model";

export const TaxaFca: TTableDef = {
  database: "plano",
  table: "TaxaFca",
  fields: [
    {
      field: "DataFca",
      label: "DataFca",
      name: "TaxaFca_id",
      typeField: "datetime",

      scale: 3,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "IndiceFca",
      label: "IndiceFca",
      name: "IndiceFca",
      typeField: "float",

      scale: 4,
    },
  ],
};

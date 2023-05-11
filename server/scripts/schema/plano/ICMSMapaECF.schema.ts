import { TTableDef } from "@/types/model";

export const ICMSMapaECF: TTableDef = {
  database: "plano",
  table: "ICMSMapaECF",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtMapa",
      label: "DtMapa",
      name: "DtMapa",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NumECF",
      label: "NumECF",
      name: "NumECF",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "AliqICMS",
      label: "AliqICMS",
      name: "AliqICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlBaseCalculo",
      label: "VlBaseCalculo",
      name: "VlBaseCalculo",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlICMS",
      label: "VlICMS",
      name: "VlICMS",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
  ],
};

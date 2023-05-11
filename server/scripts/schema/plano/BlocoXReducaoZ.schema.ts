import { TTableDef } from "@/types/model";

export const BlocoXReducaoZ: TTableDef = {
  database: "plano",
  table: "BlocoXReducaoZ",
  fields: [
    {
      field: "CNPJFilial",
      label: "CNPJFilial",
      name: "CNPJFilial",
      typeField: "string",

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
      field: "NumSerie",
      label: "NumSerie",
      name: "NumSerie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Situacao",
      label: "Situacao",
      name: "Situacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "StatusRetorno",
      label: "StatusRetorno",
      name: "StatusRetorno",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Recibo",
      label: "Recibo",
      name: "Recibo",
      typeField: "string",

      allowNull: false,
    },
  ],
};

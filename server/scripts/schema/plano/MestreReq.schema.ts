import { TTableDef } from "@/types/model";

export const MestreReq: TTableDef = {
  database: "plano",
  table: "MestreReq",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumRequisicao",
      label: "NumRequisicao",
      name: "NumRequisicao",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdTecnico",
      label: "CdTecnico",
      name: "CdTecnico",
      typeField: "int",
    },
    {
      field: "NumeroRat",
      label: "NumeroRat",
      name: "NumeroRat",
      typeField: "int",
    },
    {
      field: "Situacao",
      label: "Situacao",
      name: "Situacao",
      typeField: "string",
    },
    {
      field: "FgEstoque",
      label: "FgEstoque",
      name: "FgEstoque",
      typeField: "string",
    },
  ],
};

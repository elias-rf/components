import { TTableDef } from "@mono/types/model";

export const MestreReq: TTableDef = {
  database: "plano",
  table: "MestreReq",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumRequisicao",
      label: "NumRequisicao",
      name: "NumRequisicao",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DtEmissao",
      label: "DtEmissao",
      name: "DtEmissao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdTecnico",
      label: "CdTecnico",
      name: "CdTecnico",
      typeField: "int",
      size: 4,
    },
    {
      field: "NumeroRat",
      label: "NumeroRat",
      name: "NumeroRat",
      typeField: "int",
      size: 4,
    },
    {
      field: "Situacao",
      label: "Situacao",
      name: "Situacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgEstoque",
      label: "FgEstoque",
      name: "FgEstoque",
      typeField: "string",
      size: 1,
    },
  ],
};

import { TTableDef } from "@/types/model";

export const TabDep: TTableDef = {
  database: "plano",
  table: "TabDep",
  fields: [
    {
      field: "CdDepartamento",
      label: "CdDepartamento",
      name: "TabDep_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmDepartamento",
      label: "NmDepartamento",
      name: "NmDepartamento",
      typeField: "string",
    },
    {
      field: "PercLucro",
      label: "PercLucro",
      name: "PercLucro",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgEstoque",
      label: "FgEstoque",
      name: "FgEstoque",
      typeField: "string",
    },
    {
      field: "FgListaPreco",
      label: "FgListaPreco",
      name: "FgListaPreco",
      typeField: "string",
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "PercDescMaxGerente",
      label: "PercDescMaxGerente",
      name: "PercDescMaxGerente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescMaxVendedor",
      label: "PercDescMaxVendedor",
      name: "PercDescMaxVendedor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PontosMilhagem",
      label: "PontosMilhagem",
      name: "PontosMilhagem",
      typeField: "float",

      scale: 4,
    },
    {
      field: "SeqGrade",
      label: "SeqGrade",
      name: "SeqGrade",
      typeField: "int",
    },
  ],
};

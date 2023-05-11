import { TTableDef } from "@/types/model";

export const TabDif: TTableDef = {
  database: "plano",
  table: "TabDif",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtLcto",
      label: "DtLcto",
      name: "DtLcto",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "HrLcto",
      label: "HrLcto",
      name: "HrLcto",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "EstAtual",
      label: "EstAtual",
      name: "EstAtual",
      typeField: "float",

      scale: 4,
    },
    {
      field: "EstDif",
      label: "EstDif",
      name: "EstDif",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      typeField: "string",
    },
    {
      field: "FgAtualizacao",
      label: "FgAtualizacao",
      name: "FgAtualizacao",
      typeField: "string",
    },
    {
      field: "DtValidacao",
      label: "DtValidacao",
      name: "DtValidacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Contagem",
      label: "Contagem",
      name: "Contagem",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",
    },
  ],
};

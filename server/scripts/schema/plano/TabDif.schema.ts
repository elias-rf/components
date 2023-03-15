import { TTable } from "../../../../types/model";

export const TabDif: TTable = {
  database: "plano",
  table: "TabDif",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "DtLcto",
      label: "DtLcto",
      name: "DtLcto",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "HrLcto",
      label: "HrLcto",
      name: "HrLcto",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "EstAtual",
      label: "EstAtual",
      name: "EstAtual",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "EstDif",
      label: "EstDif",
      name: "EstDif",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      typeField: "string",
      size: 50,
    },
    {
      field: "FgAtualizacao",
      label: "FgAtualizacao",
      name: "FgAtualizacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "DtValidacao",
      label: "DtValidacao",
      name: "DtValidacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Contagem",
      label: "Contagem",
      name: "Contagem",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",
      size: 10,
    },
  ],
};

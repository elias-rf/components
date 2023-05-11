import { TTableDef } from "@/types/model";

export const MovCreCliente: TTableDef = {
  database: "plano",
  table: "MovCreCliente",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoMovimentacao",
      label: "TipoMovimentacao",
      name: "TipoMovimentacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Dtlcto",
      label: "Dtlcto",
      name: "Dtlcto",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtOcorrencia",
      label: "DtOcorrencia",
      name: "DtOcorrencia",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoDocumento",
      label: "TipoDocumento",
      name: "TipoDocumento",
      typeField: "string",
    },
  ],
};

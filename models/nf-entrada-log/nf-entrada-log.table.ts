import { TTableDef } from "@mono/types";

export const nf_entrada_log: TTableDef = {
  database: "plano",
  table: "NfLogConferencia",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "filial_id",
      primaryKey: true,
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "nota_id",
      primaryKey: true,
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "serie_id",
      primaryKey: true,
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "fornecedor_id",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "data",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "usuario",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Operacao",
      label: "Operacao",
      name: "operacao",
      typeField: "string",
      size: 1024,
      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "modelo_id",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
  ],
};

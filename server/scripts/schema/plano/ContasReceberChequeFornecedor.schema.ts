import { TTableDef } from "@/types/model";

export const ContasReceberChequeFornecedor: TTableDef = {
  database: "plano",
  table: "ContasReceberChequeFornecedor",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDocumento",
      label: "NumDocumento",
      name: "NumDocumento",
      typeField: "int",

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
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SiglaDocumento",
      label: "SiglaDocumento",
      name: "SiglaDocumento",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ItemDocumento",
      label: "ItemDocumento",
      name: "ItemDocumento",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdEmpresaContasPagar",
      label: "CdEmpresaContasPagar",
      name: "CdEmpresaContasPagar",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilialContasPagar",
      label: "CdFilialContasPagar",
      name: "CdFilialContasPagar",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFornecedorContasPagar",
      label: "CdFornecedorContasPagar",
      name: "CdFornecedorContasPagar",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDocumentoContasPagar",
      label: "NumDocumentoContasPagar",
      name: "NumDocumentoContasPagar",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SerieContasPagar",
      label: "SerieContasPagar",
      name: "SerieContasPagar",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ModeloContasPagar",
      label: "ModeloContasPagar",
      name: "ModeloContasPagar",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ItemDocumentoContasPagar",
      label: "ItemDocumentoContasPagar",
      name: "ItemDocumentoContasPagar",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtInclusao",
      label: "DtInclusao",
      name: "DtInclusao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};

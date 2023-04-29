import { TTableDef } from "@mono/types/model";

export const ItemMapaEntrega: TTableDef = {
  database: "plano",
  table: "ItemMapaEntrega",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgSomenteEntrega",
      label: "FgSomenteEntrega",
      name: "FgSomenteEntrega",
      typeField: "string",
      size: 1,
    },
    {
      field: "VlTroco",
      label: "VlTroco",
      name: "VlTroco",
      typeField: "float",
      size: 8,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
      size: 4,
    },
    {
      field: "FgDocumentoPa",
      label: "FgDocumentoPa",
      name: "FgDocumentoPa",
      typeField: "string",
      size: 1,
    },
    {
      field: "NumPDV",
      label: "NumPDV",
      name: "NumPDV",
      typeField: "int",
      size: 2,
    },
    {
      field: "DtEmissaoDoc",
      label: "DtEmissaoDoc",
      name: "DtEmissaoDoc",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "CdFuncionario",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlDocumento",
      label: "VlDocumento",
      name: "VlDocumento",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdTipoVenda",
      label: "CdTipoVenda",
      name: "CdTipoVenda",
      typeField: "int",
      size: 4,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 2,
    },
    {
      field: "VlTaxas",
      label: "VlTaxas",
      name: "VlTaxas",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "SiglaDoc",
      label: "SiglaDoc",
      name: "SiglaDoc",
      typeField: "string",
      size: 4,
      allowNull: false,
    },
    {
      field: "ItemDoc",
      label: "ItemDoc",
      name: "ItemDoc",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DtAcerto",
      label: "DtAcerto",
      name: "DtAcerto",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdUsuarioAce",
      label: "CdUsuarioAce",
      name: "CdUsuarioAce",
      typeField: "string",
      size: 10,
    },
    {
      field: "FgBuscaReceita",
      label: "FgBuscaReceita",
      name: "FgBuscaReceita",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgDocumentoPago",
      label: "FgDocumentoPago",
      name: "FgDocumentoPago",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgDocumentoRemunerado",
      label: "FgDocumentoRemunerado",
      name: "FgDocumentoRemunerado",
      typeField: "string",
      size: 1,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
  ],
};

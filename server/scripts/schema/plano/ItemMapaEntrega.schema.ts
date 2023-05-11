import { TTableDef } from "@/types/model";

export const ItemMapaEntrega: TTableDef = {
  database: "plano",
  table: "ItemMapaEntrega",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
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
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
    },
    {
      field: "FgSomenteEntrega",
      label: "FgSomenteEntrega",
      name: "FgSomenteEntrega",
      typeField: "string",
    },
    {
      field: "VlTroco",
      label: "VlTroco",
      name: "VlTroco",
      typeField: "float",
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
    },
    {
      field: "FgDocumentoPa",
      label: "FgDocumentoPa",
      name: "FgDocumentoPa",
      typeField: "string",
    },
    {
      field: "NumPDV",
      label: "NumPDV",
      name: "NumPDV",
      typeField: "int",
    },
    {
      field: "DtEmissaoDoc",
      label: "DtEmissaoDoc",
      name: "DtEmissaoDoc",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "CdFuncionario",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlDocumento",
      label: "VlDocumento",
      name: "VlDocumento",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdTipoVenda",
      label: "CdTipoVenda",
      name: "CdTipoVenda",
      typeField: "int",
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
    },
    {
      field: "VlTaxas",
      label: "VlTaxas",
      name: "VlTaxas",
      typeField: "float",

      scale: 4,
    },
    {
      field: "SiglaDoc",
      label: "SiglaDoc",
      name: "SiglaDoc",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ItemDoc",
      label: "ItemDoc",
      name: "ItemDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtAcerto",
      label: "DtAcerto",
      name: "DtAcerto",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdUsuarioAce",
      label: "CdUsuarioAce",
      name: "CdUsuarioAce",
      typeField: "string",
    },
    {
      field: "FgBuscaReceita",
      label: "FgBuscaReceita",
      name: "FgBuscaReceita",
      typeField: "string",
    },
    {
      field: "FgDocumentoPago",
      label: "FgDocumentoPago",
      name: "FgDocumentoPago",
      typeField: "string",
    },
    {
      field: "FgDocumentoRemunerado",
      label: "FgDocumentoRemunerado",
      name: "FgDocumentoRemunerado",
      typeField: "string",
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
  ],
};

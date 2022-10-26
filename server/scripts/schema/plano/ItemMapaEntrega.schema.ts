import { TEntity } from "../../../../types";

export const ItemMapaEntrega: TEntity = {
  database: "plano",
  table: "ItemMapaEntrega",
  schema: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      type: "string",
      size: 1,
    },
    {
      field: "FgSomenteEntrega",
      label: "FgSomenteEntrega",
      name: "FgSomenteEntrega",
      type: "string",
      size: 1,
    },
    {
      field: "VlTroco",
      label: "VlTroco",
      name: "VlTroco",
      type: "float",
      size: 8,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      type: "int",
      size: 4,
    },
    {
      field: "FgDocumentoPa",
      label: "FgDocumentoPa",
      name: "FgDocumentoPa",
      type: "string",
      size: 1,
    },
    {
      field: "NumPDV",
      label: "NumPDV",
      name: "NumPDV",
      type: "int",
      size: 2,
    },
    {
      field: "DtEmissaoDoc",
      label: "DtEmissaoDoc",
      name: "DtEmissaoDoc",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "CdFuncionario",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlDocumento",
      label: "VlDocumento",
      name: "VlDocumento",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdTipoVenda",
      label: "CdTipoVenda",
      name: "CdTipoVenda",
      type: "int",
      size: 4,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 2,
    },
    {
      field: "VlTaxas",
      label: "VlTaxas",
      name: "VlTaxas",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "SiglaDoc",
      label: "SiglaDoc",
      name: "SiglaDoc",
      type: "string",
      size: 4,
      allowNull: false,
    },
    {
      field: "ItemDoc",
      label: "ItemDoc",
      name: "ItemDoc",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DtAcerto",
      label: "DtAcerto",
      name: "DtAcerto",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdUsuarioAce",
      label: "CdUsuarioAce",
      name: "CdUsuarioAce",
      type: "string",
      size: 10,
    },
    {
      field: "FgBuscaReceita",
      label: "FgBuscaReceita",
      name: "FgBuscaReceita",
      type: "string",
      size: 1,
    },
    {
      field: "FgDocumentoPago",
      label: "FgDocumentoPago",
      name: "FgDocumentoPago",
      type: "string",
      size: 1,
    },
    {
      field: "FgDocumentoRemunerado",
      label: "FgDocumentoRemunerado",
      name: "FgDocumentoRemunerado",
      type: "string",
      size: 1,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      type: "string",
      size: 3,
      allowNull: false,
    },
  ],
};
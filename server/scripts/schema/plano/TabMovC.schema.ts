import { TTableDef } from "@/types/model";

export const TabMovC: TTableDef = {
  database: "plano",
  table: "TabMovC",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "SeqLan",
      label: "SeqLan",
      name: "SeqLan",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
    },
    {
      field: "TipDoc",
      label: "TipDoc",
      name: "TipDoc",
      typeField: "string",
    },
    {
      field: "CdRecebimento",
      label: "CdRecebimento",
      name: "CdRecebimento",
      typeField: "int",
    },
    {
      field: "NmCartao",
      label: "NmCartao",
      name: "NmCartao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NroPDV",
      label: "NroPDV",
      name: "NroPDV",
      typeField: "int",
    },
    {
      field: "NumCartao",
      label: "NumCartao",
      name: "NumCartao",
      typeField: "string",
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Operacao",
      label: "Operacao",
      name: "Operacao",
      typeField: "string",
    },
    {
      field: "VlLancamento",
      label: "VlLancamento",
      name: "VlLancamento",
      typeField: "float",

      scale: 4,
    },
    {
      field: "TipLan",
      label: "TipLan",
      name: "TipLan",
      typeField: "string",
    },
    {
      field: "Atualizacao",
      label: "Atualizacao",
      name: "Atualizacao",
      typeField: "string",
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
    },
    {
      field: "TipoOperacao",
      label: "TipoOperacao",
      name: "TipoOperacao",
      typeField: "string",
    },
    {
      field: "FgRecebido",
      label: "FgRecebido",
      name: "FgRecebido",
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
      field: "FgPendente",
      label: "FgPendente",
      name: "FgPendente",
      typeField: "string",
    },
    {
      field: "VlComissao",
      label: "VlComissao",
      name: "VlComissao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComissao",
      label: "PercComissao",
      name: "PercComissao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Historico",
      label: "Historico",
      name: "Historico",
      typeField: "string",
    },
    {
      field: "CdSetor",
      label: "CdSetor",
      name: "CdSetor",
      typeField: "int",
    },
    {
      field: "SeqCaixa",
      label: "SeqCaixa",
      name: "SeqCaixa",
      typeField: "int",
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgMovimentoTroco",
      label: "FgMovimentoTroco",
      name: "FgMovimentoTroco",
      typeField: "string",
    },
    {
      field: "TipoDocumento",
      label: "TipoDocumento",
      name: "TipoDocumento",
      typeField: "string",
    },
  ],
};

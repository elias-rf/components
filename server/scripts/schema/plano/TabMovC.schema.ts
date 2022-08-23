import { TEntity } from "@er/types/*";

export const TabMovC: TEntity =
  {
  "database": "plano",
  "table": "TabMovC",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "DtBase",
      "label": "DtBase",
      "name": "DtBase",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "SeqLan",
      "label": "SeqLan",
      "name": "SeqLan",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Horario",
      "label": "Horario",
      "name": "Horario",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3
    },
    {
      "field": "TipDoc",
      "label": "TipDoc",
      "name": "TipDoc",
      "type": "string",
      "size": 16
    },
    {
      "field": "CdRecebimento",
      "label": "CdRecebimento",
      "name": "CdRecebimento",
      "type": "int",
      "size": 4
    },
    {
      "field": "NmCartao",
      "label": "NmCartao",
      "name": "NmCartao",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "NroPDV",
      "label": "NroPDV",
      "name": "NroPDV",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumCartao",
      "label": "NumCartao",
      "name": "NumCartao",
      "type": "string",
      "size": 20
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Operacao",
      "label": "Operacao",
      "name": "Operacao",
      "type": "string",
      "size": 15
    },
    {
      "field": "VlLancamento",
      "label": "VlLancamento",
      "name": "VlLancamento",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "TipLan",
      "label": "TipLan",
      "name": "TipLan",
      "type": "string",
      "size": 1
    },
    {
      "field": "Atualizacao",
      "label": "Atualizacao",
      "name": "Atualizacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSituacao",
      "label": "FgSituacao",
      "name": "FgSituacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoOperacao",
      "label": "TipoOperacao",
      "name": "TipoOperacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgRecebido",
      "label": "FgRecebido",
      "name": "FgRecebido",
      "type": "string",
      "size": 1
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgPendente",
      "label": "FgPendente",
      "name": "FgPendente",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlComissao",
      "label": "VlComissao",
      "name": "VlComissao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComissao",
      "label": "PercComissao",
      "name": "PercComissao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdVendedor",
      "label": "CdVendedor",
      "name": "CdVendedor",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Historico",
      "label": "Historico",
      "name": "Historico",
      "type": "string",
      "size": 512
    },
    {
      "field": "CdSetor",
      "label": "CdSetor",
      "name": "CdSetor",
      "type": "int",
      "size": 2
    },
    {
      "field": "SeqCaixa",
      "label": "SeqCaixa",
      "name": "SeqCaixa",
      "type": "int",
      "size": 2
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "NumMapa",
      "label": "NumMapa",
      "name": "NumMapa",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgMovimentoTroco",
      "label": "FgMovimentoTroco",
      "name": "FgMovimentoTroco",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoDocumento",
      "label": "TipoDocumento",
      "name": "TipoDocumento",
      "type": "string",
      "size": 1
    }
  ]
}

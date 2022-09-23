import { TEntity } from "@er/types/*";

export const TitCobr: TEntity =
  {
  "database": "plano",
  "table": "TitCobr",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NrDoc",
      "label": "NrDoc",
      "name": "NrDoc",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
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
      "field": "SiglaDoc",
      "label": "SiglaDoc",
      "name": "SiglaDoc",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "ItemDoc",
      "label": "ItemDoc",
      "name": "ItemDoc",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdAgencia",
      "label": "CdAgencia",
      "name": "CdAgencia",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdAgenciaCliente",
      "label": "CdAgenciaCliente",
      "name": "CdAgenciaCliente",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdBanco",
      "label": "CdBanco",
      "name": "CdBanco",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdBancoCliente",
      "label": "CdBancoCliente",
      "name": "CdBancoCliente",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdFuncionario",
      "label": "CdFuncionario",
      "name": "CdFuncionario",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DaEmissao",
      "label": "DaEmissao",
      "name": "DaEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DaLimDesconto",
      "label": "DaLimDesconto",
      "name": "DaLimDesconto",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DaLiqCanc",
      "label": "DaLiqCanc",
      "name": "DaLiqCanc",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DaRemCob",
      "label": "DaRemCob",
      "name": "DaRemCob",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DaVencto",
      "label": "DaVencto",
      "name": "DaVencto",
      "type": "datetime",
      "size": 8,
      "scale": 3
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
      "field": "FgBloqueto",
      "label": "FgBloqueto",
      "name": "FgBloqueto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCobranca",
      "label": "FgCobranca",
      "name": "FgCobranca",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDuplicata",
      "label": "FgDuplicata",
      "name": "FgDuplicata",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFatura",
      "label": "FgFatura",
      "name": "FgFatura",
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
      "field": "Motivo",
      "label": "Motivo",
      "name": "Motivo",
      "type": "string",
      "size": 40
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
      "field": "NossoNr",
      "label": "NossoNr",
      "name": "NossoNr",
      "type": "string",
      "size": 32
    },
    {
      "field": "NossoNumero",
      "label": "NossoNumero",
      "name": "NossoNumero",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumCheque",
      "label": "NumCheque",
      "name": "NumCheque",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumConta",
      "label": "NumConta",
      "name": "NumConta",
      "type": "string",
      "size": 12
    },
    {
      "field": "SgFormaCob",
      "label": "SgFormaCob",
      "name": "SgFormaCob",
      "type": "string",
      "size": 3
    },
    {
      "field": "VlAmortizado",
      "label": "VlAmortizado",
      "name": "VlAmortizado",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlDescNegociado",
      "label": "VlDescNegociado",
      "name": "VlDescNegociado",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlDesconto",
      "label": "VlDesconto",
      "name": "VlDesconto",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlEstorno",
      "label": "VlEstorno",
      "name": "VlEstorno",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlJuroDiaAtr",
      "label": "VlJuroDiaAtr",
      "name": "VlJuroDiaAtr",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlTitulo",
      "label": "VlTitulo",
      "name": "VlTitulo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgTipoCarteira",
      "label": "FgTipoCarteira",
      "name": "FgTipoCarteira",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAceite",
      "label": "FgAceite",
      "name": "FgAceite",
      "type": "string",
      "size": 1
    },
    {
      "field": "PracaCompensacao",
      "label": "PracaCompensacao",
      "name": "PracaCompensacao",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumPDV",
      "label": "NumPDV",
      "name": "NumPDV",
      "type": "int",
      "size": 4
    },
    {
      "field": "PrazoCompensacao",
      "label": "PrazoCompensacao",
      "name": "PrazoCompensacao",
      "type": "int",
      "size": 4
    },
    {
      "field": "DtCancelamento",
      "label": "DtCancelamento",
      "name": "DtCancelamento",
      "type": "datetime",
      "size": 8,
      "scale": 3
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
      "field": "CdDepositario",
      "label": "CdDepositario",
      "name": "CdDepositario",
      "type": "int",
      "size": 2
    },
    {
      "field": "NumMapaEntrega",
      "label": "NumMapaEntrega",
      "name": "NumMapaEntrega",
      "type": "int",
      "size": 4
    },
    {
      "field": "DtAcertoMapaEntrega",
      "label": "DtAcertoMapaEntrega",
      "name": "DtAcertoMapaEntrega",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "CdCarteira",
      "label": "CdCarteira",
      "name": "CdCarteira",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdComprador",
      "label": "CdComprador",
      "name": "CdComprador",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgReceita",
      "label": "FgReceita",
      "name": "FgReceita",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumPedido",
      "label": "NumPedido",
      "name": "NumPedido",
      "type": "float",
      "size": 8
    },
    {
      "field": "SeqCaixa",
      "label": "SeqCaixa",
      "name": "SeqCaixa",
      "type": "int",
      "size": 2
    },
    {
      "field": "TarjaCheque",
      "label": "TarjaCheque",
      "name": "TarjaCheque",
      "type": "string",
      "size": 64
    },
    {
      "field": "NumAutCartao",
      "label": "NumAutCartao",
      "name": "NumAutCartao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdVendedorExtra",
      "label": "CdVendedorExtra",
      "name": "CdVendedorExtra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumeroFatura",
      "label": "NumeroFatura",
      "name": "NumeroFatura",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "TipoDocFatura",
      "label": "TipoDocFatura",
      "name": "TipoDocFatura",
      "type": "string",
      "size": 3
    },
    {
      "field": "PercMultaAtraso",
      "label": "PercMultaAtraso",
      "name": "PercMultaAtraso",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Usuario",
      "label": "Usuario",
      "name": "Usuario",
      "type": "string",
      "size": 16
    },
    {
      "field": "TipoOperacaoCartao",
      "label": "TipoOperacaoCartao",
      "name": "TipoOperacaoCartao",
      "type": "string",
      "size": 1
    },
    {
      "field": "OrigemLancamento",
      "label": "OrigemLancamento",
      "name": "OrigemLancamento",
      "type": "string",
      "size": 16
    },
    {
      "field": "VlJuros",
      "label": "VlJuros",
      "name": "VlJuros",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgCompensar",
      "label": "FgCompensar",
      "name": "FgCompensar",
      "type": "string",
      "size": 1
    },
    {
      "field": "DtUltimoEnvioEmailCR",
      "label": "DtUltimoEnvioEmailCR",
      "name": "DtUltimoEnvioEmailCR",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgEmailAVencer",
      "label": "FgEmailAVencer",
      "name": "FgEmailAVencer",
      "type": "string",
      "size": 1
    }
  ]
}
import { TTableDef } from "@/types";

export const receber: TTableDef = {
  database: "plano",
  table: "TitCobr",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "filial_id",
      typeField: "int",

      allowNull: false,
      primaryKey: true,
    },
    {
      field: "NrDoc",
      label: "NrDoc",
      name: "doc_id",
      typeField: "float",

      scale: 4,
      allowNull: false,
      primaryKey: true,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "serie",
      typeField: "string",

      allowNull: false,
      primaryKey: true,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "modelo",
      typeField: "string",

      allowNull: false,
      primaryKey: true,
    },
    {
      field: "SiglaDoc",
      label: "SiglaDoc",
      name: "sigla_doc",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ItemDoc",
      label: "ItemDoc",
      name: "item_doc",
      typeField: "int",

      allowNull: false,
      primaryKey: true,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "agencia_id",
      typeField: "int",
    },
    {
      field: "CdAgenciaCliente",
      label: "CdAgenciaCliente",
      name: "agencia_cliente_id",
      typeField: "int",
    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "banco_id",
      typeField: "int",
    },
    {
      field: "CdBancoCliente",
      label: "CdBancoCliente",
      name: "cliente_banco_id",
      typeField: "int",
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "cliente_id",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "funcionario_id",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DaEmissao",
      label: "DaEmissao",
      name: "data_emissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DaLimDesconto",
      label: "DaLimDesconto",
      name: "data_limite_desconto",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DaLiqCanc",
      label: "DaLiqCanc",
      name: "data_liquidacao_cancelamento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DaRemCob",
      label: "DaRemCob",
      name: "data_remessa_cobranca",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DaVencto",
      label: "DaVencto",
      name: "data_vencimento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "data_ultima_alteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgBloqueto",
      label: "FgBloqueto",
      name: "FgBloqueto",
      typeField: "string",
    },
    {
      field: "FgCobranca",
      label: "FgCobranca",
      name: "FgCobranca",
      typeField: "string",
    },
    {
      field: "FgDuplicata",
      label: "FgDuplicata",
      name: "FgDuplicata",
      typeField: "string",
    },
    {
      field: "FgFatura",
      label: "FgFatura",
      name: "FgFatura",
      typeField: "string",
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      typeField: "string",
    },
    {
      field: "NmCartao",
      label: "NmCartao",
      name: "NmCartao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NossoNr",
      label: "NossoNr",
      name: "NossoNr",
      typeField: "string",
    },
    {
      field: "NossoNumero",
      label: "NossoNumero",
      name: "NossoNumero",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumCheque",
      label: "NumCheque",
      name: "NumCheque",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",
    },
    {
      field: "SgFormaCob",
      label: "SgFormaCob",
      name: "SgFormaCob",
      typeField: "string",
    },
    {
      field: "VlAmortizado",
      label: "VlAmortizado",
      name: "VlAmortizado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlDescNegociado",
      label: "VlDescNegociado",
      name: "VlDescNegociado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlEstorno",
      label: "VlEstorno",
      name: "VlEstorno",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlJuroDiaAtr",
      label: "VlJuroDiaAtr",
      name: "VlJuroDiaAtr",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlTitulo",
      label: "VlTitulo",
      name: "VlTitulo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgTipoCarteira",
      label: "FgTipoCarteira",
      name: "FgTipoCarteira",
      typeField: "string",
    },
    {
      field: "FgAceite",
      label: "FgAceite",
      name: "FgAceite",
      typeField: "string",
    },
    {
      field: "PracaCompensacao",
      label: "PracaCompensacao",
      name: "PracaCompensacao",
      typeField: "int",
    },
    {
      field: "NumPDV",
      label: "NumPDV",
      name: "NumPDV",
      typeField: "int",
    },
    {
      field: "PrazoCompensacao",
      label: "PrazoCompensacao",
      name: "PrazoCompensacao",
      typeField: "int",
    },
    {
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdDepositario",
      label: "CdDepositario",
      name: "CdDepositario",
      typeField: "int",
    },
    {
      field: "NumMapaEntrega",
      label: "NumMapaEntrega",
      name: "NumMapaEntrega",
      typeField: "int",
    },
    {
      field: "DtAcertoMapaEntrega",
      label: "DtAcertoMapaEntrega",
      name: "DtAcertoMapaEntrega",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdCarteira",
      label: "CdCarteira",
      name: "CdCarteira",
      typeField: "int",
    },
    {
      field: "CdComprador",
      label: "CdComprador",
      name: "CdComprador",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgReceita",
      label: "FgReceita",
      name: "FgReceita",
      typeField: "string",
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",
    },
    {
      field: "SeqCaixa",
      label: "SeqCaixa",
      name: "SeqCaixa",
      typeField: "int",
    },
    {
      field: "TarjaCheque",
      label: "TarjaCheque",
      name: "TarjaCheque",
      typeField: "string",
    },
    {
      field: "NumAutCartao",
      label: "NumAutCartao",
      name: "NumAutCartao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdVendedorExtra",
      label: "CdVendedorExtra",
      name: "CdVendedorExtra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumeroFatura",
      label: "NumeroFatura",
      name: "NumeroFatura",
      typeField: "float",

      scale: 4,
    },
    {
      field: "TipoDocFatura",
      label: "TipoDocFatura",
      name: "TipoDocFatura",
      typeField: "string",
    },
    {
      field: "PercMultaAtraso",
      label: "PercMultaAtraso",
      name: "PercMultaAtraso",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",
    },
    {
      field: "TipoOperacaoCartao",
      label: "TipoOperacaoCartao",
      name: "TipoOperacaoCartao",
      typeField: "string",
    },
    {
      field: "OrigemLancamento",
      label: "OrigemLancamento",
      name: "OrigemLancamento",
      typeField: "string",
    },
    {
      field: "VlJuros",
      label: "VlJuros",
      name: "VlJuros",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgCompensar",
      label: "FgCompensar",
      name: "FgCompensar",
      typeField: "string",
    },
    {
      field: "DtUltimoEnvioEmailCR",
      label: "DtUltimoEnvioEmailCR",
      name: "DtUltimoEnvioEmailCR",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgEmailAVencer",
      label: "FgEmailAVencer",
      name: "FgEmailAVencer",
      typeField: "string",
    },
  ],
};

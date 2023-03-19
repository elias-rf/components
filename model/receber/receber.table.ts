import { TTableDef } from "../../types";

export const receber: TTableDef = {
  database: "plano",
  table: "TitCobr",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "filial_id",
      typeField: "int",
      size: 4,
      allowNull: false,
      primaryKey: true,
    },
    {
      field: "NrDoc",
      label: "NrDoc",
      name: "doc_id",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
      primaryKey: true,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "serie",
      typeField: "string",
      size: 3,
      allowNull: false,
      primaryKey: true,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
      primaryKey: true,
    },
    {
      field: "SiglaDoc",
      label: "SiglaDoc",
      name: "sigla_doc",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "ItemDoc",
      label: "ItemDoc",
      name: "item_doc",
      typeField: "int",
      size: 4,
      allowNull: false,
      primaryKey: true,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "agencia_id",
      typeField: "int",
      size: 4,
    },
    {
      field: "CdAgenciaCliente",
      label: "CdAgenciaCliente",
      name: "agencia_cliente_id",
      typeField: "int",
      size: 4,
    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "banco_id",
      typeField: "int",
      size: 4,
    },
    {
      field: "CdBancoCliente",
      label: "CdBancoCliente",
      name: "cliente_banco_id",
      typeField: "int",
      size: 4,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "cliente_id",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdFuncionario",
      label: "CdFuncionario",
      name: "funcionario_id",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DaEmissao",
      label: "DaEmissao",
      name: "data_emissao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DaLimDesconto",
      label: "DaLimDesconto",
      name: "data_limite_desconto",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DaLiqCanc",
      label: "DaLiqCanc",
      name: "data_liquidacao_cancelamento",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DaRemCob",
      label: "DaRemCob",
      name: "data_remessa_cobranca",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DaVencto",
      label: "DaVencto",
      name: "data_vencimento",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "data_ultima_alteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "FgBloqueto",
      label: "FgBloqueto",
      name: "FgBloqueto",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgCobranca",
      label: "FgCobranca",
      name: "FgCobranca",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgDuplicata",
      label: "FgDuplicata",
      name: "FgDuplicata",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgFatura",
      label: "FgFatura",
      name: "FgFatura",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgSituacao",
      label: "FgSituacao",
      name: "FgSituacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      typeField: "string",
      size: 40,
    },
    {
      field: "NmCartao",
      label: "NmCartao",
      name: "NmCartao",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "NossoNr",
      label: "NossoNr",
      name: "NossoNr",
      typeField: "string",
      size: 32,
    },
    {
      field: "NossoNumero",
      label: "NossoNumero",
      name: "NossoNumero",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumCheque",
      label: "NumCheque",
      name: "NumCheque",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",
      size: 12,
    },
    {
      field: "SgFormaCob",
      label: "SgFormaCob",
      name: "SgFormaCob",
      typeField: "string",
      size: 3,
    },
    {
      field: "VlAmortizado",
      label: "VlAmortizado",
      name: "VlAmortizado",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlDescNegociado",
      label: "VlDescNegociado",
      name: "VlDescNegociado",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlDesconto",
      label: "VlDesconto",
      name: "VlDesconto",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlEstorno",
      label: "VlEstorno",
      name: "VlEstorno",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlJuroDiaAtr",
      label: "VlJuroDiaAtr",
      name: "VlJuroDiaAtr",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlTitulo",
      label: "VlTitulo",
      name: "VlTitulo",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgTipoCarteira",
      label: "FgTipoCarteira",
      name: "FgTipoCarteira",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgAceite",
      label: "FgAceite",
      name: "FgAceite",
      typeField: "string",
      size: 1,
    },
    {
      field: "PracaCompensacao",
      label: "PracaCompensacao",
      name: "PracaCompensacao",
      typeField: "int",
      size: 4,
    },
    {
      field: "NumPDV",
      label: "NumPDV",
      name: "NumPDV",
      typeField: "int",
      size: 4,
    },
    {
      field: "PrazoCompensacao",
      label: "PrazoCompensacao",
      name: "PrazoCompensacao",
      typeField: "int",
      size: 4,
    },
    {
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdDepositario",
      label: "CdDepositario",
      name: "CdDepositario",
      typeField: "int",
      size: 2,
    },
    {
      field: "NumMapaEntrega",
      label: "NumMapaEntrega",
      name: "NumMapaEntrega",
      typeField: "int",
      size: 4,
    },
    {
      field: "DtAcertoMapaEntrega",
      label: "DtAcertoMapaEntrega",
      name: "DtAcertoMapaEntrega",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdCarteira",
      label: "CdCarteira",
      name: "CdCarteira",
      typeField: "int",
      size: 2,
    },
    {
      field: "CdComprador",
      label: "CdComprador",
      name: "CdComprador",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgReceita",
      label: "FgReceita",
      name: "FgReceita",
      typeField: "string",
      size: 1,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "float",
      size: 8,
    },
    {
      field: "SeqCaixa",
      label: "SeqCaixa",
      name: "SeqCaixa",
      typeField: "int",
      size: 2,
    },
    {
      field: "TarjaCheque",
      label: "TarjaCheque",
      name: "TarjaCheque",
      typeField: "string",
      size: 64,
    },
    {
      field: "NumAutCartao",
      label: "NumAutCartao",
      name: "NumAutCartao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdVendedorExtra",
      label: "CdVendedorExtra",
      name: "CdVendedorExtra",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumeroFatura",
      label: "NumeroFatura",
      name: "NumeroFatura",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TipoDocFatura",
      label: "TipoDocFatura",
      name: "TipoDocFatura",
      typeField: "string",
      size: 3,
    },
    {
      field: "PercMultaAtraso",
      label: "PercMultaAtraso",
      name: "PercMultaAtraso",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",
      size: 16,
    },
    {
      field: "TipoOperacaoCartao",
      label: "TipoOperacaoCartao",
      name: "TipoOperacaoCartao",
      typeField: "string",
      size: 1,
    },
    {
      field: "OrigemLancamento",
      label: "OrigemLancamento",
      name: "OrigemLancamento",
      typeField: "string",
      size: 16,
    },
    {
      field: "VlJuros",
      label: "VlJuros",
      name: "VlJuros",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgCompensar",
      label: "FgCompensar",
      name: "FgCompensar",
      typeField: "string",
      size: 1,
    },
    {
      field: "DtUltimoEnvioEmailCR",
      label: "DtUltimoEnvioEmailCR",
      name: "DtUltimoEnvioEmailCR",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "FgEmailAVencer",
      label: "FgEmailAVencer",
      name: "FgEmailAVencer",
      typeField: "string",
      size: 1,
    },
  ],
};

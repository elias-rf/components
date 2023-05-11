import { TTableDef } from "@/types/model";

export const Filial: TTableDef = {
  database: "plano",
  table: "Filial",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "Filial_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "RzSocial",
      label: "RzSocial",
      name: "RzSocial",
      typeField: "string",
    },
    {
      field: "NmFilial",
      label: "NmFilial",
      name: "NmFilial",
      typeField: "string",
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
      typeField: "string",
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",
    },
    {
      field: "Uf",
      label: "Uf",
      name: "Uf",
      typeField: "string",
    },
    {
      field: "Cep",
      label: "Cep",
      name: "Cep",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CGC",
      label: "CGC",
      name: "CGC",
      typeField: "float",

      scale: 4,
    },
    {
      field: "InscEst",
      label: "InscEst",
      name: "InscEst",
      typeField: "string",
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",
    },
    {
      field: "Fax",
      label: "Fax",
      name: "Fax",
      typeField: "string",
    },
    {
      field: "AliqIRRF",
      label: "AliqIRRF",
      name: "AliqIRRF",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliqISS",
      label: "AliqISS",
      name: "AliqISS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliqlSS",
      label: "AliqlSS",
      name: "AliqlSS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdClienteAssociado",
      label: "CdClienteAssociado",
      name: "CdClienteAssociado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdFornecAssociado",
      label: "CdFornecAssociado",
      name: "CdFornecAssociado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Comissao",
      label: "Comissao",
      name: "Comissao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Diversos",
      label: "Diversos",
      name: "Diversos",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CustoFinanceiro",
      label: "CustoFinanceiro",
      name: "CustoFinanceiro",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Despesas",
      label: "Despesas",
      name: "Despesas",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Publicidade",
      label: "Publicidade",
      name: "Publicidade",
      typeField: "float",

      scale: 4,
    },
    {
      field: "TaxaJurosDia",
      label: "TaxaJurosDia",
      name: "TaxaJurosDia",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DiasCarencia",
      label: "DiasCarencia",
      name: "DiasCarencia",
      typeField: "int",
    },
    {
      field: "FgBloqueado",
      label: "FgBloqueado",
      name: "FgBloqueado",
      typeField: "string",
    },
    {
      field: "FgContribuinteFinal",
      label: "FgContribuinteFinal",
      name: "FgContribuinteFinal",
      typeField: "string",
    },
    {
      field: "FgSubstituicao",
      label: "FgSubstituicao",
      name: "FgSubstituicao",
      typeField: "string",
    },
    {
      field: "InscMunicipal",
      label: "InscMunicipal",
      name: "InscMunicipal",
      typeField: "string",
    },
    {
      field: "NumUltFolhaInventario",
      label: "NumUltFolhaInventario",
      name: "NumUltFolhaInventario",
      typeField: "int",
    },
    {
      field: "FgDestaqueImposto",
      label: "FgDestaqueImposto",
      name: "FgDestaqueImposto",
      typeField: "string",
    },
    {
      field: "Registro",
      label: "Registro",
      name: "Registro",
      typeField: "string",
    },
    {
      field: "Socio",
      label: "Socio",
      name: "Socio",
      typeField: "string",
    },
    {
      field: "CPFsocio",
      label: "CPFsocio",
      name: "CPFsocio",
      typeField: "string",
    },
    {
      field: "AreaAtuacao",
      label: "AreaAtuacao",
      name: "AreaAtuacao",
      typeField: "string",
    },
    {
      field: "NumLicencaFuncionamento",
      label: "NumLicencaFuncionamento",
      name: "NumLicencaFuncionamento",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ResponsavelTecnico",
      label: "ResponsavelTecnico",
      name: "ResponsavelTecnico",
      typeField: "string",
    },
    {
      field: "CRFRespTecnico",
      label: "CRFRespTecnico",
      name: "CRFRespTecnico",
      typeField: "string",
    },
    {
      field: "AssistenteTecnico",
      label: "AssistenteTecnico",
      name: "AssistenteTecnico",
      typeField: "string",
    },
    {
      field: "CRFAssistTecnico",
      label: "CRFAssistTecnico",
      name: "CRFAssistTecnico",
      typeField: "string",
    },
    {
      field: "DistritoSanitario",
      label: "DistritoSanitario",
      name: "DistritoSanitario",
      typeField: "string",
    },
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "CdCidade",
      typeField: "int",
    },
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
    },
    {
      field: "FgDeposito",
      label: "FgDeposito",
      name: "FgDeposito",
      typeField: "string",
    },
    {
      field: "Funcionamento",
      label: "Funcionamento",
      name: "Funcionamento",
      typeField: "string",
    },
    {
      field: "PercAtacadoTransf",
      label: "PercAtacadoTransf",
      name: "PercAtacadoTransf",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercPerdaProducao",
      label: "PercPerdaProducao",
      name: "PercPerdaProducao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercMedioImpostoVenda",
      label: "PercMedioImpostoVenda",
      name: "PercMedioImpostoVenda",
      typeField: "float",

      scale: 4,
    },
    {
      field: "MediaEntrega",
      label: "MediaEntrega",
      name: "MediaEntrega",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercAcrescControlado",
      label: "PercAcrescControlado",
      name: "PercAcrescControlado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercCustoFinanProducao",
      label: "PercCustoFinanProducao",
      name: "PercCustoFinanProducao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercMedioComisPJ",
      label: "PercMedioComisPJ",
      name: "PercMedioComisPJ",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercMedioComisPromotor",
      label: "PercMedioComisPromotor",
      name: "PercMedioComisPromotor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "LimiteTaxaEntrega",
      label: "LimiteTaxaEntrega",
      name: "LimiteTaxaEntrega",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlTaxaEntrega",
      label: "VlTaxaEntrega",
      name: "VlTaxaEntrega",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ModeloNf",
      label: "ModeloNf",
      name: "ModeloNf",
      typeField: "string",
    },
    {
      field: "PercPesoTransferencia",
      label: "PercPesoTransferencia",
      name: "PercPesoTransferencia",
      typeField: "float",

      scale: 4,
    },
    {
      field: "MsgPadroPedido",
      label: "MsgPadroPedido",
      name: "MsgPadroPedido",
      typeField: "string",
    },
    {
      field: "MsgClienteContribuinte",
      label: "MsgClienteContribuinte",
      name: "MsgClienteContribuinte",
      typeField: "string",
    },
    {
      field: "MsgClienteNaoContribuinte",
      label: "MsgClienteNaoContribuinte",
      name: "MsgClienteNaoContribuinte",
      typeField: "string",
    },
    {
      field: "MsgPublicPedido",
      label: "MsgPublicPedido",
      name: "MsgPublicPedido",
      typeField: "string",
    },
    {
      field: "AliqIN381",
      label: "AliqIN381",
      name: "AliqIN381",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlMinimoIN381",
      label: "VlMinimoIN381",
      name: "VlMinimoIN381",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlMinimoIR",
      label: "VlMinimoIR",
      name: "VlMinimoIR",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PeriodoIR",
      label: "PeriodoIR",
      name: "PeriodoIR",
      typeField: "string",
    },
    {
      field: "PeriodoIN",
      label: "PeriodoIN",
      name: "PeriodoIN",
      typeField: "string",
    },
    {
      field: "MsgClienteOptanteSimples",
      label: "MsgClienteOptanteSimples",
      name: "MsgClienteOptanteSimples",
      typeField: "string",
    },
    {
      field: "FgDeduzISS",
      label: "FgDeduzISS",
      name: "FgDeduzISS",
      typeField: "string",
    },
    {
      field: "QtdadeCaracterRodape",
      label: "QtdadeCaracterRodape",
      name: "QtdadeCaracterRodape",
      typeField: "int",
    },
    {
      field: "PercPisEntrada",
      label: "PercPisEntrada",
      name: "PercPisEntrada",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtInicioCustoMedio",
      label: "DtInicioCustoMedio",
      name: "DtInicioCustoMedio",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgTipoEmpresa",
      label: "FgTipoEmpresa",
      name: "FgTipoEmpresa",
      typeField: "string",
    },
    {
      field: "Email",
      label: "Email",
      name: "Email",
      typeField: "string",
    },
    {
      field: "DtUltBloqCli",
      label: "DtUltBloqCli",
      name: "DtUltBloqCli",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "NumUltLote",
      label: "NumUltLote",
      name: "NumUltLote",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CPFRespTecnico",
      label: "CPFRespTecnico",
      name: "CPFRespTecnico",
      typeField: "float",
    },
    {
      field: "NumAutorizacaoFuncionamento",
      label: "NumAutorizacaoFuncionamento",
      name: "NumAutorizacaoFuncionamento",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumAutorizacaoEspecial",
      label: "NumAutorizacaoEspecial",
      name: "NumAutorizacaoEspecial",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgExibeEstoque",
      label: "FgExibeEstoque",
      name: "FgExibeEstoque",
      typeField: "string",
    },
    {
      field: "CdFilialCentral",
      label: "CdFilialCentral",
      name: "CdFilialCentral",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercPisEntradaNeutro",
      label: "PercPisEntradaNeutro",
      name: "PercPisEntradaNeutro",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercPisEntradaPositivo",
      label: "PercPisEntradaPositivo",
      name: "PercPisEntradaPositivo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercPisEntradaNegativo",
      label: "PercPisEntradaNegativo",
      name: "PercPisEntradaNegativo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumEndereco",
      label: "NumEndereco",
      name: "NumEndereco",
      typeField: "int",
    },
    {
      field: "CompEndereco",
      label: "CompEndereco",
      name: "CompEndereco",
      typeField: "string",
    },
    {
      field: "InscSuframa",
      label: "InscSuframa",
      name: "InscSuframa",
      typeField: "string",
    },
    {
      field: "PercCofinsSaida",
      label: "PercCofinsSaida",
      name: "PercCofinsSaida",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercPisSaida",
      label: "PercPisSaida",
      name: "PercPisSaida",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgNFe",
      label: "FgNFe",
      name: "FgNFe",
      typeField: "string",
    },
    {
      field: "FgOptanteSimples",
      label: "FgOptanteSimples",
      name: "FgOptanteSimples",
      typeField: "string",
    },
    {
      field: "PercCofinsEntradaNeutro",
      label: "PercCofinsEntradaNeutro",
      name: "PercCofinsEntradaNeutro",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercCofinsEntradaPositivo",
      label: "PercCofinsEntradaPositivo",
      name: "PercCofinsEntradaPositivo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercCofinsEntradaNegativo",
      label: "PercCofinsEntradaNegativo",
      name: "PercCofinsEntradaNegativo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercCofinsEntrada",
      label: "PercCofinsEntrada",
      name: "PercCofinsEntrada",
      typeField: "float",

      scale: 4,
    },
    {
      field: "EmailProcNfeContador",
      label: "EmailProcNfeContador",
      name: "EmailProcNfeContador",
      typeField: "string",
    },
    {
      field: "MsgCabecalhoPedido",
      label: "MsgCabecalhoPedido",
      name: "MsgCabecalhoPedido",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PercMinimoICMSSub",
      label: "PercMinimoICMSSub",
      name: "PercMinimoICMSSub",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CNPJCentralizador",
      label: "CNPJCentralizador",
      name: "CNPJCentralizador",
      typeField: "int",
    },
    {
      field: "IndicadorPeriodoApuracaoIPI",
      label: "IndicadorPeriodoApuracaoIPI",
      name: "IndicadorPeriodoApuracaoIPI",
      typeField: "int",
    },
    {
      field: "FgLogEtiquetaLote",
      label: "FgLogEtiquetaLote",
      name: "FgLogEtiquetaLote",
      typeField: "string",
    },
    {
      field: "PerfilApresArquivoSPED",
      label: "PerfilApresArquivoSPED",
      name: "PerfilApresArquivoSPED",
      typeField: "string",
    },
    {
      field: "IndicadorTipoAtividade",
      label: "IndicadorTipoAtividade",
      name: "IndicadorTipoAtividade",
      typeField: "string",
    },
    {
      field: "AliquotaNacional12741",
      label: "AliquotaNacional12741",
      name: "AliquotaNacional12741",
      typeField: "int",

      scale: 2,
    },
    {
      field: "AliquotaImportado12741",
      label: "AliquotaImportado12741",
      name: "AliquotaImportado12741",
      typeField: "int",

      scale: 2,
    },
    {
      field: "IndicadorTipoAtividadePISCofins",
      label: "IndicadorTipoAtividadePISCofins",
      name: "IndicadorTipoAtividadePISCofins",
      typeField: "string",
    },
    {
      field: "IndicadorNaturezaPJ",
      label: "IndicadorNaturezaPJ",
      name: "IndicadorNaturezaPJ",
      typeField: "string",
    },
    {
      field: "IndicadorIncidenciaPISCofins",
      label: "IndicadorIncidenciaPISCofins",
      name: "IndicadorIncidenciaPISCofins",
      typeField: "string",
    },
    {
      field: "IndicadorApropriacaoPISCofins",
      label: "IndicadorApropriacaoPISCofins",
      name: "IndicadorApropriacaoPISCofins",
      typeField: "string",
    },
    {
      field: "IndicadorTipoContribuicaoPISCofins",
      label: "IndicadorTipoContribuicaoPISCofins",
      name: "IndicadorTipoContribuicaoPISCofins",
      typeField: "string",
    },
    {
      field: "CdContribuicaoSocialApurada",
      label: "CdContribuicaoSocialApurada",
      name: "CdContribuicaoSocialApurada",
      typeField: "int",
    },
    {
      field: "FgNfeSe",
      label: "FgNfeSe",
      name: "FgNfeSe",
      typeField: "string",
    },
    {
      field: "CdRegimeEspecialTributacao",
      label: "CdRegimeEspecialTributacao",
      name: "CdRegimeEspecialTributacao",
      typeField: "string",
    },
    {
      field: "FgIncentivoCultural",
      label: "FgIncentivoCultural",
      name: "FgIncentivoCultural",
      typeField: "string",
    },
    {
      field: "CdTributacaoMunicipio",
      label: "CdTributacaoMunicipio",
      name: "CdTributacaoMunicipio",
      typeField: "string",
    },
    {
      field: "CdMunicipioPrestadorServico",
      label: "CdMunicipioPrestadorServico",
      name: "CdMunicipioPrestadorServico",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliquotaCSLL",
      label: "AliquotaCSLL",
      name: "AliquotaCSLL",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlMinimoCSLL",
      label: "VlMinimoCSLL",
      name: "VlMinimoCSLL",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CPFAssociado",
      label: "CPFAssociado",
      name: "CPFAssociado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CNAE",
      label: "CNAE",
      name: "CNAE",
      typeField: "string",
    },
    {
      field: "CdRegimeTributario",
      label: "CdRegimeTributario",
      name: "CdRegimeTributario",
      typeField: "int",
    },
    {
      field: "FgEtiquetaEntrega",
      label: "FgEtiquetaEntrega",
      name: "FgEtiquetaEntrega",
      typeField: "string",
    },
    {
      field: "MsgDeducaoFiscal",
      label: "MsgDeducaoFiscal",
      name: "MsgDeducaoFiscal",
      typeField: "string",
    },
    {
      field: "MsgClienteIsentoICMS",
      label: "MsgClienteIsentoICMS",
      name: "MsgClienteIsentoICMS",
      typeField: "string",
    },
    {
      field: "AliqINSS",
      label: "AliqINSS",
      name: "AliqINSS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgIsencaoFaixaReceita",
      label: "FgIsencaoFaixaReceita",
      name: "FgIsencaoFaixaReceita",
      typeField: "string",
    },
    {
      field: "AliquotaCreditoICMS",
      label: "AliquotaCreditoICMS",
      name: "AliquotaCreditoICMS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercMultaAtraso",
      label: "PercMultaAtraso",
      name: "PercMultaAtraso",
      typeField: "float",

      scale: 4,
    },
    {
      field: "QtdeDiasProtesto",
      label: "QtdeDiasProtesto",
      name: "QtdeDiasProtesto",
      typeField: "int",
    },
    {
      field: "DtUltAvisoLiberacao",
      label: "DtUltAvisoLiberacao",
      name: "DtUltAvisoLiberacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgSetorEntrega",
      label: "FgSetorEntrega",
      name: "FgSetorEntrega",
      typeField: "string",
    },
    {
      field: "FgNFCe",
      label: "FgNFCe",
      name: "FgNFCe",
      typeField: "string",
    },
    {
      field: "FgTributaPartilhaICMS",
      label: "FgTributaPartilhaICMS",
      name: "FgTributaPartilhaICMS",
      typeField: "string",
    },
    {
      field: "FgPartilhaICMSSomenteNaoPresencial",
      label: "FgPartilhaICMSSomenteNaoPresencial",
      name: "FgPartilhaICMSSomenteNaoPresencial",
      typeField: "string",
    },
    {
      field: "IndIncFisc",
      label: "IndIncFisc",
      name: "IndIncFisc",
      typeField: "int",
    },
    {
      field: "CListServ",
      label: "CListServ",
      name: "CListServ",
      typeField: "int",
    },
    {
      field: "EmailNotificacaoNFePendente",
      label: "EmailNotificacaoNFePendente",
      name: "EmailNotificacaoNFePendente",
      typeField: "string",
    },
    {
      field: "DtUltNotificacaoNFePendente",
      label: "DtUltNotificacaoNFePendente",
      name: "DtUltNotificacaoNFePendente",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgDistribuicaoEstoque",
      label: "FgDistribuicaoEstoque",
      name: "FgDistribuicaoEstoque",
      typeField: "string",
    },
    {
      field: "DtLimite",
      label: "DtLimite",
      name: "DtLimite",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "PercMargemMinima",
      label: "PercMargemMinima",
      name: "PercMargemMinima",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgICMSEfetivo",
      label: "FgICMSEfetivo",
      name: "FgICMSEfetivo",
      typeField: "string",
    },
    {
      field: "FgRespTecnico",
      label: "FgRespTecnico",
      name: "FgRespTecnico",
      typeField: "string",
    },
    {
      field: "FgSTRetidoAnt",
      label: "FgSTRetidoAnt",
      name: "FgSTRetidoAnt",
      typeField: "string",
    },
    {
      field: "DiretorioPDFBoletos",
      label: "DiretorioPDFBoletos",
      name: "DiretorioPDFBoletos",
      typeField: "string",
    },
    {
      field: "FgBoletoOnLine",
      label: "FgBoletoOnLine",
      name: "FgBoletoOnLine",
      typeField: "string",
    },
    {
      field: "ClassificacaoContribuintesIPI",
      label: "ClassificacaoContribuintesIPI",
      name: "ClassificacaoContribuintesIPI",
      typeField: "string",
    },
    {
      field: "FgRE08720",
      label: "FgRE08720",
      name: "FgRE08720",
      typeField: "string",
    },
    {
      field: "DtUltimoProcessamentoRE08720",
      label: "DtUltimoProcessamentoRE08720",
      name: "DtUltimoProcessamentoRE08720",
      typeField: "datetime",

      scale: 3,
    },
  ],
};

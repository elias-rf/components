import { TEntity } from "../../../../types";

export const Filial: TEntity = {
  database: "plano",
  table: "Filial",
  schema: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "Filial_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "RzSocial",
      label: "RzSocial",
      name: "RzSocial",
      type: "string",
      size: 40,
    },
    {
      field: "NmFilial",
      label: "NmFilial",
      name: "NmFilial",
      type: "string",
      size: 40,
    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      type: "string",
      size: 40,
    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
      type: "string",
      size: 40,
    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      type: "string",
      size: 20,
    },
    {
      field: "Uf",
      label: "Uf",
      name: "Uf",
      type: "string",
      size: 2,
    },
    {
      field: "Cep",
      label: "Cep",
      name: "Cep",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CGC",
      label: "CGC",
      name: "CGC",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "InscEst",
      label: "InscEst",
      name: "InscEst",
      type: "string",
      size: 20,
    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      type: "string",
      size: 20,
    },
    {
      field: "Fax",
      label: "Fax",
      name: "Fax",
      type: "string",
      size: 20,
    },
    {
      field: "AliqIRRF",
      label: "AliqIRRF",
      name: "AliqIRRF",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliqISS",
      label: "AliqISS",
      name: "AliqISS",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliqlSS",
      label: "AliqlSS",
      name: "AliqlSS",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdClienteAssociado",
      label: "CdClienteAssociado",
      name: "CdClienteAssociado",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdFornecAssociado",
      label: "CdFornecAssociado",
      name: "CdFornecAssociado",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Comissao",
      label: "Comissao",
      name: "Comissao",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Diversos",
      label: "Diversos",
      name: "Diversos",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CustoFinanceiro",
      label: "CustoFinanceiro",
      name: "CustoFinanceiro",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Despesas",
      label: "Despesas",
      name: "Despesas",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Publicidade",
      label: "Publicidade",
      name: "Publicidade",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TaxaJurosDia",
      label: "TaxaJurosDia",
      name: "TaxaJurosDia",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DiasCarencia",
      label: "DiasCarencia",
      name: "DiasCarencia",
      type: "int",
      size: 1,
    },
    {
      field: "FgBloqueado",
      label: "FgBloqueado",
      name: "FgBloqueado",
      type: "string",
      size: 1,
    },
    {
      field: "FgContribuinteFinal",
      label: "FgContribuinteFinal",
      name: "FgContribuinteFinal",
      type: "string",
      size: 1,
    },
    {
      field: "FgSubstituicao",
      label: "FgSubstituicao",
      name: "FgSubstituicao",
      type: "string",
      size: 1,
    },
    {
      field: "InscMunicipal",
      label: "InscMunicipal",
      name: "InscMunicipal",
      type: "string",
      size: 20,
    },
    {
      field: "NumUltFolhaInventario",
      label: "NumUltFolhaInventario",
      name: "NumUltFolhaInventario",
      type: "int",
      size: 4,
    },
    {
      field: "FgDestaqueImposto",
      label: "FgDestaqueImposto",
      name: "FgDestaqueImposto",
      type: "string",
      size: 1,
    },
    {
      field: "Registro",
      label: "Registro",
      name: "Registro",
      type: "string",
      size: 30,
    },
    {
      field: "Socio",
      label: "Socio",
      name: "Socio",
      type: "string",
      size: 30,
    },
    {
      field: "CPFsocio",
      label: "CPFsocio",
      name: "CPFsocio",
      type: "string",
      size: 30,
    },
    {
      field: "AreaAtuacao",
      label: "AreaAtuacao",
      name: "AreaAtuacao",
      type: "string",
      size: 40,
    },
    {
      field: "NumLicencaFuncionamento",
      label: "NumLicencaFuncionamento",
      name: "NumLicencaFuncionamento",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ResponsavelTecnico",
      label: "ResponsavelTecnico",
      name: "ResponsavelTecnico",
      type: "string",
      size: 30,
    },
    {
      field: "CRFRespTecnico",
      label: "CRFRespTecnico",
      name: "CRFRespTecnico",
      type: "string",
      size: 15,
    },
    {
      field: "AssistenteTecnico",
      label: "AssistenteTecnico",
      name: "AssistenteTecnico",
      type: "string",
      size: 30,
    },
    {
      field: "CRFAssistTecnico",
      label: "CRFAssistTecnico",
      name: "CRFAssistTecnico",
      type: "string",
      size: 15,
    },
    {
      field: "DistritoSanitario",
      label: "DistritoSanitario",
      name: "DistritoSanitario",
      type: "string",
      size: 30,
    },
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "CdCidade",
      type: "int",
      size: 4,
    },
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 4,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      type: "string",
      size: 1,
    },
    {
      field: "FgDeposito",
      label: "FgDeposito",
      name: "FgDeposito",
      type: "string",
      size: 1,
    },
    {
      field: "Funcionamento",
      label: "Funcionamento",
      name: "Funcionamento",
      type: "string",
      size: 1,
    },
    {
      field: "PercAtacadoTransf",
      label: "PercAtacadoTransf",
      name: "PercAtacadoTransf",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercPerdaProducao",
      label: "PercPerdaProducao",
      name: "PercPerdaProducao",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercMedioImpostoVenda",
      label: "PercMedioImpostoVenda",
      name: "PercMedioImpostoVenda",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "MediaEntrega",
      label: "MediaEntrega",
      name: "MediaEntrega",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercAcrescControlado",
      label: "PercAcrescControlado",
      name: "PercAcrescControlado",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercCustoFinanProducao",
      label: "PercCustoFinanProducao",
      name: "PercCustoFinanProducao",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercMedioComisPJ",
      label: "PercMedioComisPJ",
      name: "PercMedioComisPJ",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercMedioComisPromotor",
      label: "PercMedioComisPromotor",
      name: "PercMedioComisPromotor",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "LimiteTaxaEntrega",
      label: "LimiteTaxaEntrega",
      name: "LimiteTaxaEntrega",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlTaxaEntrega",
      label: "VlTaxaEntrega",
      name: "VlTaxaEntrega",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ModeloNf",
      label: "ModeloNf",
      name: "ModeloNf",
      type: "string",
      size: 50,
    },
    {
      field: "PercPesoTransferencia",
      label: "PercPesoTransferencia",
      name: "PercPesoTransferencia",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "MsgPadroPedido",
      label: "MsgPadroPedido",
      name: "MsgPadroPedido",
      type: "string",
      size: 1024,
    },
    {
      field: "MsgClienteContribuinte",
      label: "MsgClienteContribuinte",
      name: "MsgClienteContribuinte",
      type: "string",
      size: 80,
    },
    {
      field: "MsgClienteNaoContribuinte",
      label: "MsgClienteNaoContribuinte",
      name: "MsgClienteNaoContribuinte",
      type: "string",
      size: 80,
    },
    {
      field: "MsgPublicPedido",
      label: "MsgPublicPedido",
      name: "MsgPublicPedido",
      type: "string",
      size: 1024,
    },
    {
      field: "AliqIN381",
      label: "AliqIN381",
      name: "AliqIN381",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlMinimoIN381",
      label: "VlMinimoIN381",
      name: "VlMinimoIN381",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlMinimoIR",
      label: "VlMinimoIR",
      name: "VlMinimoIR",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PeriodoIR",
      label: "PeriodoIR",
      name: "PeriodoIR",
      type: "string",
      size: 1,
    },
    {
      field: "PeriodoIN",
      label: "PeriodoIN",
      name: "PeriodoIN",
      type: "string",
      size: 1,
    },
    {
      field: "MsgClienteOptanteSimples",
      label: "MsgClienteOptanteSimples",
      name: "MsgClienteOptanteSimples",
      type: "string",
      size: 80,
    },
    {
      field: "FgDeduzISS",
      label: "FgDeduzISS",
      name: "FgDeduzISS",
      type: "string",
      size: 1,
    },
    {
      field: "QtdadeCaracterRodape",
      label: "QtdadeCaracterRodape",
      name: "QtdadeCaracterRodape",
      type: "int",
      size: 4,
    },
    {
      field: "PercPisEntrada",
      label: "PercPisEntrada",
      name: "PercPisEntrada",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtInicioCustoMedio",
      label: "DtInicioCustoMedio",
      name: "DtInicioCustoMedio",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "FgTipoEmpresa",
      label: "FgTipoEmpresa",
      name: "FgTipoEmpresa",
      type: "string",
      size: 1,
    },
    {
      field: "Email",
      label: "Email",
      name: "Email",
      type: "string",
      size: 64,
    },
    {
      field: "DtUltBloqCli",
      label: "DtUltBloqCli",
      name: "DtUltBloqCli",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "NumUltLote",
      label: "NumUltLote",
      name: "NumUltLote",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CPFRespTecnico",
      label: "CPFRespTecnico",
      name: "CPFRespTecnico",
      type: "float",
      size: 8,
    },
    {
      field: "NumAutorizacaoFuncionamento",
      label: "NumAutorizacaoFuncionamento",
      name: "NumAutorizacaoFuncionamento",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumAutorizacaoEspecial",
      label: "NumAutorizacaoEspecial",
      name: "NumAutorizacaoEspecial",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgExibeEstoque",
      label: "FgExibeEstoque",
      name: "FgExibeEstoque",
      type: "string",
      size: 1,
    },
    {
      field: "CdFilialCentral",
      label: "CdFilialCentral",
      name: "CdFilialCentral",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercPisEntradaNeutro",
      label: "PercPisEntradaNeutro",
      name: "PercPisEntradaNeutro",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercPisEntradaPositivo",
      label: "PercPisEntradaPositivo",
      name: "PercPisEntradaPositivo",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercPisEntradaNegativo",
      label: "PercPisEntradaNegativo",
      name: "PercPisEntradaNegativo",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "NumEndereco",
      label: "NumEndereco",
      name: "NumEndereco",
      type: "int",
      size: 4,
    },
    {
      field: "CompEndereco",
      label: "CompEndereco",
      name: "CompEndereco",
      type: "string",
      size: 32,
    },
    {
      field: "InscSuframa",
      label: "InscSuframa",
      name: "InscSuframa",
      type: "string",
      size: 32,
    },
    {
      field: "PercCofinsSaida",
      label: "PercCofinsSaida",
      name: "PercCofinsSaida",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercPisSaida",
      label: "PercPisSaida",
      name: "PercPisSaida",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgNFe",
      label: "FgNFe",
      name: "FgNFe",
      type: "string",
      size: 1,
    },
    {
      field: "FgOptanteSimples",
      label: "FgOptanteSimples",
      name: "FgOptanteSimples",
      type: "string",
      size: 1,
    },
    {
      field: "PercCofinsEntradaNeutro",
      label: "PercCofinsEntradaNeutro",
      name: "PercCofinsEntradaNeutro",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercCofinsEntradaPositivo",
      label: "PercCofinsEntradaPositivo",
      name: "PercCofinsEntradaPositivo",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercCofinsEntradaNegativo",
      label: "PercCofinsEntradaNegativo",
      name: "PercCofinsEntradaNegativo",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercCofinsEntrada",
      label: "PercCofinsEntrada",
      name: "PercCofinsEntrada",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "EmailProcNfeContador",
      label: "EmailProcNfeContador",
      name: "EmailProcNfeContador",
      type: "string",
      size: 128,
    },
    {
      field: "MsgCabecalhoPedido",
      label: "MsgCabecalhoPedido",
      name: "MsgCabecalhoPedido",
      type: "string",
      size: 1024,
      allowNull: false,
    },
    {
      field: "PercMinimoICMSSub",
      label: "PercMinimoICMSSub",
      name: "PercMinimoICMSSub",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CNPJCentralizador",
      label: "CNPJCentralizador",
      name: "CNPJCentralizador",
      type: "int",
      size: 9,
    },
    {
      field: "IndicadorPeriodoApuracaoIPI",
      label: "IndicadorPeriodoApuracaoIPI",
      name: "IndicadorPeriodoApuracaoIPI",
      type: "int",
      size: 2,
    },
    {
      field: "FgLogEtiquetaLote",
      label: "FgLogEtiquetaLote",
      name: "FgLogEtiquetaLote",
      type: "string",
      size: 1,
    },
    {
      field: "PerfilApresArquivoSPED",
      label: "PerfilApresArquivoSPED",
      name: "PerfilApresArquivoSPED",
      type: "string",
      size: 1,
    },
    {
      field: "IndicadorTipoAtividade",
      label: "IndicadorTipoAtividade",
      name: "IndicadorTipoAtividade",
      type: "string",
      size: 1,
    },
    {
      field: "AliquotaNacional12741",
      label: "AliquotaNacional12741",
      name: "AliquotaNacional12741",
      type: "int",
      size: 5,
      scale: 2,
    },
    {
      field: "AliquotaImportado12741",
      label: "AliquotaImportado12741",
      name: "AliquotaImportado12741",
      type: "int",
      size: 5,
      scale: 2,
    },
    {
      field: "IndicadorTipoAtividadePISCofins",
      label: "IndicadorTipoAtividadePISCofins",
      name: "IndicadorTipoAtividadePISCofins",
      type: "string",
      size: 1,
    },
    {
      field: "IndicadorNaturezaPJ",
      label: "IndicadorNaturezaPJ",
      name: "IndicadorNaturezaPJ",
      type: "string",
      size: 2,
    },
    {
      field: "IndicadorIncidenciaPISCofins",
      label: "IndicadorIncidenciaPISCofins",
      name: "IndicadorIncidenciaPISCofins",
      type: "string",
      size: 1,
    },
    {
      field: "IndicadorApropriacaoPISCofins",
      label: "IndicadorApropriacaoPISCofins",
      name: "IndicadorApropriacaoPISCofins",
      type: "string",
      size: 1,
    },
    {
      field: "IndicadorTipoContribuicaoPISCofins",
      label: "IndicadorTipoContribuicaoPISCofins",
      name: "IndicadorTipoContribuicaoPISCofins",
      type: "string",
      size: 1,
    },
    {
      field: "CdContribuicaoSocialApurada",
      label: "CdContribuicaoSocialApurada",
      name: "CdContribuicaoSocialApurada",
      type: "int",
      size: 5,
    },
    {
      field: "FgNfeSe",
      label: "FgNfeSe",
      name: "FgNfeSe",
      type: "string",
      size: 1,
    },
    {
      field: "CdRegimeEspecialTributacao",
      label: "CdRegimeEspecialTributacao",
      name: "CdRegimeEspecialTributacao",
      type: "string",
      size: 1,
    },
    {
      field: "FgIncentivoCultural",
      label: "FgIncentivoCultural",
      name: "FgIncentivoCultural",
      type: "string",
      size: 1,
    },
    {
      field: "CdTributacaoMunicipio",
      label: "CdTributacaoMunicipio",
      name: "CdTributacaoMunicipio",
      type: "string",
      size: 32,
    },
    {
      field: "CdMunicipioPrestadorServico",
      label: "CdMunicipioPrestadorServico",
      name: "CdMunicipioPrestadorServico",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaCSLL",
      label: "AliquotaCSLL",
      name: "AliquotaCSLL",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlMinimoCSLL",
      label: "VlMinimoCSLL",
      name: "VlMinimoCSLL",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CPFAssociado",
      label: "CPFAssociado",
      name: "CPFAssociado",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CNAE",
      label: "CNAE",
      name: "CNAE",
      type: "string",
      size: 32,
    },
    {
      field: "CdRegimeTributario",
      label: "CdRegimeTributario",
      name: "CdRegimeTributario",
      type: "int",
      size: 2,
    },
    {
      field: "FgEtiquetaEntrega",
      label: "FgEtiquetaEntrega",
      name: "FgEtiquetaEntrega",
      type: "string",
      size: 1,
    },
    {
      field: "MsgDeducaoFiscal",
      label: "MsgDeducaoFiscal",
      name: "MsgDeducaoFiscal",
      type: "string",
      size: 512,
    },
    {
      field: "MsgClienteIsentoICMS",
      label: "MsgClienteIsentoICMS",
      name: "MsgClienteIsentoICMS",
      type: "string",
      size: 512,
    },
    {
      field: "AliqINSS",
      label: "AliqINSS",
      name: "AliqINSS",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgIsencaoFaixaReceita",
      label: "FgIsencaoFaixaReceita",
      name: "FgIsencaoFaixaReceita",
      type: "string",
      size: 1,
    },
    {
      field: "AliquotaCreditoICMS",
      label: "AliquotaCreditoICMS",
      name: "AliquotaCreditoICMS",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercMultaAtraso",
      label: "PercMultaAtraso",
      name: "PercMultaAtraso",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "QtdeDiasProtesto",
      label: "QtdeDiasProtesto",
      name: "QtdeDiasProtesto",
      type: "int",
      size: 5,
    },
    {
      field: "DtUltAvisoLiberacao",
      label: "DtUltAvisoLiberacao",
      name: "DtUltAvisoLiberacao",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "FgSetorEntrega",
      label: "FgSetorEntrega",
      name: "FgSetorEntrega",
      type: "string",
      size: 1,
    },
    {
      field: "FgNFCe",
      label: "FgNFCe",
      name: "FgNFCe",
      type: "string",
      size: 1,
    },
    {
      field: "FgTributaPartilhaICMS",
      label: "FgTributaPartilhaICMS",
      name: "FgTributaPartilhaICMS",
      type: "string",
      size: 1,
    },
    {
      field: "FgPartilhaICMSSomenteNaoPresencial",
      label: "FgPartilhaICMSSomenteNaoPresencial",
      name: "FgPartilhaICMSSomenteNaoPresencial",
      type: "string",
      size: 1,
    },
    {
      field: "IndIncFisc",
      label: "IndIncFisc",
      name: "IndIncFisc",
      type: "int",
      size: 2,
    },
    {
      field: "CListServ",
      label: "CListServ",
      name: "CListServ",
      type: "int",
      size: 5,
    },
    {
      field: "EmailNotificacaoNFePendente",
      label: "EmailNotificacaoNFePendente",
      name: "EmailNotificacaoNFePendente",
      type: "string",
      size: 128,
    },
    {
      field: "DtUltNotificacaoNFePendente",
      label: "DtUltNotificacaoNFePendente",
      name: "DtUltNotificacaoNFePendente",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "FgDistribuicaoEstoque",
      label: "FgDistribuicaoEstoque",
      name: "FgDistribuicaoEstoque",
      type: "string",
      size: 1,
    },
    {
      field: "DtLimite",
      label: "DtLimite",
      name: "DtLimite",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "PercMargemMinima",
      label: "PercMargemMinima",
      name: "PercMargemMinima",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgICMSEfetivo",
      label: "FgICMSEfetivo",
      name: "FgICMSEfetivo",
      type: "string",
      size: 1,
    },
    {
      field: "FgRespTecnico",
      label: "FgRespTecnico",
      name: "FgRespTecnico",
      type: "string",
      size: 1,
    },
    {
      field: "FgSTRetidoAnt",
      label: "FgSTRetidoAnt",
      name: "FgSTRetidoAnt",
      type: "string",
      size: 1,
    },
    {
      field: "DiretorioPDFBoletos",
      label: "DiretorioPDFBoletos",
      name: "DiretorioPDFBoletos",
      type: "string",
      size: 128,
    },
    {
      field: "FgBoletoOnLine",
      label: "FgBoletoOnLine",
      name: "FgBoletoOnLine",
      type: "string",
      size: 1,
    },
    {
      field: "ClassificacaoContribuintesIPI",
      label: "ClassificacaoContribuintesIPI",
      name: "ClassificacaoContribuintesIPI",
      type: "string",
      size: 2,
    },
    {
      field: "FgRE08720",
      label: "FgRE08720",
      name: "FgRE08720",
      type: "string",
      size: 1,
    },
    {
      field: "DtUltimoProcessamentoRE08720",
      label: "DtUltimoProcessamentoRE08720",
      name: "DtUltimoProcessamentoRE08720",
      type: "datetime",
      size: 8,
      scale: 3,
    },
  ],
};
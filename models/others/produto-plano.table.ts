import { TTableDef } from "@/types";

export const produto_plano: TTableDef = {
  database: "plano",
  table: "CadPro",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "produto_plano_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "produto",
      typeField: "string",
    },
    {
      field: "AcresFinanc",
      label: "AcresFinanc",
      name: "AcresFinanc",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliqIrrf",
      label: "AliqIrrf",
      name: "AliqIrrf",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CkTabela",
      label: "CkTabela",
      name: "CkTabela",
      typeField: "string",
    },
    {
      field: "Correcao",
      label: "Correcao",
      name: "Correcao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CustoContabil",
      label: "CustoContabil",
      name: "CustoContabil",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CustoEmb",
      label: "CustoEmb",
      name: "CustoEmb",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CustoFinanc",
      label: "CustoFinanc",
      name: "CustoFinanc",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CustoFrete",
      label: "CustoFrete",
      name: "CustoFrete",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Desc1",
      label: "Desc1",
      name: "Desc1",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Desc2",
      label: "Desc2",
      name: "Desc2",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Desc3",
      label: "Desc3",
      name: "Desc3",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Desc4",
      label: "Desc4",
      name: "Desc4",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Desc5",
      label: "Desc5",
      name: "Desc5",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Desc6",
      label: "Desc6",
      name: "Desc6",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DescontoSubstituicao",
      label: "DescontoSubstituicao",
      name: "DescontoSubstituicao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DifICMS",
      label: "DifICMS",
      name: "DifICMS",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtUltPedido",
      label: "DtUltPedido",
      name: "DtUltPedido",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltVenda",
      label: "DtUltVenda",
      name: "DtUltVenda",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgComposto",
      label: "FgComposto",
      name: "eh_composto",
      typeField: "string",
    },
    {
      field: "FgControlaSerie",
      label: "FgControlaSerie",
      name: "eh_controla_serie",
      typeField: "string",
    },
    {
      field: "FgEtiquetaBalanca",
      label: "FgEtiquetaBalanca",
      name: "FgEtiquetaBalanca",
      typeField: "string",
    },
    {
      field: "Fragmentada",
      label: "Fragmentada",
      name: "Fragmentada",
      typeField: "string",
    },
    {
      field: "MedidaNovo",
      label: "MedidaNovo",
      name: "MedidaNovo",
      typeField: "string",
    },
    {
      field: "MestreGrade",
      label: "MestreGrade",
      name: "MestreGrade",
      typeField: "string",
    },
    {
      field: "ObsComplementar",
      label: "ObsComplementar",
      name: "ObsComplementar",
      typeField: "string",
    },
    {
      field: "PercAumentoFab",
      label: "PercAumentoFab",
      name: "PercAumentoFab",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComissaoPrazo",
      label: "PercComissaoPrazo",
      name: "PercComissaoPrazo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComissaoVista",
      label: "PercComissaoVista",
      name: "PercComissaoVista",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercFrete",
      label: "PercFrete",
      name: "PercFrete",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercIpiFab",
      label: "PercIpiFab",
      name: "PercIpiFab",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PesoBruto",
      label: "PesoBruto",
      name: "PesoBruto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PesoLiq",
      label: "PesoLiq",
      name: "PesoLiq",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Pis_Cofins",
      label: "Pis_Cofins",
      name: "Pis_Cofins",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PrecoAtacadoAnt",
      label: "PrecoAtacadoAnt",
      name: "PrecoAtacadoAnt",
      typeField: "int",

      scale: 10,
    },
    {
      field: "PrecoVendaAnt",
      label: "PrecoVendaAnt",
      name: "PrecoVendaAnt",
      typeField: "int",

      scale: 10,
    },
    {
      field: "QtdadeUltCompra",
      label: "QtdadeUltCompra",
      name: "QtdadeUltCompra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ReceitaEtiqueta",
      label: "ReceitaEtiqueta",
      name: "ReceitaEtiqueta",
      typeField: "int",
    },
    {
      field: "Servico",
      label: "Servico",
      name: "Servico",
      typeField: "string",
    },
    {
      field: "TipoEtiqueta",
      label: "TipoEtiqueta",
      name: "TipoEtiqueta",
      typeField: "int",
    },
    {
      field: "TipoValidadeEtiqueta",
      label: "TipoValidadeEtiqueta",
      name: "TipoValidadeEtiqueta",
      typeField: "string",
    },
    {
      field: "TotVendaMes",
      label: "TotVendaMes",
      name: "TotVendaMes",
      typeField: "float",

      scale: 4,
    },
    {
      field: "UltCusto",
      label: "UltCusto",
      name: "UltCusto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ValidadeEtiqueta",
      label: "ValidadeEtiqueta",
      name: "ValidadeEtiqueta",
      typeField: "int",
    },
    {
      field: "VlTabela",
      label: "VlTabela",
      name: "VlTabela",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ConversaoMedida",
      label: "ConversaoMedida",
      name: "ConversaoMedida",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Classificacao",
      label: "Classificacao",
      name: "Classificacao",
      typeField: "string",
    },
    {
      field: "DtFinalPromAtacado",
      label: "DtFinalPromAtacado",
      name: "DtFinalPromAtacado",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtFinalPromVarejo",
      label: "DtFinalPromVarejo",
      name: "DtFinalPromVarejo",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtInicialPromAtacado",
      label: "DtInicialPromAtacado",
      name: "DtInicialPromAtacado",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtInicialPromVarejo",
      label: "DtInicialPromVarejo",
      name: "DtInicialPromVarejo",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgKit",
      label: "FgKit",
      name: "eh_kit",
      typeField: "string",
    },
    {
      field: "ImprimeComponentes",
      label: "ImprimeComponentes",
      name: "ImprimeComponentes",
      typeField: "string",
    },
    {
      field: "MargemSubstituicao",
      label: "MargemSubstituicao",
      name: "MargemSubstituicao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "TipoTributacao",
      label: "TipoTributacao",
      name: "TipoTributacao",
      typeField: "string",
    },
    {
      field: "VlAtacado",
      label: "VlAtacado",
      name: "VlAtacado",
      typeField: "int",

      scale: 10,
    },
    {
      field: "VlPromocaoAtacado",
      label: "VlPromocaoAtacado",
      name: "VlPromocaoAtacado",
      typeField: "int",

      scale: 10,
    },
    {
      field: "VlPromocaoVarejo",
      label: "VlPromocaoVarejo",
      name: "VlPromocaoVarejo",
      typeField: "int",

      scale: 10,
    },
    {
      field: "CdInterno",
      label: "CdInterno",
      name: "CdInterno",
      typeField: "string",
    },
    {
      field: "CdRefEstoque",
      label: "CdRefEstoque",
      name: "CdRefEstoque",
      typeField: "string",
    },
    {
      field: "CdReferencia",
      label: "CdReferencia",
      name: "CdReferencia",
      typeField: "string",
    },
    {
      field: "DescontoA",
      label: "DescontoA",
      name: "DescontoA",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DescontoB",
      label: "DescontoB",
      name: "DescontoB",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DescontoC",
      label: "DescontoC",
      name: "DescontoC",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DescontoD",
      label: "DescontoD",
      name: "DescontoD",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DescontoE",
      label: "DescontoE",
      name: "DescontoE",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DescontoFidelidade",
      label: "DescontoFidelidade",
      name: "DescontoFidelidade",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
    {
      field: "CdDepartamento",
      label: "CdDepartamento",
      name: "departamento_id",
      typeField: "int",
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "fornecedor_id",
      typeField: "int",
    },
    {
      field: "DtCadastro",
      label: "DtCadastro",
      name: "DtCadastro",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "VlCusto",
      label: "VlCusto",
      name: "VlCusto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlVenda",
      label: "VlVenda",
      name: "VlVenda",
      typeField: "int",

      scale: 10,
    },
    {
      field: "VlVendaAnt",
      label: "VlVendaAnt",
      name: "VlVendaAnt",
      typeField: "int",

      scale: 10,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "eh_ativo",
      typeField: "string",
    },
    {
      field: "FgEstoque",
      label: "FgEstoque",
      name: "eh_estoque",
      typeField: "string",
    },
    {
      field: "SitBal",
      label: "SitBal",
      name: "SitBal",
      typeField: "string",
    },
    {
      field: "PercLucro",
      label: "PercLucro",
      name: "PercLucro",
      typeField: "int",
    },
    {
      field: "DtPromocao",
      label: "DtPromocao",
      name: "DtPromocao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdCategoria",
      label: "CdCategoria",
      name: "categoria_id",
      typeField: "string",
    },
    {
      field: "Fracionamento",
      label: "Fracionamento",
      name: "Fracionamento",
      typeField: "int",

      scale: 2,
    },
    {
      field: "NomeDoSal",
      label: "NomeDoSal",
      name: "NomeDoSal",
      typeField: "string",
    },
    {
      field: "CdDCB",
      label: "CdDCB",
      name: "CdDCB",
      typeField: "string",
    },
    {
      field: "CdFabricante",
      label: "CdFabricante",
      name: "fabricante_id",
      typeField: "int",
    },
    {
      field: "Area",
      label: "Area",
      name: "Area",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Espessura",
      label: "Espessura",
      name: "Espessura",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Largura",
      label: "Largura",
      name: "Largura",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Comprimento",
      label: "Comprimento",
      name: "Comprimento",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdGrupo",
      label: "CdGrupo",
      name: "CdGrupo",
      typeField: "int",
    },
    {
      field: "CdSubGrupo",
      label: "CdSubGrupo",
      name: "CdSubGrupo",
      typeField: "int",
    },
    {
      field: "DptoEtiqueta",
      label: "DptoEtiqueta",
      name: "DptoEtiqueta",
      typeField: "int",
    },
    {
      field: "Classificacao10147",
      label: "Classificacao10147",
      name: "Classificacao10147",
      typeField: "string",
    },
    {
      field: "FgMoedaEspecifica",
      label: "FgMoedaEspecifica",
      name: "FgMoedaEspecifica",
      typeField: "string",
    },
    {
      field: "FgLoteControlado",
      label: "FgLoteControlado",
      name: "FgLoteControlado",
      typeField: "string",
    },
    {
      field: "FgBancoHoras",
      label: "FgBancoHoras",
      name: "FgBancoHoras",
      typeField: "string",
    },

    {
      field: "FgPrecoTabelado",
      label: "FgPrecoTabelado",
      name: "FgPrecoTabelado",
      typeField: "string",
    },
    {
      field: "DescricaoDCB",
      label: "DescricaoDCB",
      name: "DescricaoDCB",
      typeField: "string",
    },
    {
      field: "UnidadePesagem",
      label: "UnidadePesagem",
      name: "UnidadePesagem",
      typeField: "string",
    },
    {
      field: "FgEmbalagem",
      label: "FgEmbalagem",
      name: "FgEmbalagem",
      typeField: "string",
    },
    {
      field: "Capacidade",
      label: "Capacidade",
      name: "Capacidade",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgDescVendedorDireto",
      label: "FgDescVendedorDireto",
      name: "FgDescVendedorDireto",
      typeField: "string",
    },
    {
      field: "PercDescMaxGerente",
      label: "PercDescMaxGerente",
      name: "PercDescMaxGerente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescMaxVendedor",
      label: "PercDescMaxVendedor",
      name: "PercDescMaxVendedor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgComplementoVenda",
      label: "FgComplementoVenda",
      name: "FgComplementoVenda",
      typeField: "string",
    },
    {
      field: "CdMarca",
      label: "CdMarca",
      name: "CdMarca",
      typeField: "int",
    },
    {
      field: "FgPercLimite",
      label: "FgPercLimite",
      name: "FgPercLimite",
      typeField: "string",
    },
    {
      field: "DescMaxPermitido",
      label: "DescMaxPermitido",
      name: "DescMaxPermitido",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdProdutoNumerico",
      label: "CdProdutoNumerico",
      name: "CdProdutoNumerico",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtUltCompra",
      label: "DtUltCompra",
      name: "DtUltCompra",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "VlUltCompra",
      label: "VlUltCompra",
      name: "VlUltCompra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PoliticaPreco",
      label: "PoliticaPreco",
      name: "PoliticaPreco",
      typeField: "string",
    },
    {
      field: "PercRedCusto",
      label: "PercRedCusto",
      name: "PercRedCusto",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgQtdeFixa",
      label: "FgQtdeFixa",
      name: "FgQtdeFixa",
      typeField: "string",
    },
    {
      field: "CustoAlternativo",
      label: "CustoAlternativo",
      name: "CustoAlternativo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Cdmoeda",
      label: "Cdmoeda",
      name: "Cdmoeda",
      typeField: "string",
    },
    {
      field: "Equivalencia",
      label: "Equivalencia",
      name: "Equivalencia",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgProdFinal",
      label: "FgProdFinal",
      name: "FgProdFinal",
      typeField: "string",
    },
    {
      field: "VlManipulacao",
      label: "VlManipulacao",
      name: "VlManipulacao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgQsp",
      label: "FgQsp",
      name: "FgQsp",
      typeField: "string",
    },
    {
      field: "MedidaAdicional",
      label: "MedidaAdicional",
      name: "MedidaAdicional",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlAdicional",
      label: "VlAdicional",
      name: "VlAdicional",
      typeField: "float",

      scale: 4,
    },
    {
      field: "MedidaPadrao",
      label: "MedidaPadrao",
      name: "MedidaPadrao",
      typeField: "float",

      scale: 4,
    },

    {
      field: "Complemento",
      label: "Complemento",
      name: "Complemento",
      typeField: "string",
    },
    {
      field: "FgPrecoFabrica",
      label: "FgPrecoFabrica",
      name: "FgPrecoFabrica",
      typeField: "string",
    },
    {
      field: "CriterioReposicao",
      label: "CriterioReposicao",
      name: "CriterioReposicao",
      typeField: "string",
    },

    {
      field: "VlUltCusto",
      label: "VlUltCusto",
      name: "VlUltCusto",
      typeField: "float",

      scale: 4,
    },

    {
      field: "TipoReposicao",
      label: "TipoReposicao",
      name: "TipoReposicao",
      typeField: "string",
    },
    {
      field: "UnidadeProdutiva",
      label: "UnidadeProdutiva",
      name: "UnidadeProdutiva",
      typeField: "string",
    },

    {
      field: "DescontoEspecial",
      label: "DescontoEspecial",
      name: "DescontoEspecial",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercDescExtra",
      label: "PercDescExtra",
      name: "PercDescExtra",
      typeField: "float",

      scale: 4,
    },

    {
      field: "CdMoedaCustoMedio",
      label: "CdMoedaCustoMedio",
      name: "CdMoedaCustoMedio",
      typeField: "string",
    },
    {
      field: "Abreviatura",
      label: "Abreviatura",
      name: "Abreviatura",
      typeField: "string",
    },

    {
      field: "CdSal",
      label: "CdSal",
      name: "CdSal",
      typeField: "int",
    },

    {
      field: "FgRegistro74",
      label: "FgRegistro74",
      name: "FgRegistro74",
      typeField: "string",
    },
    {
      field: "PercMaximo",
      label: "PercMaximo",
      name: "PercMaximo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgVMSCard",
      label: "FgVMSCard",
      name: "FgVMSCard",
      typeField: "string",
    },

    {
      field: "Unidade",
      label: "Unidade",
      name: "unidade",
      typeField: "string",
    },
    {
      field: "TipoReceita",
      label: "TipoReceita",
      name: "TipoReceita",
      typeField: "string",
    },
    {
      field: "NumUltLote",
      label: "NumUltLote",
      name: "NumUltLote",
      typeField: "int",
    },
    {
      field: "FgBloqueioCompra",
      label: "FgBloqueioCompra",
      name: "FgBloqueioCompra",
      typeField: "string",
    },
    {
      field: "CodiGONCM",
      label: "CodiGONCM",
      name: "ncm",
      typeField: "string",
    },
    {
      field: "FgCompraCentralizada",
      label: "FgCompraCentralizada",
      name: "FgCompraCentralizada",
      typeField: "string",
    },

    {
      field: "AliqRedBaseST",
      label: "AliqRedBaseST",
      name: "AliqRedBaseST",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgEstatistica",
      label: "FgEstatistica",
      name: "eh_estatistica",
      typeField: "string",
    },
    {
      field: "VlCustoBase",
      label: "VlCustoBase",
      name: "VlCustoBase",
      typeField: "float",

      scale: 4,
    },
    {
      field: "IAT",
      label: "IAT",
      name: "IAT",
      typeField: "string",
    },
    {
      field: "IPPT",
      label: "IPPT",
      name: "IPPT",
      typeField: "string",
    },
    {
      field: "CdServico",
      label: "CdServico",
      name: "CdServico",
      typeField: "string",
    },
    {
      field: "CodigoEX",
      label: "CodigoEX",
      name: "CodigoEX",
      typeField: "string",
    },
    {
      field: "TipoMercadoria",
      label: "TipoMercadoria",
      name: "TipoMercadoria",
      typeField: "string",
    },
    {
      field: "GeneroProduto",
      label: "GeneroProduto",
      name: "GeneroProduto",
      typeField: "string",
    },
    {
      field: "IndicadorPropriedade",
      label: "IndicadorPropriedade",
      name: "IndicadorPropriedade",
      typeField: "string",
    },
    {
      field: "ClassificacaoFiscal",
      label: "ClassificacaoFiscal",
      name: "ClassificacaoFiscal",
      typeField: "string",
    },
    {
      field: "OrigemProduto",
      label: "OrigemProduto",
      name: "OrigemProduto",
      typeField: "int",
    },
    {
      field: "FgPesavel",
      label: "FgPesavel",
      name: "FgPesavel",
      typeField: "string",
    },
    {
      field: "PercLucroVarejo",
      label: "PercLucroVarejo",
      name: "PercLucroVarejo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercLucroAtacado",
      label: "PercLucroAtacado",
      name: "PercLucroAtacado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ControleNum",
      label: "ControleNum",
      name: "controle",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CNPJProdutor",
      label: "CNPJProdutor",
      name: "CNPJProdutor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "QtdeUnidadesVenda",
      label: "QtdeUnidadesVenda",
      name: "QtdeUnidadesVenda",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgOcultaSelecaoRapida",
      label: "FgOcultaSelecaoRapida",
      name: "FgOcultaSelecaoRapida",
      typeField: "string",
    },
    {
      field: "QuantidadeEmbalagem",
      label: "QuantidadeEmbalagem",
      name: "QuantidadeEmbalagem",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgValidadeIndeterminada",
      label: "FgValidadeIndeterminada",
      name: "FgValidadeIndeterminada",
      typeField: "string",
    },
    {
      field: "CEST",
      label: "CEST",
      name: "CEST",
      typeField: "int",
    },
    {
      field: "CNatOpe",
      label: "CNatOpe",
      name: "CNatOpe",
      typeField: "int",
    },
    {
      field: "NaturezaReceita",
      label: "NaturezaReceita",
      name: "NaturezaReceita",
      typeField: "int",
    },
    {
      field: "FgIndProdEscalaRelevante",
      label: "FgIndProdEscalaRelevante",
      name: "FgIndProdEscalaRelevante",
      typeField: "string",
    },
    {
      field: "QtdeVendaAtacado",
      label: "QtdeVendaAtacado",
      name: "QtdeVendaAtacado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdProdutoMestre",
      label: "CdProdutoMestre",
      name: "id_produto_mestre",
      typeField: "string",
    },
    {
      field: "FgCombo",
      label: "FgCombo",
      name: "FgCombo",
      typeField: "string",
    },
  ],
};

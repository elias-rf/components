import { TTable } from "../../types";

export const produto_plano: TTable = {
  database: "plano",
  table: "CadPro",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "produto_plano_id",
      typeField: "string",
      size: 15,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "produto",
      typeField: "string",
      size: 70,
    },
    {
      field: "AcresFinanc",
      label: "AcresFinanc",
      name: "AcresFinanc",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliqIrrf",
      label: "AliqIrrf",
      name: "AliqIrrf",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CkTabela",
      label: "CkTabela",
      name: "CkTabela",
      typeField: "string",
      size: 1,
    },
    {
      field: "Correcao",
      label: "Correcao",
      name: "Correcao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CustoContabil",
      label: "CustoContabil",
      name: "CustoContabil",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CustoEmb",
      label: "CustoEmb",
      name: "CustoEmb",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CustoFinanc",
      label: "CustoFinanc",
      name: "CustoFinanc",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CustoFrete",
      label: "CustoFrete",
      name: "CustoFrete",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Desc1",
      label: "Desc1",
      name: "Desc1",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Desc2",
      label: "Desc2",
      name: "Desc2",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Desc3",
      label: "Desc3",
      name: "Desc3",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Desc4",
      label: "Desc4",
      name: "Desc4",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Desc5",
      label: "Desc5",
      name: "Desc5",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Desc6",
      label: "Desc6",
      name: "Desc6",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DescontoSubstituicao",
      label: "DescontoSubstituicao",
      name: "DescontoSubstituicao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DifICMS",
      label: "DifICMS",
      name: "DifICMS",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtUltPedido",
      label: "DtUltPedido",
      name: "DtUltPedido",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtUltVenda",
      label: "DtUltVenda",
      name: "DtUltVenda",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "FgComposto",
      label: "FgComposto",
      name: "eh_composto",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgControlaSerie",
      label: "FgControlaSerie",
      name: "eh_controla_serie",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgEtiquetaBalanca",
      label: "FgEtiquetaBalanca",
      name: "FgEtiquetaBalanca",
      typeField: "string",
      size: 1,
    },
    {
      field: "Fragmentada",
      label: "Fragmentada",
      name: "Fragmentada",
      typeField: "string",
      size: 1,
    },
    {
      field: "MedidaNovo",
      label: "MedidaNovo",
      name: "MedidaNovo",
      typeField: "string",
      size: 50,
    },
    {
      field: "MestreGrade",
      label: "MestreGrade",
      name: "MestreGrade",
      typeField: "string",
      size: 1,
    },
    {
      field: "ObsComplementar",
      label: "ObsComplementar",
      name: "ObsComplementar",
      typeField: "string",
      size: 80,
    },
    {
      field: "PercAumentoFab",
      label: "PercAumentoFab",
      name: "PercAumentoFab",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercComissaoPrazo",
      label: "PercComissaoPrazo",
      name: "PercComissaoPrazo",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercComissaoVista",
      label: "PercComissaoVista",
      name: "PercComissaoVista",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercFrete",
      label: "PercFrete",
      name: "PercFrete",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercIpiFab",
      label: "PercIpiFab",
      name: "PercIpiFab",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PesoBruto",
      label: "PesoBruto",
      name: "PesoBruto",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PesoLiq",
      label: "PesoLiq",
      name: "PesoLiq",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Pis_Cofins",
      label: "Pis_Cofins",
      name: "Pis_Cofins",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PrecoAtacadoAnt",
      label: "PrecoAtacadoAnt",
      name: "PrecoAtacadoAnt",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "PrecoVendaAnt",
      label: "PrecoVendaAnt",
      name: "PrecoVendaAnt",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "QtdadeUltCompra",
      label: "QtdadeUltCompra",
      name: "QtdadeUltCompra",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ReceitaEtiqueta",
      label: "ReceitaEtiqueta",
      name: "ReceitaEtiqueta",
      typeField: "int",
      size: 4,
    },
    {
      field: "Servico",
      label: "Servico",
      name: "Servico",
      typeField: "string",
      size: 1,
    },
    {
      field: "TipoEtiqueta",
      label: "TipoEtiqueta",
      name: "TipoEtiqueta",
      typeField: "int",
      size: 4,
    },
    {
      field: "TipoValidadeEtiqueta",
      label: "TipoValidadeEtiqueta",
      name: "TipoValidadeEtiqueta",
      typeField: "string",
      size: 1,
    },
    {
      field: "TotVendaMes",
      label: "TotVendaMes",
      name: "TotVendaMes",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "UltCusto",
      label: "UltCusto",
      name: "UltCusto",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ValidadeEtiqueta",
      label: "ValidadeEtiqueta",
      name: "ValidadeEtiqueta",
      typeField: "int",
      size: 4,
    },
    {
      field: "VlTabela",
      label: "VlTabela",
      name: "VlTabela",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ConversaoMedida",
      label: "ConversaoMedida",
      name: "ConversaoMedida",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Classificacao",
      label: "Classificacao",
      name: "Classificacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "DtFinalPromAtacado",
      label: "DtFinalPromAtacado",
      name: "DtFinalPromAtacado",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtFinalPromVarejo",
      label: "DtFinalPromVarejo",
      name: "DtFinalPromVarejo",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtInicialPromAtacado",
      label: "DtInicialPromAtacado",
      name: "DtInicialPromAtacado",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtInicialPromVarejo",
      label: "DtInicialPromVarejo",
      name: "DtInicialPromVarejo",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "FgKit",
      label: "FgKit",
      name: "eh_kit",
      typeField: "string",
      size: 1,
    },
    {
      field: "ImprimeComponentes",
      label: "ImprimeComponentes",
      name: "ImprimeComponentes",
      typeField: "string",
      size: 1,
    },
    {
      field: "MargemSubstituicao",
      label: "MargemSubstituicao",
      name: "MargemSubstituicao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TipoTributacao",
      label: "TipoTributacao",
      name: "TipoTributacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "VlAtacado",
      label: "VlAtacado",
      name: "VlAtacado",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "VlPromocaoAtacado",
      label: "VlPromocaoAtacado",
      name: "VlPromocaoAtacado",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "VlPromocaoVarejo",
      label: "VlPromocaoVarejo",
      name: "VlPromocaoVarejo",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "CdInterno",
      label: "CdInterno",
      name: "CdInterno",
      typeField: "string",
      size: 60,
    },
    {
      field: "CdRefEstoque",
      label: "CdRefEstoque",
      name: "CdRefEstoque",
      typeField: "string",
      size: 15,
    },
    {
      field: "CdReferencia",
      label: "CdReferencia",
      name: "CdReferencia",
      typeField: "string",
      size: 15,
    },
    {
      field: "DescontoA",
      label: "DescontoA",
      name: "DescontoA",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DescontoB",
      label: "DescontoB",
      name: "DescontoB",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DescontoC",
      label: "DescontoC",
      name: "DescontoC",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DescontoD",
      label: "DescontoD",
      name: "DescontoD",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DescontoE",
      label: "DescontoE",
      name: "DescontoE",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DescontoFidelidade",
      label: "DescontoFidelidade",
      name: "DescontoFidelidade",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 1024,
    },
    {
      field: "CdDepartamento",
      label: "CdDepartamento",
      name: "departamento_id",
      typeField: "int",
      size: 2,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "fornecedor_id",
      typeField: "int",
      size: 9,
    },
    {
      field: "DtCadastro",
      label: "DtCadastro",
      name: "DtCadastro",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "VlCusto",
      label: "VlCusto",
      name: "VlCusto",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlVenda",
      label: "VlVenda",
      name: "VlVenda",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "VlVendaAnt",
      label: "VlVendaAnt",
      name: "VlVendaAnt",
      typeField: "int",
      size: 13,
      scale: 10,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "eh_ativo",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgEstoque",
      label: "FgEstoque",
      name: "eh_estoque",
      typeField: "string",
      size: 1,
    },
    {
      field: "SitBal",
      label: "SitBal",
      name: "SitBal",
      typeField: "string",
      size: 1,
    },
    {
      field: "PercLucro",
      label: "PercLucro",
      name: "PercLucro",
      typeField: "int",
      size: 2,
    },
    {
      field: "DtPromocao",
      label: "DtPromocao",
      name: "DtPromocao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdCategoria",
      label: "CdCategoria",
      name: "categoria_id",
      typeField: "string",
      size: 6,
    },
    {
      field: "Fracionamento",
      label: "Fracionamento",
      name: "Fracionamento",
      typeField: "int",
      size: 5,
      scale: 2,
    },
    {
      field: "NomeDoSal",
      label: "NomeDoSal",
      name: "NomeDoSal",
      typeField: "string",
      size: 40,
    },
    {
      field: "CdDCB",
      label: "CdDCB",
      name: "CdDCB",
      typeField: "string",
      size: 10,
    },
    {
      field: "CdFabricante",
      label: "CdFabricante",
      name: "fabricante_id",
      typeField: "int",
      size: 9,
    },
    {
      field: "Area",
      label: "Area",
      name: "Area",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Espessura",
      label: "Espessura",
      name: "Espessura",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Largura",
      label: "Largura",
      name: "Largura",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Comprimento",
      label: "Comprimento",
      name: "Comprimento",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdGrupo",
      label: "CdGrupo",
      name: "CdGrupo",
      typeField: "int",
      size: 4,
    },
    {
      field: "CdSubGrupo",
      label: "CdSubGrupo",
      name: "CdSubGrupo",
      typeField: "int",
      size: 4,
    },
    {
      field: "DptoEtiqueta",
      label: "DptoEtiqueta",
      name: "DptoEtiqueta",
      typeField: "int",
      size: 4,
    },
    {
      field: "Classificacao10147",
      label: "Classificacao10147",
      name: "Classificacao10147",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgMoedaEspecifica",
      label: "FgMoedaEspecifica",
      name: "FgMoedaEspecifica",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgLoteControlado",
      label: "FgLoteControlado",
      name: "FgLoteControlado",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgBancoHoras",
      label: "FgBancoHoras",
      name: "FgBancoHoras",
      typeField: "string",
      size: 1,
    },

    {
      field: "FgPrecoTabelado",
      label: "FgPrecoTabelado",
      name: "FgPrecoTabelado",
      typeField: "string",
      size: 1,
    },
    {
      field: "DescricaoDCB",
      label: "DescricaoDCB",
      name: "DescricaoDCB",
      typeField: "string",
      size: 40,
    },
    {
      field: "UnidadePesagem",
      label: "UnidadePesagem",
      name: "UnidadePesagem",
      typeField: "string",
      size: 4,
    },
    {
      field: "FgEmbalagem",
      label: "FgEmbalagem",
      name: "FgEmbalagem",
      typeField: "string",
      size: 1,
    },
    {
      field: "Capacidade",
      label: "Capacidade",
      name: "Capacidade",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgDescVendedorDireto",
      label: "FgDescVendedorDireto",
      name: "FgDescVendedorDireto",
      typeField: "string",
      size: 1,
    },
    {
      field: "PercDescMaxGerente",
      label: "PercDescMaxGerente",
      name: "PercDescMaxGerente",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescMaxVendedor",
      label: "PercDescMaxVendedor",
      name: "PercDescMaxVendedor",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgComplementoVenda",
      label: "FgComplementoVenda",
      name: "FgComplementoVenda",
      typeField: "string",
      size: 1,
    },
    {
      field: "CdMarca",
      label: "CdMarca",
      name: "CdMarca",
      typeField: "int",
      size: 4,
    },
    {
      field: "FgPercLimite",
      label: "FgPercLimite",
      name: "FgPercLimite",
      typeField: "string",
      size: 1,
    },
    {
      field: "DescMaxPermitido",
      label: "DescMaxPermitido",
      name: "DescMaxPermitido",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdProdutoNumerico",
      label: "CdProdutoNumerico",
      name: "CdProdutoNumerico",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtUltCompra",
      label: "DtUltCompra",
      name: "DtUltCompra",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "VlUltCompra",
      label: "VlUltCompra",
      name: "VlUltCompra",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PoliticaPreco",
      label: "PoliticaPreco",
      name: "PoliticaPreco",
      typeField: "string",
      size: 1,
    },
    {
      field: "PercRedCusto",
      label: "PercRedCusto",
      name: "PercRedCusto",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgQtdeFixa",
      label: "FgQtdeFixa",
      name: "FgQtdeFixa",
      typeField: "string",
      size: 1,
    },
    {
      field: "CustoAlternativo",
      label: "CustoAlternativo",
      name: "CustoAlternativo",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Cdmoeda",
      label: "Cdmoeda",
      name: "Cdmoeda",
      typeField: "string",
      size: 15,
    },
    {
      field: "Equivalencia",
      label: "Equivalencia",
      name: "Equivalencia",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgProdFinal",
      label: "FgProdFinal",
      name: "FgProdFinal",
      typeField: "string",
      size: 1,
    },
    {
      field: "VlManipulacao",
      label: "VlManipulacao",
      name: "VlManipulacao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgQsp",
      label: "FgQsp",
      name: "FgQsp",
      typeField: "string",
      size: 1,
    },
    {
      field: "MedidaAdicional",
      label: "MedidaAdicional",
      name: "MedidaAdicional",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlAdicional",
      label: "VlAdicional",
      name: "VlAdicional",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "MedidaPadrao",
      label: "MedidaPadrao",
      name: "MedidaPadrao",
      typeField: "float",
      size: 8,
      scale: 4,
    },

    {
      field: "Complemento",
      label: "Complemento",
      name: "Complemento",
      typeField: "string",
      size: 50,
    },
    {
      field: "FgPrecoFabrica",
      label: "FgPrecoFabrica",
      name: "FgPrecoFabrica",
      typeField: "string",
      size: 1,
    },
    {
      field: "CriterioReposicao",
      label: "CriterioReposicao",
      name: "CriterioReposicao",
      typeField: "string",
      size: 1,
    },

    {
      field: "VlUltCusto",
      label: "VlUltCusto",
      name: "VlUltCusto",
      typeField: "float",
      size: 8,
      scale: 4,
    },

    {
      field: "TipoReposicao",
      label: "TipoReposicao",
      name: "TipoReposicao",
      typeField: "string",
      size: 1,
    },
    {
      field: "UnidadeProdutiva",
      label: "UnidadeProdutiva",
      name: "UnidadeProdutiva",
      typeField: "string",
      size: 25,
    },

    {
      field: "DescontoEspecial",
      label: "DescontoEspecial",
      name: "DescontoEspecial",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescExtra",
      label: "PercDescExtra",
      name: "PercDescExtra",
      typeField: "float",
      size: 8,
      scale: 4,
    },

    {
      field: "CdMoedaCustoMedio",
      label: "CdMoedaCustoMedio",
      name: "CdMoedaCustoMedio",
      typeField: "string",
      size: 15,
    },
    {
      field: "Abreviatura",
      label: "Abreviatura",
      name: "Abreviatura",
      typeField: "string",
      size: 50,
    },

    {
      field: "CdSal",
      label: "CdSal",
      name: "CdSal",
      typeField: "int",
      size: 4,
    },

    {
      field: "FgRegistro74",
      label: "FgRegistro74",
      name: "FgRegistro74",
      typeField: "string",
      size: 1,
    },
    {
      field: "PercMaximo",
      label: "PercMaximo",
      name: "PercMaximo",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgVMSCard",
      label: "FgVMSCard",
      name: "FgVMSCard",
      typeField: "string",
      size: 1,
    },

    {
      field: "Unidade",
      label: "Unidade",
      name: "unidade",
      typeField: "string",
      size: 4,
    },
    {
      field: "TipoReceita",
      label: "TipoReceita",
      name: "TipoReceita",
      typeField: "string",
      size: 2,
    },
    {
      field: "NumUltLote",
      label: "NumUltLote",
      name: "NumUltLote",
      typeField: "int",
      size: 4,
    },
    {
      field: "FgBloqueioCompra",
      label: "FgBloqueioCompra",
      name: "FgBloqueioCompra",
      typeField: "string",
      size: 1,
    },
    {
      field: "CodiGONCM",
      label: "CodiGONCM",
      name: "ncm",
      typeField: "string",
      size: 16,
    },
    {
      field: "FgCompraCentralizada",
      label: "FgCompraCentralizada",
      name: "FgCompraCentralizada",
      typeField: "string",
      size: 1,
    },

    {
      field: "AliqRedBaseST",
      label: "AliqRedBaseST",
      name: "AliqRedBaseST",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgEstatistica",
      label: "FgEstatistica",
      name: "eh_estatistica",
      typeField: "string",
      size: 1,
    },
    {
      field: "VlCustoBase",
      label: "VlCustoBase",
      name: "VlCustoBase",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "IAT",
      label: "IAT",
      name: "IAT",
      typeField: "string",
      size: 1,
    },
    {
      field: "IPPT",
      label: "IPPT",
      name: "IPPT",
      typeField: "string",
      size: 1,
    },
    {
      field: "CdServico",
      label: "CdServico",
      name: "CdServico",
      typeField: "string",
      size: 16,
    },
    {
      field: "CodigoEX",
      label: "CodigoEX",
      name: "CodigoEX",
      typeField: "string",
      size: 16,
    },
    {
      field: "TipoMercadoria",
      label: "TipoMercadoria",
      name: "TipoMercadoria",
      typeField: "string",
      size: 2,
    },
    {
      field: "GeneroProduto",
      label: "GeneroProduto",
      name: "GeneroProduto",
      typeField: "string",
      size: 16,
    },
    {
      field: "IndicadorPropriedade",
      label: "IndicadorPropriedade",
      name: "IndicadorPropriedade",
      typeField: "string",
      size: 1,
    },
    {
      field: "ClassificacaoFiscal",
      label: "ClassificacaoFiscal",
      name: "ClassificacaoFiscal",
      typeField: "string",
      size: 16,
    },
    {
      field: "OrigemProduto",
      label: "OrigemProduto",
      name: "OrigemProduto",
      typeField: "int",
      size: 2,
    },
    {
      field: "FgPesavel",
      label: "FgPesavel",
      name: "FgPesavel",
      typeField: "string",
      size: 1,
    },
    {
      field: "PercLucroVarejo",
      label: "PercLucroVarejo",
      name: "PercLucroVarejo",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercLucroAtacado",
      label: "PercLucroAtacado",
      name: "PercLucroAtacado",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "ControleNum",
      label: "ControleNum",
      name: "controle",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "CNPJProdutor",
      label: "CNPJProdutor",
      name: "CNPJProdutor",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "QtdeUnidadesVenda",
      label: "QtdeUnidadesVenda",
      name: "QtdeUnidadesVenda",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgOcultaSelecaoRapida",
      label: "FgOcultaSelecaoRapida",
      name: "FgOcultaSelecaoRapida",
      typeField: "string",
      size: 1,
    },
    {
      field: "QuantidadeEmbalagem",
      label: "QuantidadeEmbalagem",
      name: "QuantidadeEmbalagem",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgValidadeIndeterminada",
      label: "FgValidadeIndeterminada",
      name: "FgValidadeIndeterminada",
      typeField: "string",
      size: 1,
    },
    {
      field: "CEST",
      label: "CEST",
      name: "CEST",
      typeField: "int",
      size: 5,
    },
    {
      field: "CNatOpe",
      label: "CNatOpe",
      name: "CNatOpe",
      typeField: "int",
      size: 2,
    },
    {
      field: "NaturezaReceita",
      label: "NaturezaReceita",
      name: "NaturezaReceita",
      typeField: "int",
      size: 5,
    },
    {
      field: "FgIndProdEscalaRelevante",
      label: "FgIndProdEscalaRelevante",
      name: "FgIndProdEscalaRelevante",
      typeField: "string",
      size: 1,
    },
    {
      field: "QtdeVendaAtacado",
      label: "QtdeVendaAtacado",
      name: "QtdeVendaAtacado",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdProdutoMestre",
      label: "CdProdutoMestre",
      name: "id_produto_mestre",
      typeField: "string",
      size: 18,
    },
    {
      field: "FgCombo",
      label: "FgCombo",
      name: "FgCombo",
      typeField: "string",
      size: 1,
    },
  ],
};

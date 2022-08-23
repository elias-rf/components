import { TEntity } from "@er/types/*";

export const Configuracao: TEntity =
  {
  "database": "plano",
  "table": "Configuracao",
  "fields": [
    {
      "field": "Identificacao",
      "label": "Identificacao",
      "name": "Configuracao_id",
      "type": "int",
      "size": 2,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "ModeloFat",
      "label": "ModeloFat",
      "name": "ModeloFat",
      "type": "string",
      "size": 50
    },
    {
      "field": "ModeloNf",
      "label": "ModeloNf",
      "name": "ModeloNf",
      "type": "string",
      "size": 50
    },
    {
      "field": "EAN",
      "label": "EAN",
      "name": "EAN",
      "type": "string",
      "size": 1
    },
    {
      "field": "CGCCPF",
      "label": "CGCCPF",
      "name": "CGCCPF",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoCliente",
      "label": "TipoCliente",
      "name": "TipoCliente",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoLucro",
      "label": "TipoLucro",
      "name": "TipoLucro",
      "type": "string",
      "size": 1
    },
    {
      "field": "VendeConvenio",
      "label": "VendeConvenio",
      "name": "VendeConvenio",
      "type": "string",
      "size": 1
    },
    {
      "field": "PrecoIndividualizado",
      "label": "PrecoIndividualizado",
      "name": "PrecoIndividualizado",
      "type": "string",
      "size": 1
    },
    {
      "field": "TaxaSelic",
      "label": "TaxaSelic",
      "name": "TaxaSelic",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "TextoNoCodigo",
      "label": "TextoNoCodigo",
      "name": "TextoNoCodigo",
      "type": "string",
      "size": 1
    },
    {
      "field": "TpVdPedido",
      "label": "TpVdPedido",
      "name": "TpVdPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "VendaComSerie",
      "label": "VendaComSerie",
      "name": "VendaComSerie",
      "type": "string",
      "size": 1
    },
    {
      "field": "EtiquetasConvenio",
      "label": "EtiquetasConvenio",
      "name": "EtiquetasConvenio",
      "type": "string",
      "size": 1
    },
    {
      "field": "DinheiroCR",
      "label": "DinheiroCR",
      "name": "DinheiroCR",
      "type": "string",
      "size": 1
    },
    {
      "field": "BuscaProdutos",
      "label": "BuscaProdutos",
      "name": "BuscaProdutos",
      "type": "string",
      "size": 1
    },
    {
      "field": "CasasDecimais",
      "label": "CasasDecimais",
      "name": "CasasDecimais",
      "type": "int",
      "size": 1
    },
    {
      "field": "ConversaoMedida",
      "label": "ConversaoMedida",
      "name": "ConversaoMedida",
      "type": "string",
      "size": 1
    },
    {
      "field": "Correcao",
      "label": "Correcao",
      "name": "Correcao",
      "type": "string",
      "size": 1
    },
    {
      "field": "Dinheiro",
      "label": "Dinheiro",
      "name": "Dinheiro",
      "type": "string",
      "size": 1
    },
    {
      "field": "Embalagem",
      "label": "Embalagem",
      "name": "Embalagem",
      "type": "string",
      "size": 1
    },
    {
      "field": "ExigeCPF",
      "label": "ExigeCPF",
      "name": "ExigeCPF",
      "type": "string",
      "size": 1
    },
    {
      "field": "ExtratoCliente",
      "label": "ExtratoCliente",
      "name": "ExtratoCliente",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgLiberaLimite",
      "label": "FgLiberaLimite",
      "name": "FgLiberaLimite",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPreFatura",
      "label": "FgPreFatura",
      "name": "FgPreFatura",
      "type": "string",
      "size": 1
    },
    {
      "field": "GravaObsNota",
      "label": "GravaObsNota",
      "name": "GravaObsNota",
      "type": "string",
      "size": 1
    },
    {
      "field": "LancIndividual",
      "label": "LancIndividual",
      "name": "LancIndividual",
      "type": "string",
      "size": 1
    },
    {
      "field": "LancVista",
      "label": "LancVista",
      "name": "LancVista",
      "type": "string",
      "size": 1
    },
    {
      "field": "NFMestreGrade",
      "label": "NFMestreGrade",
      "name": "NFMestreGrade",
      "type": "string",
      "size": 1
    },
    {
      "field": "PedidoMaximo",
      "label": "PedidoMaximo",
      "name": "PedidoMaximo",
      "type": "string",
      "size": 1
    },
    {
      "field": "ImpressoraDup",
      "label": "ImpressoraDup",
      "name": "ImpressoraDup",
      "type": "string",
      "size": 50
    },
    {
      "field": "ImpressoraFat",
      "label": "ImpressoraFat",
      "name": "ImpressoraFat",
      "type": "string",
      "size": 50
    },
    {
      "field": "ImpressoraRecibo",
      "label": "ImpressoraRecibo",
      "name": "ImpressoraRecibo",
      "type": "string",
      "size": 50
    },
    {
      "field": "PortaDup",
      "label": "PortaDup",
      "name": "PortaDup",
      "type": "string",
      "size": 4
    },
    {
      "field": "PortaFat",
      "label": "PortaFat",
      "name": "PortaFat",
      "type": "string",
      "size": 4
    },
    {
      "field": "PortaRecibo",
      "label": "PortaRecibo",
      "name": "PortaRecibo",
      "type": "string",
      "size": 4
    },
    {
      "field": "ImpressoraNF",
      "label": "ImpressoraNF",
      "name": "ImpressoraNF",
      "type": "string",
      "size": 50
    },
    {
      "field": "PortaNf",
      "label": "PortaNf",
      "name": "PortaNf",
      "type": "string",
      "size": 4
    },
    {
      "field": "ImpressoraBloq",
      "label": "ImpressoraBloq",
      "name": "ImpressoraBloq",
      "type": "string",
      "size": 50
    },
    {
      "field": "PortaBloq",
      "label": "PortaBloq",
      "name": "PortaBloq",
      "type": "string",
      "size": 4
    },
    {
      "field": "ImpressoraEtiq",
      "label": "ImpressoraEtiq",
      "name": "ImpressoraEtiq",
      "type": "string",
      "size": 50
    },
    {
      "field": "PortaEtiq",
      "label": "PortaEtiq",
      "name": "PortaEtiq",
      "type": "string",
      "size": 4
    },
    {
      "field": "ImpressoraConv",
      "label": "ImpressoraConv",
      "name": "ImpressoraConv",
      "type": "string",
      "size": 50
    },
    {
      "field": "PortaConv",
      "label": "PortaConv",
      "name": "PortaConv",
      "type": "string",
      "size": 4
    },
    {
      "field": "ImpressoraCont",
      "label": "ImpressoraCont",
      "name": "ImpressoraCont",
      "type": "string",
      "size": 50
    },
    {
      "field": "PortaCont",
      "label": "PortaCont",
      "name": "PortaCont",
      "type": "string",
      "size": 4
    },
    {
      "field": "ImpressoraRat",
      "label": "ImpressoraRat",
      "name": "ImpressoraRat",
      "type": "string",
      "size": 50
    },
    {
      "field": "PortaRat",
      "label": "PortaRat",
      "name": "PortaRat",
      "type": "string",
      "size": 4
    },
    {
      "field": "ImpressoraRes",
      "label": "ImpressoraRes",
      "name": "ImpressoraRes",
      "type": "string",
      "size": 50
    },
    {
      "field": "PortaRes",
      "label": "PortaRes",
      "name": "PortaRes",
      "type": "string",
      "size": 4
    },
    {
      "field": "ImpressoraPed",
      "label": "ImpressoraPed",
      "name": "ImpressoraPed",
      "type": "string",
      "size": 50
    },
    {
      "field": "PortaPed",
      "label": "PortaPed",
      "name": "PortaPed",
      "type": "string",
      "size": 4
    },
    {
      "field": "ImpressoraReq",
      "label": "ImpressoraReq",
      "name": "ImpressoraReq",
      "type": "string",
      "size": 50
    },
    {
      "field": "PortaReq",
      "label": "PortaReq",
      "name": "PortaReq",
      "type": "string",
      "size": 4
    },
    {
      "field": "Assistencia",
      "label": "Assistencia",
      "name": "Assistencia",
      "type": "string",
      "size": 1
    },
    {
      "field": "PortaScanner",
      "label": "PortaScanner",
      "name": "PortaScanner",
      "type": "int",
      "size": 1
    },
    {
      "field": "CaminhoBackup",
      "label": "CaminhoBackup",
      "name": "CaminhoBackup",
      "type": "string",
      "size": 50
    },
    {
      "field": "Caminho",
      "label": "Caminho",
      "name": "Caminho",
      "type": "string",
      "size": 50
    },
    {
      "field": "DtCompactacao",
      "label": "DtCompactacao",
      "name": "DtCompactacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "TeclaAbertura",
      "label": "TeclaAbertura",
      "name": "TeclaAbertura",
      "type": "int",
      "size": 1
    },
    {
      "field": "RelCustoMedio",
      "label": "RelCustoMedio",
      "name": "RelCustoMedio",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgControlaEstoquePedido",
      "label": "FgControlaEstoquePedido",
      "name": "FgControlaEstoquePedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "CasasDecimaisQtde",
      "label": "CasasDecimaisQtde",
      "name": "CasasDecimaisQtde",
      "type": "int",
      "size": 4
    },
    {
      "field": "FgIcmsCusto",
      "label": "FgIcmsCusto",
      "name": "FgIcmsCusto",
      "type": "string",
      "size": 1
    },
    {
      "field": "ModalidadesPagto",
      "label": "ModalidadesPagto",
      "name": "ModalidadesPagto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFilialFinanc",
      "label": "FgFilialFinanc",
      "name": "FgFilialFinanc",
      "type": "string",
      "size": 1
    },
    {
      "field": "ImpressoraGarantia",
      "label": "ImpressoraGarantia",
      "name": "ImpressoraGarantia",
      "type": "string",
      "size": 150
    },
    {
      "field": "PortaGarantia",
      "label": "PortaGarantia",
      "name": "PortaGarantia",
      "type": "string",
      "size": 10
    },
    {
      "field": "DescEspecifica",
      "label": "DescEspecifica",
      "name": "DescEspecifica",
      "type": "string",
      "size": 1
    },
    {
      "field": "QtdeItensNF",
      "label": "QtdeItensNF",
      "name": "QtdeItensNF",
      "type": "int",
      "size": 4
    },
    {
      "field": "FgObrigaLctoBancarioCR",
      "label": "FgObrigaLctoBancarioCR",
      "name": "FgObrigaLctoBancarioCR",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgExigeComentarioCR",
      "label": "FgExigeComentarioCR",
      "name": "FgExigeComentarioCR",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgObrigatorioCP",
      "label": "FgObrigatorioCP",
      "name": "FgObrigatorioCP",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgGravaEvento",
      "label": "FgGravaEvento",
      "name": "FgGravaEvento",
      "type": "string",
      "size": 1
    },
    {
      "field": "MoedaEspecifica",
      "label": "MoedaEspecifica",
      "name": "MoedaEspecifica",
      "type": "string",
      "size": 50
    },
    {
      "field": "ModeloPedido",
      "label": "ModeloPedido",
      "name": "ModeloPedido",
      "type": "string",
      "size": 50
    },
    {
      "field": "AltComponentesKit",
      "label": "AltComponentesKit",
      "name": "AltComponentesKit",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgLancFinanceiroTransf",
      "label": "FgLancFinanceiroTransf",
      "name": "FgLancFinanceiroTransf",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAutorizacaoRemota",
      "label": "FgAutorizacaoRemota",
      "name": "FgAutorizacaoRemota",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgVendaKit",
      "label": "FgVendaKit",
      "name": "FgVendaKit",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgExibeEstoqueNF",
      "label": "FgExibeEstoqueNF",
      "name": "FgExibeEstoqueNF",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBloqueioEstoqueNegativo",
      "label": "FgBloqueioEstoqueNegativo",
      "name": "FgBloqueioEstoqueNegativo",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSenhaMaster",
      "label": "FgSenhaMaster",
      "name": "FgSenhaMaster",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAltNumNota",
      "label": "FgAltNumNota",
      "name": "FgAltNumNota",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPrecoNoFechamento",
      "label": "FgPrecoNoFechamento",
      "name": "FgPrecoNoFechamento",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgOrdenaPedido",
      "label": "FgOrdenaPedido",
      "name": "FgOrdenaPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgReservaPedido",
      "label": "FgReservaPedido",
      "name": "FgReservaPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBloqueioEstoqueNegativoPed",
      "label": "FgBloqueioEstoqueNegativoPed",
      "name": "FgBloqueioEstoqueNegativoPed",
      "type": "string",
      "size": 1
    },
    {
      "field": "DtUltLimpeza",
      "label": "DtUltLimpeza",
      "name": "DtUltLimpeza",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DiasTitCobrDinheiro",
      "label": "DiasTitCobrDinheiro",
      "name": "DiasTitCobrDinheiro",
      "type": "int",
      "size": 2
    },
    {
      "field": "DiasPedidos",
      "label": "DiasPedidos",
      "name": "DiasPedidos",
      "type": "int",
      "size": 2
    },
    {
      "field": "DiasCaixa",
      "label": "DiasCaixa",
      "name": "DiasCaixa",
      "type": "int",
      "size": 2
    },
    {
      "field": "DiasLog",
      "label": "DiasLog",
      "name": "DiasLog",
      "type": "int",
      "size": 2
    },
    {
      "field": "TipoCusto",
      "label": "TipoCusto",
      "name": "TipoCusto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgParametrosMovFiscal",
      "label": "FgParametrosMovFiscal",
      "name": "FgParametrosMovFiscal",
      "type": "string",
      "size": 1
    },
    {
      "field": "IniciaisCriacaoEAN",
      "label": "IniciaisCriacaoEAN",
      "name": "IniciaisCriacaoEAN",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgTrocaTipoVenda",
      "label": "FgTrocaTipoVenda",
      "name": "FgTrocaTipoVenda",
      "type": "string",
      "size": 1
    },
    {
      "field": "DecimaisCusto",
      "label": "DecimaisCusto",
      "name": "DecimaisCusto",
      "type": "int",
      "size": 2
    },
    {
      "field": "FgColetor",
      "label": "FgColetor",
      "name": "FgColetor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImpTermoResponsabilidade",
      "label": "FgImpTermoResponsabilidade",
      "name": "FgImpTermoResponsabilidade",
      "type": "string",
      "size": 1
    },
    {
      "field": "CRMCoringa",
      "label": "CRMCoringa",
      "name": "CRMCoringa",
      "type": "string",
      "size": 10
    },
    {
      "field": "FgDetalhaPagamento",
      "label": "FgDetalhaPagamento",
      "name": "FgDetalhaPagamento",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAlteraPgtoPDV",
      "label": "FgAlteraPgtoPDV",
      "name": "FgAlteraPgtoPDV",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCRMObrigatorio",
      "label": "FgCRMObrigatorio",
      "name": "FgCRMObrigatorio",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgComissaoExtra",
      "label": "FgComissaoExtra",
      "name": "FgComissaoExtra",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgGravaExclusaoLimpeza",
      "label": "FgGravaExclusaoLimpeza",
      "name": "FgGravaExclusaoLimpeza",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAssociaFornecedor",
      "label": "FgAssociaFornecedor",
      "name": "FgAssociaFornecedor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgControleLotes",
      "label": "FgControleLotes",
      "name": "FgControleLotes",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCEP",
      "label": "FgCEP",
      "name": "FgCEP",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDiasSemEstoque",
      "label": "FgDiasSemEstoque",
      "name": "FgDiasSemEstoque",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBloqueioCreditoPedido",
      "label": "FgBloqueioCreditoPedido",
      "name": "FgBloqueioCreditoPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgLivredigPedido",
      "label": "FgLivredigPedido",
      "name": "FgLivredigPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBloqueioEstoqueNegativoPdv",
      "label": "FgBloqueioEstoqueNegativoPdv",
      "name": "FgBloqueioEstoqueNegativoPdv",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgControlaCredito",
      "label": "FgControlaCredito",
      "name": "FgControlaCredito",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgClienteInicioPedido",
      "label": "FgClienteInicioPedido",
      "name": "FgClienteInicioPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgRedutorComissao",
      "label": "FgRedutorComissao",
      "name": "FgRedutorComissao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAgendamento",
      "label": "FgAgendamento",
      "name": "FgAgendamento",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPreVenda",
      "label": "FgPreVenda",
      "name": "FgPreVenda",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgObrigatorioMidia",
      "label": "FgObrigatorioMidia",
      "name": "FgObrigatorioMidia",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSugereNop",
      "label": "FgSugereNop",
      "name": "FgSugereNop",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSelecaoProdutoFaixaPreco",
      "label": "FgSelecaoProdutoFaixaPreco",
      "name": "FgSelecaoProdutoFaixaPreco",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSelecaoProdutoFaixaEstoque",
      "label": "FgSelecaoProdutoFaixaEstoque",
      "name": "FgSelecaoProdutoFaixaEstoque",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPametrosCustoProduto",
      "label": "FgPametrosCustoProduto",
      "name": "FgPametrosCustoProduto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCustoAlternativoProduto",
      "label": "FgCustoAlternativoProduto",
      "name": "FgCustoAlternativoProduto",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdDepartamentoPadrao",
      "label": "CdDepartamentoPadrao",
      "name": "CdDepartamentoPadrao",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdCategoriaPadrao",
      "label": "CdCategoriaPadrao",
      "name": "CdCategoriaPadrao",
      "type": "int",
      "size": 2
    },
    {
      "field": "FgMontagemGrade",
      "label": "FgMontagemGrade",
      "name": "FgMontagemGrade",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgRedeAssistencia",
      "label": "FgRedeAssistencia",
      "name": "FgRedeAssistencia",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgProdutoSegmentoCliente",
      "label": "FgProdutoSegmentoCliente",
      "name": "FgProdutoSegmentoCliente",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgProdutosRelacionados",
      "label": "FgProdutosRelacionados",
      "name": "FgProdutosRelacionados",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgProdutosEquivalentes",
      "label": "FgProdutosEquivalentes",
      "name": "FgProdutosEquivalentes",
      "type": "string",
      "size": 1
    },
    {
      "field": "CaminhoExportVMS",
      "label": "CaminhoExportVMS",
      "name": "CaminhoExportVMS",
      "type": "string",
      "size": 128
    },
    {
      "field": "CaminhoImportVMS",
      "label": "CaminhoImportVMS",
      "name": "CaminhoImportVMS",
      "type": "string",
      "size": 128
    },
    {
      "field": "FgFidelidade",
      "label": "FgFidelidade",
      "name": "FgFidelidade",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdCategPadrao",
      "label": "CdCategPadrao",
      "name": "CdCategPadrao",
      "type": "string",
      "size": 6
    },
    {
      "field": "FgVendaClienteInativo",
      "label": "FgVendaClienteInativo",
      "name": "FgVendaClienteInativo",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTrocaPgtosCupom",
      "label": "FgTrocaPgtosCupom",
      "name": "FgTrocaPgtosCupom",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimeLinhasAdicionais",
      "label": "FgImprimeLinhasAdicionais",
      "name": "FgImprimeLinhasAdicionais",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCancelaCRECF",
      "label": "FgCancelaCRECF",
      "name": "FgCancelaCRECF",
      "type": "string",
      "size": 1
    },
    {
      "field": "PercVendaEspecial",
      "label": "PercVendaEspecial",
      "name": "PercVendaEspecial",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgObrigaPercLucro",
      "label": "FgObrigaPercLucro",
      "name": "FgObrigaPercLucro",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDifNfEntrada",
      "label": "FgDifNfEntrada",
      "name": "FgDifNfEntrada",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTrocaFilialPDV",
      "label": "FgTrocaFilialPDV",
      "name": "FgTrocaFilialPDV",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgExibeUltPedidos",
      "label": "FgExibeUltPedidos",
      "name": "FgExibeUltPedidos",
      "type": "string",
      "size": 1
    },
    {
      "field": "MesesPedido",
      "label": "MesesPedido",
      "name": "MesesPedido",
      "type": "int",
      "size": 2
    },
    {
      "field": "FgSenhaAbaixoCustoPed",
      "label": "FgSenhaAbaixoCustoPed",
      "name": "FgSenhaAbaixoCustoPed",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgControlaEnvelopes",
      "label": "FgControlaEnvelopes",
      "name": "FgControlaEnvelopes",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAlertaVlTabela",
      "label": "FgAlertaVlTabela",
      "name": "FgAlertaVlTabela",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimeItensKit",
      "label": "FgImprimeItensKit",
      "name": "FgImprimeItensKit",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCarregaItemKit",
      "label": "FgCarregaItemKit",
      "name": "FgCarregaItemKit",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgConfereCliente",
      "label": "FgConfereCliente",
      "name": "FgConfereCliente",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTeleEntrega",
      "label": "FgTeleEntrega",
      "name": "FgTeleEntrega",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCancelaCRENF",
      "label": "FgCancelaCRENF",
      "name": "FgCancelaCRENF",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAutorizacaoIndividual",
      "label": "FgAutorizacaoIndividual",
      "name": "FgAutorizacaoIndividual",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgConfereLotes",
      "label": "FgConfereLotes",
      "name": "FgConfereLotes",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCNPJObrigatorio",
      "label": "FgCNPJObrigatorio",
      "name": "FgCNPJObrigatorio",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgInscEstObrigatorio",
      "label": "FgInscEstObrigatorio",
      "name": "FgInscEstObrigatorio",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgVidalink",
      "label": "FgVidalink",
      "name": "FgVidalink",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgObrigaRGPsico",
      "label": "FgObrigaRGPsico",
      "name": "FgObrigaRGPsico",
      "type": "string",
      "size": 1
    },
    {
      "field": "CaminhoVidalink",
      "label": "CaminhoVidalink",
      "name": "CaminhoVidalink",
      "type": "string",
      "size": 512
    },
    {
      "field": "DiasCarenciaBloqCredito",
      "label": "DiasCarenciaBloqCredito",
      "name": "DiasCarenciaBloqCredito",
      "type": "int",
      "size": 2
    },
    {
      "field": "DtUltBloqueio",
      "label": "DtUltBloqueio",
      "name": "DtUltBloqueio",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgDataEntregaPedido",
      "label": "FgDataEntregaPedido",
      "name": "FgDataEntregaPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSeparacaoPedido",
      "label": "FgSeparacaoPedido",
      "name": "FgSeparacaoPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "ExibeItensSelPedido",
      "label": "ExibeItensSelPedido",
      "name": "ExibeItensSelPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumLoteOP",
      "label": "NumLoteOP",
      "name": "NumLoteOP",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgConferePedido",
      "label": "FgConferePedido",
      "name": "FgConferePedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgReabrePedido",
      "label": "FgReabrePedido",
      "name": "FgReabrePedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAtualizaDataOrc",
      "label": "FgAtualizaDataOrc",
      "name": "FgAtualizaDataOrc",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgExibeEstPedido",
      "label": "FgExibeEstPedido",
      "name": "FgExibeEstPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDuplicaItensPedido",
      "label": "FgDuplicaItensPedido",
      "name": "FgDuplicaItensPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPedidoAgenda",
      "label": "FgPedidoAgenda",
      "name": "FgPedidoAgenda",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTrocaOperadorCaixa",
      "label": "FgTrocaOperadorCaixa",
      "name": "FgTrocaOperadorCaixa",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTrocaTipoDocumentoBaixaCR",
      "label": "FgTrocaTipoDocumentoBaixaCR",
      "name": "FgTrocaTipoDocumentoBaixaCR",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEfetuaBaixaExtrato",
      "label": "FgEfetuaBaixaExtrato",
      "name": "FgEfetuaBaixaExtrato",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgComissaoItem",
      "label": "FgComissaoItem",
      "name": "FgComissaoItem",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgLoteObrigatorioOP",
      "label": "FgLoteObrigatorioOP",
      "name": "FgLoteObrigatorioOP",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPedSaidaSugestao",
      "label": "FgPedSaidaSugestao",
      "name": "FgPedSaidaSugestao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPedEntradaSugestao",
      "label": "FgPedEntradaSugestao",
      "name": "FgPedEntradaSugestao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDescontoPgto",
      "label": "FgDescontoPgto",
      "name": "FgDescontoPgto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgProducaoParcial",
      "label": "FgProducaoParcial",
      "name": "FgProducaoParcial",
      "type": "string",
      "size": 1
    },
    {
      "field": "CaminhoePharma",
      "label": "CaminhoePharma",
      "name": "CaminhoePharma",
      "type": "string",
      "size": 128
    },
    {
      "field": "FgBloqueiaCliente",
      "label": "FgBloqueiaCliente",
      "name": "FgBloqueiaCliente",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCalculoAutomatico",
      "label": "FgCalculoAutomatico",
      "name": "FgCalculoAutomatico",
      "type": "string",
      "size": 1
    },
    {
      "field": "QtdeMeses",
      "label": "QtdeMeses",
      "name": "QtdeMeses",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Multiplicador",
      "label": "Multiplicador",
      "name": "Multiplicador",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgMultiplasNOP",
      "label": "FgMultiplasNOP",
      "name": "FgMultiplasNOP",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgClienteImpressaoNF",
      "label": "FgClienteImpressaoNF",
      "name": "FgClienteImpressaoNF",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgObrigaDadosPedido",
      "label": "FgObrigaDadosPedido",
      "name": "FgObrigaDadosPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "MsgPedidoCompra",
      "label": "MsgPedidoCompra",
      "name": "MsgPedidoCompra",
      "type": "string",
      "size": 80
    },
    {
      "field": "FgAtendeParcialSaida",
      "label": "FgAtendeParcialSaida",
      "name": "FgAtendeParcialSaida",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimeContatoPedidoEntrada",
      "label": "FgImprimeContatoPedidoEntrada",
      "name": "FgImprimeContatoPedidoEntrada",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimeMsgPublicitaria",
      "label": "FgImprimeMsgPublicitaria",
      "name": "FgImprimeMsgPublicitaria",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimeCdReferencia",
      "label": "FgImprimeCdReferencia",
      "name": "FgImprimeCdReferencia",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImpCdProdPedidoModDesc",
      "label": "FgImpCdProdPedidoModDesc",
      "name": "FgImpCdProdPedidoModDesc",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimeDescricaoCompleta",
      "label": "FgImprimeDescricaoCompleta",
      "name": "FgImprimeDescricaoCompleta",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimeDataHoraNF",
      "label": "FgImprimeDataHoraNF",
      "name": "FgImprimeDataHoraNF",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAtualizaStatusPedido",
      "label": "FgAtualizaStatusPedido",
      "name": "FgAtualizaStatusPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgConsideraTaxaEntregaComoFrete",
      "label": "FgConsideraTaxaEntregaComoFrete",
      "name": "FgConsideraTaxaEntregaComoFrete",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImpLinhaSeparadora",
      "label": "FgImpLinhaSeparadora",
      "name": "FgImpLinhaSeparadora",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDadosCadastrais",
      "label": "FgDadosCadastrais",
      "name": "FgDadosCadastrais",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPotencialCompra",
      "label": "FgPotencialCompra",
      "name": "FgPotencialCompra",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgObrigaLctoBancarioCP",
      "label": "FgObrigaLctoBancarioCP",
      "name": "FgObrigaLctoBancarioCP",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgNFe",
      "label": "FgNFe",
      "name": "FgNFe",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSenhaGerEmiOrc",
      "label": "FgSenhaGerEmiOrc",
      "name": "FgSenhaGerEmiOrc",
      "type": "string",
      "size": 1
    },
    {
      "field": "DtFechamentoPeriodo",
      "label": "DtFechamentoPeriodo",
      "name": "DtFechamentoPeriodo",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgDevolucaoControlado",
      "label": "FgDevolucaoControlado",
      "name": "FgDevolucaoControlado",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEmissaoChequeFornecedor",
      "label": "FgEmissaoChequeFornecedor",
      "name": "FgEmissaoChequeFornecedor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgRecalculoCliente",
      "label": "FgRecalculoCliente",
      "name": "FgRecalculoCliente",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgRedutorComissaoItem",
      "label": "FgRedutorComissaoItem",
      "name": "FgRedutorComissaoItem",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPromocaoManual",
      "label": "FgPromocaoManual",
      "name": "FgPromocaoManual",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgVlLiquidoSelProduto",
      "label": "FgVlLiquidoSelProduto",
      "name": "FgVlLiquidoSelProduto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPlanoContas",
      "label": "FgPlanoContas",
      "name": "FgPlanoContas",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgLiberaDescOrcamento",
      "label": "FgLiberaDescOrcamento",
      "name": "FgLiberaDescOrcamento",
      "type": "string",
      "size": 1
    },
    {
      "field": "ExibeEstoqueItensPedido",
      "label": "ExibeEstoqueItensPedido",
      "name": "ExibeEstoqueItensPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAlteraClienteNF",
      "label": "FgAlteraClienteNF",
      "name": "FgAlteraClienteNF",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDestacaFaltaEstoquePed",
      "label": "FgDestacaFaltaEstoquePed",
      "name": "FgDestacaFaltaEstoquePed",
      "type": "string",
      "size": 1
    },
    {
      "field": "QtdeCaracteresObsNota",
      "label": "QtdeCaracteresObsNota",
      "name": "QtdeCaracteresObsNota",
      "type": "int",
      "size": 2
    },
    {
      "field": "FgExibeEstoqueFiliaisSelecao",
      "label": "FgExibeEstoqueFiliaisSelecao",
      "name": "FgExibeEstoqueFiliaisSelecao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBloqueiotroco",
      "label": "FgBloqueiotroco",
      "name": "FgBloqueiotroco",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFechamentoDinheiro",
      "label": "FgFechamentoDinheiro",
      "name": "FgFechamentoDinheiro",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPermiteInativoOrcamentos",
      "label": "FgPermiteInativoOrcamentos",
      "name": "FgPermiteInativoOrcamentos",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAlteraDescricaoProduto",
      "label": "FgAlteraDescricaoProduto",
      "name": "FgAlteraDescricaoProduto",
      "type": "string",
      "size": 1
    },
    {
      "field": "CstIPI",
      "label": "CstIPI",
      "name": "CstIPI",
      "type": "string",
      "size": 2
    },
    {
      "field": "CstPIS",
      "label": "CstPIS",
      "name": "CstPIS",
      "type": "string",
      "size": 2
    },
    {
      "field": "CstCOFINS",
      "label": "CstCOFINS",
      "name": "CstCOFINS",
      "type": "string",
      "size": 2
    },
    {
      "field": "CaminhoNFe",
      "label": "CaminhoNFe",
      "name": "CaminhoNFe",
      "type": "string",
      "size": 300
    },
    {
      "field": "CertificadoNFe",
      "label": "CertificadoNFe",
      "name": "CertificadoNFe",
      "type": "string",
      "size": 600
    },
    {
      "field": "UsuarioNFe",
      "label": "UsuarioNFe",
      "name": "UsuarioNFe",
      "type": "string",
      "size": 300
    },
    {
      "field": "SenhaNFe",
      "label": "SenhaNFe",
      "name": "SenhaNFe",
      "type": "string",
      "size": 300
    },
    {
      "field": "ProxyNFe",
      "label": "ProxyNFe",
      "name": "ProxyNFe",
      "type": "string",
      "size": 300
    },
    {
      "field": "LicencaNFe",
      "label": "LicencaNFe",
      "name": "LicencaNFe",
      "type": "string",
      "size": 300
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "int",
      "size": 4
    },
    {
      "field": "ConfLib",
      "label": "ConfLib",
      "name": "ConfLib",
      "type": "string",
      "size": 256
    },
    {
      "field": "QtdeLimite",
      "label": "QtdeLimite",
      "name": "QtdeLimite",
      "type": "int",
      "size": 2
    },
    {
      "field": "FgPreVendaSimplificada",
      "label": "FgPreVendaSimplificada",
      "name": "FgPreVendaSimplificada",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSelecaoInformacaoAdicional",
      "label": "FgSelecaoInformacaoAdicional",
      "name": "FgSelecaoInformacaoAdicional",
      "type": "string",
      "size": 1
    },
    {
      "field": "FonteMediaImposto",
      "label": "FonteMediaImposto",
      "name": "FonteMediaImposto",
      "type": "string",
      "size": 32
    },
    {
      "field": "FgMantemDigitacaoDescricao",
      "label": "FgMantemDigitacaoDescricao",
      "name": "FgMantemDigitacaoDescricao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgExibeEstOrcamento",
      "label": "FgExibeEstOrcamento",
      "name": "FgExibeEstOrcamento",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgConsisteInscricao",
      "label": "FgConsisteInscricao",
      "name": "FgConsisteInscricao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimeComprovanteMovCredito",
      "label": "FgImprimeComprovanteMovCredito",
      "name": "FgImprimeComprovanteMovCredito",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgConfereLoteIndividual",
      "label": "FgConfereLoteIndividual",
      "name": "FgConfereLoteIndividual",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPedidoOrdemFaturamento",
      "label": "FgPedidoOrdemFaturamento",
      "name": "FgPedidoOrdemFaturamento",
      "type": "string",
      "size": 1
    },
    {
      "field": "FonteCodigoBarraBoleto",
      "label": "FonteCodigoBarraBoleto",
      "name": "FonteCodigoBarraBoleto",
      "type": "string",
      "size": 32
    },
    {
      "field": "FgHistoricoSTEntrada",
      "label": "FgHistoricoSTEntrada",
      "name": "FgHistoricoSTEntrada",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgMostraDRE",
      "label": "FgMostraDRE",
      "name": "FgMostraDRE",
      "type": "string",
      "size": 1
    },
    {
      "field": "MsgCondFornecimento",
      "label": "MsgCondFornecimento",
      "name": "MsgCondFornecimento",
      "type": "string",
      "size": 1024
    },
    {
      "field": "FgBloqueiaCreditoCliente",
      "label": "FgBloqueiaCreditoCliente",
      "name": "FgBloqueiaCreditoCliente",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDemonstraCustoPreVenda",
      "label": "FgDemonstraCustoPreVenda",
      "name": "FgDemonstraCustoPreVenda",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDemonstraPedidoEntradaPreVenda",
      "label": "FgDemonstraPedidoEntradaPreVenda",
      "name": "FgDemonstraPedidoEntradaPreVenda",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdClientePadraoVidalink",
      "label": "CdClientePadraoVidalink",
      "name": "CdClientePadraoVidalink",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdVendedorPadraoVidalink",
      "label": "CdVendedorPadraoVidalink",
      "name": "CdVendedorPadraoVidalink",
      "type": "int",
      "size": 4
    },
    {
      "field": "FgRecuperacaoST",
      "label": "FgRecuperacaoST",
      "name": "FgRecuperacaoST",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgManutencaoGNRE",
      "label": "FgManutencaoGNRE",
      "name": "FgManutencaoGNRE",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgVendaConsultorio",
      "label": "FgVendaConsultorio",
      "name": "FgVendaConsultorio",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAlteraCPBaixado",
      "label": "FgAlteraCPBaixado",
      "name": "FgAlteraCPBaixado",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEnviarPFIMS",
      "label": "FgEnviarPFIMS",
      "name": "FgEnviarPFIMS",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgControlarChequesTerceiros",
      "label": "FgControlarChequesTerceiros",
      "name": "FgControlarChequesTerceiros",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDuplicaBaixaCR",
      "label": "FgDuplicaBaixaCR",
      "name": "FgDuplicaBaixaCR",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBalancaCaminhao",
      "label": "FgBalancaCaminhao",
      "name": "FgBalancaCaminhao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomenteClientesVendedor",
      "label": "FgSomenteClientesVendedor",
      "name": "FgSomenteClientesVendedor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgLctoFinanceiroOutrasFormas",
      "label": "FgLctoFinanceiroOutrasFormas",
      "name": "FgLctoFinanceiroOutrasFormas",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDespesasPedido",
      "label": "FgDespesasPedido",
      "name": "FgDespesasPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPharmaLink",
      "label": "FgPharmaLink",
      "name": "FgPharmaLink",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCalculoImpostoLitros",
      "label": "FgCalculoImpostoLitros",
      "name": "FgCalculoImpostoLitros",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgObrigaNCMProduto",
      "label": "FgObrigaNCMProduto",
      "name": "FgObrigaNCMProduto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgObrigaDadosNFeCliente",
      "label": "FgObrigaDadosNFeCliente",
      "name": "FgObrigaDadosNFeCliente",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDetalhaCartao",
      "label": "FgDetalhaCartao",
      "name": "FgDetalhaCartao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgVencimentoTituloDiaUtil",
      "label": "FgVencimentoTituloDiaUtil",
      "name": "FgVencimentoTituloDiaUtil",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBaixaAgrupadaSemJuros",
      "label": "FgBaixaAgrupadaSemJuros",
      "name": "FgBaixaAgrupadaSemJuros",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimeEnderecoPrateleira",
      "label": "FgImprimeEnderecoPrateleira",
      "name": "FgImprimeEnderecoPrateleira",
      "type": "string",
      "size": 1
    },
    {
      "field": "SerieSelecaoInicial",
      "label": "SerieSelecaoInicial",
      "name": "SerieSelecaoInicial",
      "type": "string",
      "size": 3
    },
    {
      "field": "SerieSelecaoFinal",
      "label": "SerieSelecaoFinal",
      "name": "SerieSelecaoFinal",
      "type": "string",
      "size": 3
    },
    {
      "field": "FgAlertaAniversariantes",
      "label": "FgAlertaAniversariantes",
      "name": "FgAlertaAniversariantes",
      "type": "string",
      "size": 3
    },
    {
      "field": "FgFreteCompoeCalculoCustoMedio",
      "label": "FgFreteCompoeCalculoCustoMedio",
      "name": "FgFreteCompoeCalculoCustoMedio",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImprimeObsPedidoInfComplementar",
      "label": "FgImprimeObsPedidoInfComplementar",
      "name": "FgImprimeObsPedidoInfComplementar",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCancelaNotaPedido",
      "label": "FgCancelaNotaPedido",
      "name": "FgCancelaNotaPedido",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgGeraArquivoSerasa",
      "label": "FgGeraArquivoSerasa",
      "name": "FgGeraArquivoSerasa",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEstornoDtRecebimento",
      "label": "FgEstornoDtRecebimento",
      "name": "FgEstornoDtRecebimento",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBloqueioVendaInadimplentes",
      "label": "FgBloqueioVendaInadimplentes",
      "name": "FgBloqueioVendaInadimplentes",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgObrigaCESTProduto",
      "label": "FgObrigaCESTProduto",
      "name": "FgObrigaCESTProduto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgChequeCompensarLimiteCredito",
      "label": "FgChequeCompensarLimiteCredito",
      "name": "FgChequeCompensarLimiteCredito",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPrecoCliente",
      "label": "FgPrecoCliente",
      "name": "FgPrecoCliente",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBloqueiaCadastroClienteCpfCnpj",
      "label": "FgBloqueiaCadastroClienteCpfCnpj",
      "name": "FgBloqueiaCadastroClienteCpfCnpj",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgApresentaAbaMeta",
      "label": "FgApresentaAbaMeta",
      "name": "FgApresentaAbaMeta",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgVendaMestreGrade",
      "label": "FgVendaMestreGrade",
      "name": "FgVendaMestreGrade",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBuscaCdProdutoXML",
      "label": "FgBuscaCdProdutoXML",
      "name": "FgBuscaCdProdutoXML",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBloqueioVendaProdutoFilial",
      "label": "FgBloqueioVendaProdutoFilial",
      "name": "FgBloqueioVendaProdutoFilial",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgViaUnicaPreVendaSimplificada",
      "label": "FgViaUnicaPreVendaSimplificada",
      "name": "FgViaUnicaPreVendaSimplificada",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCobBancTipoDocumento",
      "label": "FgCobBancTipoDocumento",
      "name": "FgCobBancTipoDocumento",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBloqueiaLancamentoRetroativo",
      "label": "FgBloqueiaLancamentoRetroativo",
      "name": "FgBloqueiaLancamentoRetroativo",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCodigoAuxiliarProduto",
      "label": "FgCodigoAuxiliarProduto",
      "name": "FgCodigoAuxiliarProduto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBuscaAssocXML",
      "label": "FgBuscaAssocXML",
      "name": "FgBuscaAssocXML",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgConciliaCNPJImportXML",
      "label": "FgConciliaCNPJImportXML",
      "name": "FgConciliaCNPJImportXML",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPrecoFabricaCompras",
      "label": "FgPrecoFabricaCompras",
      "name": "FgPrecoFabricaCompras",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgApresentaValorDinheiroSangria",
      "label": "FgApresentaValorDinheiroSangria",
      "name": "FgApresentaValorDinheiroSangria",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgApresentaPesoBruto",
      "label": "FgApresentaPesoBruto",
      "name": "FgApresentaPesoBruto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSomenteAssocForn",
      "label": "FgSomenteAssocForn",
      "name": "FgSomenteAssocForn",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPraticaPrecoAtacadoQtde",
      "label": "FgPraticaPrecoAtacadoQtde",
      "name": "FgPraticaPrecoAtacadoQtde",
      "type": "string",
      "size": 1
    },
    {
      "field": "IdRelease",
      "label": "IdRelease",
      "name": "IdRelease",
      "type": "string",
      "size": 32
    },
    {
      "field": "FgConsideraCdInterno",
      "label": "FgConsideraCdInterno",
      "name": "FgConsideraCdInterno",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgDiferencaUTrib",
      "label": "FgDiferencaUTrib",
      "name": "FgDiferencaUTrib",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgComanda",
      "label": "FgComanda",
      "name": "FgComanda",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgMultiplosPedidosNFe",
      "label": "FgMultiplosPedidosNFe",
      "name": "FgMultiplosPedidosNFe",
      "type": "string",
      "size": 1
    },
    {
      "field": "DtIniCustoMedioDev",
      "label": "DtIniCustoMedioDev",
      "name": "DtIniCustoMedioDev",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgOrdemServico",
      "label": "FgOrdemServico",
      "name": "FgOrdemServico",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTicketVale",
      "label": "FgTicketVale",
      "name": "FgTicketVale",
      "type": "string",
      "size": 1
    },
    {
      "field": "DiasContraVale",
      "label": "DiasContraVale",
      "name": "DiasContraVale",
      "type": "int",
      "size": 5
    },
    {
      "field": "FgDevolucaoSimplificada",
      "label": "FgDevolucaoSimplificada",
      "name": "FgDevolucaoSimplificada",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgImpComplemento",
      "label": "FgImpComplemento",
      "name": "FgImpComplemento",
      "type": "string",
      "size": 1
    },
    {
      "field": "IdCSRT",
      "label": "IdCSRT",
      "name": "IdCSRT",
      "type": "string",
      "size": 16
    },
    {
      "field": "CSRT",
      "label": "CSRT",
      "name": "CSRT",
      "type": "string",
      "size": 128
    },
    {
      "field": "MascaraPlanoContas1",
      "label": "MascaraPlanoContas1",
      "name": "MascaraPlanoContas1",
      "type": "int",
      "size": 5
    },
    {
      "field": "MascaraPlanoContas2",
      "label": "MascaraPlanoContas2",
      "name": "MascaraPlanoContas2",
      "type": "int",
      "size": 5
    },
    {
      "field": "MascaraPlanoContas3",
      "label": "MascaraPlanoContas3",
      "name": "MascaraPlanoContas3",
      "type": "int",
      "size": 5
    },
    {
      "field": "MascaraPlanoContas4",
      "label": "MascaraPlanoContas4",
      "name": "MascaraPlanoContas4",
      "type": "int",
      "size": 5
    },
    {
      "field": "MascaraPlanoContas5",
      "label": "MascaraPlanoContas5",
      "name": "MascaraPlanoContas5",
      "type": "int",
      "size": 5
    },
    {
      "field": "MascaraPlanoContas6",
      "label": "MascaraPlanoContas6",
      "name": "MascaraPlanoContas6",
      "type": "int",
      "size": 5
    },
    {
      "field": "MascaraPlanoContas7",
      "label": "MascaraPlanoContas7",
      "name": "MascaraPlanoContas7",
      "type": "int",
      "size": 5
    },
    {
      "field": "DtUltimoBackup",
      "label": "DtUltimoBackup",
      "name": "DtUltimoBackup",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtUltimaNotificacaoBackup",
      "label": "DtUltimaNotificacaoBackup",
      "name": "DtUltimaNotificacaoBackup",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "NumDiasNotificacaoBackup",
      "label": "NumDiasNotificacaoBackup",
      "name": "NumDiasNotificacaoBackup",
      "type": "int",
      "size": 5
    },
    {
      "field": "FgDiferencaUTribSomenteUFEX",
      "label": "FgDiferencaUTribSomenteUFEX",
      "name": "FgDiferencaUTribSomenteUFEX",
      "type": "string",
      "size": 1
    },
    {
      "field": "DiasHistorico",
      "label": "DiasHistorico",
      "name": "DiasHistorico",
      "type": "int",
      "size": 4
    },
    {
      "field": "PercRecompensa",
      "label": "PercRecompensa",
      "name": "PercRecompensa",
      "type": "int",
      "size": 5,
      "scale": 2
    },
    {
      "field": "FgClubeCompras",
      "label": "FgClubeCompras",
      "name": "FgClubeCompras",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgOrdemSeparacao",
      "label": "FgOrdemSeparacao",
      "name": "FgOrdemSeparacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgEnderecoEntrega",
      "label": "FgEnderecoEntrega",
      "name": "FgEnderecoEntrega",
      "type": "string",
      "size": 1
    },
    {
      "field": "MesesXML",
      "label": "MesesXML",
      "name": "MesesXML",
      "type": "int",
      "size": 5
    }
  ]
}

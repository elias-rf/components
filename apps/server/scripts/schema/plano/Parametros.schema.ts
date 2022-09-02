import { TEntity } from "@er/types/*";

export const Parametros: TEntity =
  {
  "database": "plano",
  "table": "Parametros",
  "fields": [
    {
      "field": "Arredondamento",
      "label": "Arredondamento",
      "name": "Arredondamento",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdGerente",
      "label": "CdGerente",
      "name": "CdGerente",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdOperador",
      "label": "CdOperador",
      "name": "CdOperador",
      "type": "string",
      "size": 10
    },
    {
      "field": "Chorao",
      "label": "Chorao",
      "name": "Chorao",
      "type": "string",
      "size": 1
    },
    {
      "field": "DtAbertura",
      "label": "DtAbertura",
      "name": "DtAbertura",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtUltimaExportacao",
      "label": "DtUltimaExportacao",
      "name": "DtUltimaExportacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtUltimaImportacao",
      "label": "DtUltimaImportacao",
      "name": "DtUltimaImportacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtUltimaMovimentacao",
      "label": "DtUltimaMovimentacao",
      "name": "DtUltimaMovimentacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Ean",
      "label": "Ean",
      "name": "Ean",
      "type": "string",
      "size": 1
    },
    {
      "field": "Exportacao",
      "label": "Exportacao",
      "name": "Exportacao",
      "type": "string",
      "size": 30
    },
    {
      "field": "Extrato",
      "label": "Extrato",
      "name": "Extrato",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgGravaTipo",
      "label": "FgGravaTipo",
      "name": "FgGravaTipo",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTransPrecoBruto",
      "label": "FgTransPrecoBruto",
      "name": "FgTransPrecoBruto",
      "type": "string",
      "size": 1
    },
    {
      "field": "Figura",
      "label": "Figura",
      "name": "Figura",
      "type": "string",
      "size": 50
    },
    {
      "field": "Fonte",
      "label": "Fonte",
      "name": "Fonte",
      "type": "int",
      "size": 1
    },
    {
      "field": "Gaveta",
      "label": "Gaveta",
      "name": "Gaveta",
      "type": "int",
      "size": 1
    },
    {
      "field": "Identificador",
      "label": "Identificador",
      "name": "Identificador",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Importacao",
      "label": "Importacao",
      "name": "Importacao",
      "type": "string",
      "size": 30
    },
    {
      "field": "Impressora",
      "label": "Impressora",
      "name": "Impressora",
      "type": "string",
      "size": 20
    },
    {
      "field": "LoTipo",
      "label": "LoTipo",
      "name": "LoTipo",
      "type": "string",
      "size": 1
    },
    {
      "field": "MultiplosCheques",
      "label": "MultiplosCheques",
      "name": "MultiplosCheques",
      "type": "string",
      "size": 1
    },
    {
      "field": "NrRemessaBco",
      "label": "NrRemessaBco",
      "name": "NrRemessaBco",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumCupom",
      "label": "NumCupom",
      "name": "NumCupom",
      "type": "int",
      "size": 4
    },
    {
      "field": "Porta",
      "label": "Porta",
      "name": "Porta",
      "type": "int",
      "size": 1
    },
    {
      "field": "PrimeiraSequencia",
      "label": "PrimeiraSequencia",
      "name": "PrimeiraSequencia",
      "type": "int",
      "size": 4
    },
    {
      "field": "PrimeiroCupom",
      "label": "PrimeiroCupom",
      "name": "PrimeiroCupom",
      "type": "int",
      "size": 4
    },
    {
      "field": "QtdePadrao",
      "label": "QtdePadrao",
      "name": "QtdePadrao",
      "type": "int",
      "size": 1
    },
    {
      "field": "SangriaMaxima",
      "label": "SangriaMaxima",
      "name": "SangriaMaxima",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "SangriaMinima",
      "label": "SangriaMinima",
      "name": "SangriaMinima",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Scanner",
      "label": "Scanner",
      "name": "Scanner",
      "type": "int",
      "size": 1
    },
    {
      "field": "T0",
      "label": "T0",
      "name": "T0",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "T01",
      "label": "T01",
      "name": "T01",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "T02",
      "label": "T02",
      "name": "T02",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "T03",
      "label": "T03",
      "name": "T03",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "T04",
      "label": "T04",
      "name": "T04",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "T05",
      "label": "T05",
      "name": "T05",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "T06",
      "label": "T06",
      "name": "T06",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "T07",
      "label": "T07",
      "name": "T07",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "T08",
      "label": "T08",
      "name": "T08",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "T09",
      "label": "T09",
      "name": "T09",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "T10",
      "label": "T10",
      "name": "T10",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "T11",
      "label": "T11",
      "name": "T11",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "T12",
      "label": "T12",
      "name": "T12",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "TamFormulario",
      "label": "TamFormulario",
      "name": "TamFormulario",
      "type": "int",
      "size": 1
    },
    {
      "field": "TamMensagem1",
      "label": "TamMensagem1",
      "name": "TamMensagem1",
      "type": "int",
      "size": 1
    },
    {
      "field": "TamMensagem2",
      "label": "TamMensagem2",
      "name": "TamMensagem2",
      "type": "int",
      "size": 1
    },
    {
      "field": "TamMensagem3",
      "label": "TamMensagem3",
      "name": "TamMensagem3",
      "type": "int",
      "size": 1
    },
    {
      "field": "UltCupom",
      "label": "UltCupom",
      "name": "UltCupom",
      "type": "int",
      "size": 4
    },
    {
      "field": "Utilizacao",
      "label": "Utilizacao",
      "name": "Utilizacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "Vendedor",
      "label": "Vendedor",
      "name": "Vendedor",
      "type": "string",
      "size": 1
    },
    {
      "field": "VersaoImpressora",
      "label": "VersaoImpressora",
      "name": "VersaoImpressora",
      "type": "int",
      "size": 1
    },
    {
      "field": "ResumoDepto",
      "label": "ResumoDepto",
      "name": "ResumoDepto",
      "type": "string",
      "size": 1
    },
    {
      "field": "ResumoCaixa",
      "label": "ResumoCaixa",
      "name": "ResumoCaixa",
      "type": "string",
      "size": 1
    },
    {
      "field": "ResumoMovimento",
      "label": "ResumoMovimento",
      "name": "ResumoMovimento",
      "type": "string",
      "size": 1
    },
    {
      "field": "ResumoHora",
      "label": "ResumoHora",
      "name": "ResumoHora",
      "type": "string",
      "size": 1
    },
    {
      "field": "MovimentoCaixa",
      "label": "MovimentoCaixa",
      "name": "MovimentoCaixa",
      "type": "string",
      "size": 1
    },
    {
      "field": "MovimentoVendedor",
      "label": "MovimentoVendedor",
      "name": "MovimentoVendedor",
      "type": "string",
      "size": 1
    },
    {
      "field": "VisualizaObs",
      "label": "VisualizaObs",
      "name": "VisualizaObs",
      "type": "string",
      "size": 1
    },
    {
      "field": "Decodificador",
      "label": "Decodificador",
      "name": "Decodificador",
      "type": "string",
      "size": 10
    },
    {
      "field": "AcumuladorPadrao",
      "label": "AcumuladorPadrao",
      "name": "AcumuladorPadrao",
      "type": "string",
      "size": 3
    },
    {
      "field": "FgNumSequencial",
      "label": "FgNumSequencial",
      "name": "FgNumSequencial",
      "type": "string",
      "size": 1
    },
    {
      "field": "Mensagem1",
      "label": "Mensagem1",
      "name": "Mensagem1",
      "type": "string",
      "size": 48
    },
    {
      "field": "Mensagem2",
      "label": "Mensagem2",
      "name": "Mensagem2",
      "type": "string",
      "size": 48
    },
    {
      "field": "Mensagem3",
      "label": "Mensagem3",
      "name": "Mensagem3",
      "type": "string",
      "size": 48
    },
    {
      "field": "FgImpLocalEntrega",
      "label": "FgImpLocalEntrega",
      "name": "FgImpLocalEntrega",
      "type": "string",
      "size": 1
    },
    {
      "field": "AcServicos",
      "label": "AcServicos",
      "name": "AcServicos",
      "type": "string",
      "size": 5
    },
    {
      "field": "QtdadeCupomVinculado",
      "label": "QtdadeCupomVinculado",
      "name": "QtdadeCupomVinculado",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdTipoVendaPadrao",
      "label": "CdTipoVendaPadrao",
      "name": "CdTipoVendaPadrao",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdClientePadrao",
      "label": "CdClientePadrao",
      "name": "CdClientePadrao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdVendedorPadrao",
      "label": "CdVendedorPadrao",
      "name": "CdVendedorPadrao",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgSetor",
      "label": "FgSetor",
      "name": "FgSetor",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTrocaTipoVendaPed",
      "label": "FgTrocaTipoVendaPed",
      "name": "FgTrocaTipoVendaPed",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgCancelaCupom",
      "label": "FgCancelaCupom",
      "name": "FgCancelaCupom",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTermica",
      "label": "FgTermica",
      "name": "FgTermica",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgAberturaLogon",
      "label": "FgAberturaLogon",
      "name": "FgAberturaLogon",
      "type": "string",
      "size": 1
    },
    {
      "field": "AcServicos2",
      "label": "AcServicos2",
      "name": "AcServicos2",
      "type": "string",
      "size": 5
    },
    {
      "field": "FgVerificaReducaoImpressora",
      "label": "FgVerificaReducaoImpressora",
      "name": "FgVerificaReducaoImpressora",
      "type": "string",
      "size": 1
    }
  ]
}

import { TTableDef } from "@/types/model";

export const Parametros: TTableDef = {
  database: "plano",
  table: "Parametros",
  fields: [
    {
      field: "Arredondamento",
      label: "Arredondamento",
      name: "Arredondamento",
      typeField: "string",
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdGerente",
      label: "CdGerente",
      name: "CdGerente",
      typeField: "int",
    },
    {
      field: "CdOperador",
      label: "CdOperador",
      name: "CdOperador",
      typeField: "string",
    },
    {
      field: "Chorao",
      label: "Chorao",
      name: "Chorao",
      typeField: "string",
    },
    {
      field: "DtAbertura",
      label: "DtAbertura",
      name: "DtAbertura",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltimaExportacao",
      label: "DtUltimaExportacao",
      name: "DtUltimaExportacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltimaImportacao",
      label: "DtUltimaImportacao",
      name: "DtUltimaImportacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltimaMovimentacao",
      label: "DtUltimaMovimentacao",
      name: "DtUltimaMovimentacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Ean",
      label: "Ean",
      name: "Ean",
      typeField: "string",
    },
    {
      field: "Exportacao",
      label: "Exportacao",
      name: "Exportacao",
      typeField: "string",
    },
    {
      field: "Extrato",
      label: "Extrato",
      name: "Extrato",
      typeField: "string",
    },
    {
      field: "FgGravaTipo",
      label: "FgGravaTipo",
      name: "FgGravaTipo",
      typeField: "string",
    },
    {
      field: "FgTransPrecoBruto",
      label: "FgTransPrecoBruto",
      name: "FgTransPrecoBruto",
      typeField: "string",
    },
    {
      field: "Figura",
      label: "Figura",
      name: "Figura",
      typeField: "string",
    },
    {
      field: "Fonte",
      label: "Fonte",
      name: "Fonte",
      typeField: "int",
    },
    {
      field: "Gaveta",
      label: "Gaveta",
      name: "Gaveta",
      typeField: "int",
    },
    {
      field: "Identificador",
      label: "Identificador",
      name: "Identificador",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Importacao",
      label: "Importacao",
      name: "Importacao",
      typeField: "string",
    },
    {
      field: "Impressora",
      label: "Impressora",
      name: "Impressora",
      typeField: "string",
    },
    {
      field: "LoTipo",
      label: "LoTipo",
      name: "LoTipo",
      typeField: "string",
    },
    {
      field: "MultiplosCheques",
      label: "MultiplosCheques",
      name: "MultiplosCheques",
      typeField: "string",
    },
    {
      field: "NrRemessaBco",
      label: "NrRemessaBco",
      name: "NrRemessaBco",
      typeField: "int",
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "int",
    },
    {
      field: "Porta",
      label: "Porta",
      name: "Porta",
      typeField: "int",
    },
    {
      field: "PrimeiraSequencia",
      label: "PrimeiraSequencia",
      name: "PrimeiraSequencia",
      typeField: "int",
    },
    {
      field: "PrimeiroCupom",
      label: "PrimeiroCupom",
      name: "PrimeiroCupom",
      typeField: "int",
    },
    {
      field: "QtdePadrao",
      label: "QtdePadrao",
      name: "QtdePadrao",
      typeField: "int",
    },
    {
      field: "SangriaMaxima",
      label: "SangriaMaxima",
      name: "SangriaMaxima",
      typeField: "float",

      scale: 4,
    },
    {
      field: "SangriaMinima",
      label: "SangriaMinima",
      name: "SangriaMinima",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Scanner",
      label: "Scanner",
      name: "Scanner",
      typeField: "int",
    },
    {
      field: "T0",
      label: "T0",
      name: "T0",
      typeField: "float",

      scale: 4,
    },
    {
      field: "T01",
      label: "T01",
      name: "T01",
      typeField: "float",

      scale: 4,
    },
    {
      field: "T02",
      label: "T02",
      name: "T02",
      typeField: "float",

      scale: 4,
    },
    {
      field: "T03",
      label: "T03",
      name: "T03",
      typeField: "float",

      scale: 4,
    },
    {
      field: "T04",
      label: "T04",
      name: "T04",
      typeField: "float",

      scale: 4,
    },
    {
      field: "T05",
      label: "T05",
      name: "T05",
      typeField: "float",

      scale: 4,
    },
    {
      field: "T06",
      label: "T06",
      name: "T06",
      typeField: "float",

      scale: 4,
    },
    {
      field: "T07",
      label: "T07",
      name: "T07",
      typeField: "float",

      scale: 4,
    },
    {
      field: "T08",
      label: "T08",
      name: "T08",
      typeField: "float",

      scale: 4,
    },
    {
      field: "T09",
      label: "T09",
      name: "T09",
      typeField: "float",

      scale: 4,
    },
    {
      field: "T10",
      label: "T10",
      name: "T10",
      typeField: "float",

      scale: 4,
    },
    {
      field: "T11",
      label: "T11",
      name: "T11",
      typeField: "float",

      scale: 4,
    },
    {
      field: "T12",
      label: "T12",
      name: "T12",
      typeField: "float",

      scale: 4,
    },
    {
      field: "TamFormulario",
      label: "TamFormulario",
      name: "TamFormulario",
      typeField: "int",
    },
    {
      field: "TamMensagem1",
      label: "TamMensagem1",
      name: "TamMensagem1",
      typeField: "int",
    },
    {
      field: "TamMensagem2",
      label: "TamMensagem2",
      name: "TamMensagem2",
      typeField: "int",
    },
    {
      field: "TamMensagem3",
      label: "TamMensagem3",
      name: "TamMensagem3",
      typeField: "int",
    },
    {
      field: "UltCupom",
      label: "UltCupom",
      name: "UltCupom",
      typeField: "int",
    },
    {
      field: "Utilizacao",
      label: "Utilizacao",
      name: "Utilizacao",
      typeField: "string",
    },
    {
      field: "Vendedor",
      label: "Vendedor",
      name: "Vendedor",
      typeField: "string",
    },
    {
      field: "VersaoImpressora",
      label: "VersaoImpressora",
      name: "VersaoImpressora",
      typeField: "int",
    },
    {
      field: "ResumoDepto",
      label: "ResumoDepto",
      name: "ResumoDepto",
      typeField: "string",
    },
    {
      field: "ResumoCaixa",
      label: "ResumoCaixa",
      name: "ResumoCaixa",
      typeField: "string",
    },
    {
      field: "ResumoMovimento",
      label: "ResumoMovimento",
      name: "ResumoMovimento",
      typeField: "string",
    },
    {
      field: "ResumoHora",
      label: "ResumoHora",
      name: "ResumoHora",
      typeField: "string",
    },
    {
      field: "MovimentoCaixa",
      label: "MovimentoCaixa",
      name: "MovimentoCaixa",
      typeField: "string",
    },
    {
      field: "MovimentoVendedor",
      label: "MovimentoVendedor",
      name: "MovimentoVendedor",
      typeField: "string",
    },
    {
      field: "VisualizaObs",
      label: "VisualizaObs",
      name: "VisualizaObs",
      typeField: "string",
    },
    {
      field: "Decodificador",
      label: "Decodificador",
      name: "Decodificador",
      typeField: "string",
    },
    {
      field: "AcumuladorPadrao",
      label: "AcumuladorPadrao",
      name: "AcumuladorPadrao",
      typeField: "string",
    },
    {
      field: "FgNumSequencial",
      label: "FgNumSequencial",
      name: "FgNumSequencial",
      typeField: "string",
    },
    {
      field: "Mensagem1",
      label: "Mensagem1",
      name: "Mensagem1",
      typeField: "string",
    },
    {
      field: "Mensagem2",
      label: "Mensagem2",
      name: "Mensagem2",
      typeField: "string",
    },
    {
      field: "Mensagem3",
      label: "Mensagem3",
      name: "Mensagem3",
      typeField: "string",
    },
    {
      field: "FgImpLocalEntrega",
      label: "FgImpLocalEntrega",
      name: "FgImpLocalEntrega",
      typeField: "string",
    },
    {
      field: "AcServicos",
      label: "AcServicos",
      name: "AcServicos",
      typeField: "string",
    },
    {
      field: "QtdadeCupomVinculado",
      label: "QtdadeCupomVinculado",
      name: "QtdadeCupomVinculado",
      typeField: "int",
    },
    {
      field: "CdTipoVendaPadrao",
      label: "CdTipoVendaPadrao",
      name: "CdTipoVendaPadrao",
      typeField: "int",
    },
    {
      field: "CdClientePadrao",
      label: "CdClientePadrao",
      name: "CdClientePadrao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdVendedorPadrao",
      label: "CdVendedorPadrao",
      name: "CdVendedorPadrao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgSetor",
      label: "FgSetor",
      name: "FgSetor",
      typeField: "string",
    },
    {
      field: "FgTrocaTipoVendaPed",
      label: "FgTrocaTipoVendaPed",
      name: "FgTrocaTipoVendaPed",
      typeField: "string",
    },
    {
      field: "FgCancelaCupom",
      label: "FgCancelaCupom",
      name: "FgCancelaCupom",
      typeField: "string",
    },
    {
      field: "FgTermica",
      label: "FgTermica",
      name: "FgTermica",
      typeField: "string",
    },
    {
      field: "FgAberturaLogon",
      label: "FgAberturaLogon",
      name: "FgAberturaLogon",
      typeField: "string",
    },
    {
      field: "AcServicos2",
      label: "AcServicos2",
      name: "AcServicos2",
      typeField: "string",
    },
    {
      field: "FgVerificaReducaoImpressora",
      label: "FgVerificaReducaoImpressora",
      name: "FgVerificaReducaoImpressora",
      typeField: "string",
    },
  ],
};

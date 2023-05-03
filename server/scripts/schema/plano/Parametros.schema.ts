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
      size: 1,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdGerente",
      label: "CdGerente",
      name: "CdGerente",
      typeField: "int",
      size: 4,
    },
    {
      field: "CdOperador",
      label: "CdOperador",
      name: "CdOperador",
      typeField: "string",
      size: 10,
    },
    {
      field: "Chorao",
      label: "Chorao",
      name: "Chorao",
      typeField: "string",
      size: 1,
    },
    {
      field: "DtAbertura",
      label: "DtAbertura",
      name: "DtAbertura",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtUltimaExportacao",
      label: "DtUltimaExportacao",
      name: "DtUltimaExportacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtUltimaImportacao",
      label: "DtUltimaImportacao",
      name: "DtUltimaImportacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtUltimaMovimentacao",
      label: "DtUltimaMovimentacao",
      name: "DtUltimaMovimentacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Ean",
      label: "Ean",
      name: "Ean",
      typeField: "string",
      size: 1,
    },
    {
      field: "Exportacao",
      label: "Exportacao",
      name: "Exportacao",
      typeField: "string",
      size: 30,
    },
    {
      field: "Extrato",
      label: "Extrato",
      name: "Extrato",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgGravaTipo",
      label: "FgGravaTipo",
      name: "FgGravaTipo",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgTransPrecoBruto",
      label: "FgTransPrecoBruto",
      name: "FgTransPrecoBruto",
      typeField: "string",
      size: 1,
    },
    {
      field: "Figura",
      label: "Figura",
      name: "Figura",
      typeField: "string",
      size: 50,
    },
    {
      field: "Fonte",
      label: "Fonte",
      name: "Fonte",
      typeField: "int",
      size: 1,
    },
    {
      field: "Gaveta",
      label: "Gaveta",
      name: "Gaveta",
      typeField: "int",
      size: 1,
    },
    {
      field: "Identificador",
      label: "Identificador",
      name: "Identificador",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Importacao",
      label: "Importacao",
      name: "Importacao",
      typeField: "string",
      size: 30,
    },
    {
      field: "Impressora",
      label: "Impressora",
      name: "Impressora",
      typeField: "string",
      size: 20,
    },
    {
      field: "LoTipo",
      label: "LoTipo",
      name: "LoTipo",
      typeField: "string",
      size: 1,
    },
    {
      field: "MultiplosCheques",
      label: "MultiplosCheques",
      name: "MultiplosCheques",
      typeField: "string",
      size: 1,
    },
    {
      field: "NrRemessaBco",
      label: "NrRemessaBco",
      name: "NrRemessaBco",
      typeField: "int",
      size: 4,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "int",
      size: 4,
    },
    {
      field: "Porta",
      label: "Porta",
      name: "Porta",
      typeField: "int",
      size: 1,
    },
    {
      field: "PrimeiraSequencia",
      label: "PrimeiraSequencia",
      name: "PrimeiraSequencia",
      typeField: "int",
      size: 4,
    },
    {
      field: "PrimeiroCupom",
      label: "PrimeiroCupom",
      name: "PrimeiroCupom",
      typeField: "int",
      size: 4,
    },
    {
      field: "QtdePadrao",
      label: "QtdePadrao",
      name: "QtdePadrao",
      typeField: "int",
      size: 1,
    },
    {
      field: "SangriaMaxima",
      label: "SangriaMaxima",
      name: "SangriaMaxima",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "SangriaMinima",
      label: "SangriaMinima",
      name: "SangriaMinima",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Scanner",
      label: "Scanner",
      name: "Scanner",
      typeField: "int",
      size: 1,
    },
    {
      field: "T0",
      label: "T0",
      name: "T0",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "T01",
      label: "T01",
      name: "T01",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "T02",
      label: "T02",
      name: "T02",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "T03",
      label: "T03",
      name: "T03",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "T04",
      label: "T04",
      name: "T04",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "T05",
      label: "T05",
      name: "T05",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "T06",
      label: "T06",
      name: "T06",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "T07",
      label: "T07",
      name: "T07",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "T08",
      label: "T08",
      name: "T08",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "T09",
      label: "T09",
      name: "T09",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "T10",
      label: "T10",
      name: "T10",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "T11",
      label: "T11",
      name: "T11",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "T12",
      label: "T12",
      name: "T12",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TamFormulario",
      label: "TamFormulario",
      name: "TamFormulario",
      typeField: "int",
      size: 1,
    },
    {
      field: "TamMensagem1",
      label: "TamMensagem1",
      name: "TamMensagem1",
      typeField: "int",
      size: 1,
    },
    {
      field: "TamMensagem2",
      label: "TamMensagem2",
      name: "TamMensagem2",
      typeField: "int",
      size: 1,
    },
    {
      field: "TamMensagem3",
      label: "TamMensagem3",
      name: "TamMensagem3",
      typeField: "int",
      size: 1,
    },
    {
      field: "UltCupom",
      label: "UltCupom",
      name: "UltCupom",
      typeField: "int",
      size: 4,
    },
    {
      field: "Utilizacao",
      label: "Utilizacao",
      name: "Utilizacao",
      typeField: "string",
      size: 1,
    },
    {
      field: "Vendedor",
      label: "Vendedor",
      name: "Vendedor",
      typeField: "string",
      size: 1,
    },
    {
      field: "VersaoImpressora",
      label: "VersaoImpressora",
      name: "VersaoImpressora",
      typeField: "int",
      size: 1,
    },
    {
      field: "ResumoDepto",
      label: "ResumoDepto",
      name: "ResumoDepto",
      typeField: "string",
      size: 1,
    },
    {
      field: "ResumoCaixa",
      label: "ResumoCaixa",
      name: "ResumoCaixa",
      typeField: "string",
      size: 1,
    },
    {
      field: "ResumoMovimento",
      label: "ResumoMovimento",
      name: "ResumoMovimento",
      typeField: "string",
      size: 1,
    },
    {
      field: "ResumoHora",
      label: "ResumoHora",
      name: "ResumoHora",
      typeField: "string",
      size: 1,
    },
    {
      field: "MovimentoCaixa",
      label: "MovimentoCaixa",
      name: "MovimentoCaixa",
      typeField: "string",
      size: 1,
    },
    {
      field: "MovimentoVendedor",
      label: "MovimentoVendedor",
      name: "MovimentoVendedor",
      typeField: "string",
      size: 1,
    },
    {
      field: "VisualizaObs",
      label: "VisualizaObs",
      name: "VisualizaObs",
      typeField: "string",
      size: 1,
    },
    {
      field: "Decodificador",
      label: "Decodificador",
      name: "Decodificador",
      typeField: "string",
      size: 10,
    },
    {
      field: "AcumuladorPadrao",
      label: "AcumuladorPadrao",
      name: "AcumuladorPadrao",
      typeField: "string",
      size: 3,
    },
    {
      field: "FgNumSequencial",
      label: "FgNumSequencial",
      name: "FgNumSequencial",
      typeField: "string",
      size: 1,
    },
    {
      field: "Mensagem1",
      label: "Mensagem1",
      name: "Mensagem1",
      typeField: "string",
      size: 48,
    },
    {
      field: "Mensagem2",
      label: "Mensagem2",
      name: "Mensagem2",
      typeField: "string",
      size: 48,
    },
    {
      field: "Mensagem3",
      label: "Mensagem3",
      name: "Mensagem3",
      typeField: "string",
      size: 48,
    },
    {
      field: "FgImpLocalEntrega",
      label: "FgImpLocalEntrega",
      name: "FgImpLocalEntrega",
      typeField: "string",
      size: 1,
    },
    {
      field: "AcServicos",
      label: "AcServicos",
      name: "AcServicos",
      typeField: "string",
      size: 5,
    },
    {
      field: "QtdadeCupomVinculado",
      label: "QtdadeCupomVinculado",
      name: "QtdadeCupomVinculado",
      typeField: "int",
      size: 2,
    },
    {
      field: "CdTipoVendaPadrao",
      label: "CdTipoVendaPadrao",
      name: "CdTipoVendaPadrao",
      typeField: "int",
      size: 2,
    },
    {
      field: "CdClientePadrao",
      label: "CdClientePadrao",
      name: "CdClientePadrao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdVendedorPadrao",
      label: "CdVendedorPadrao",
      name: "CdVendedorPadrao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgSetor",
      label: "FgSetor",
      name: "FgSetor",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgTrocaTipoVendaPed",
      label: "FgTrocaTipoVendaPed",
      name: "FgTrocaTipoVendaPed",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgCancelaCupom",
      label: "FgCancelaCupom",
      name: "FgCancelaCupom",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgTermica",
      label: "FgTermica",
      name: "FgTermica",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgAberturaLogon",
      label: "FgAberturaLogon",
      name: "FgAberturaLogon",
      typeField: "string",
      size: 1,
    },
    {
      field: "AcServicos2",
      label: "AcServicos2",
      name: "AcServicos2",
      typeField: "string",
      size: 5,
    },
    {
      field: "FgVerificaReducaoImpressora",
      label: "FgVerificaReducaoImpressora",
      name: "FgVerificaReducaoImpressora",
      typeField: "string",
      size: 1,
    },
  ],
};

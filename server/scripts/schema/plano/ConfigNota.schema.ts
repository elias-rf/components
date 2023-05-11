import { TTableDef } from "@/types/model";

export const ConfigNota: TTableDef = {
  database: "plano",
  table: "ConfigNota",
  fields: [
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "AlturaFormulario",
      label: "AlturaFormulario",
      name: "AlturaFormulario",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "AliqICMSColuna",
      label: "AliqICMSColuna",
      name: "AliqICMSColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "AliqICMSTamanho",
      label: "AliqICMSTamanho",
      name: "AliqICMSTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "BairroColuna",
      label: "BairroColuna",
      name: "BairroColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "BairroTamanho",
      label: "BairroTamanho",
      name: "BairroTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "BaseCalcICMSColuna",
      label: "BaseCalcICMSColuna",
      name: "BaseCalcICMSColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "BaseCalcICMSLinha",
      label: "BaseCalcICMSLinha",
      name: "BaseCalcICMSLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "BaseCalcICMSTamanho",
      label: "BaseCalcICMSTamanho",
      name: "BaseCalcICMSTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "BaseSubColuna",
      label: "BaseSubColuna",
      name: "BaseSubColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "BaseSubTamanho",
      label: "BaseSubTamanho",
      name: "BaseSubTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProdutoColuna",
      label: "CdProdutoColuna",
      name: "CdProdutoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdProdutoLinha",
      label: "CdProdutoLinha",
      name: "CdProdutoLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProdutoTamanho",
      label: "CdProdutoTamanho",
      name: "CdProdutoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CepColuna",
      label: "CepColuna",
      name: "CepColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CFOPColuna",
      label: "CFOPColuna",
      name: "CFOPColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CFOPLinha",
      label: "CFOPLinha",
      name: "CFOPLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ClasFiscalColuna",
      label: "ClasFiscalColuna",
      name: "ClasFiscalColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ClasFiscalTamanho",
      label: "ClasFiscalTamanho",
      name: "ClasFiscalTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CNPJColuna",
      label: "CNPJColuna",
      name: "CNPJColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CNPJTransportadorColuna",
      label: "CNPJTransportadorColuna",
      name: "CNPJTransportadorColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DescNopColuna",
      label: "DescNopColuna",
      name: "DescNopColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DescNopTamanho",
      label: "DescNopTamanho",
      name: "DescNopTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DescricaoColuna",
      label: "DescricaoColuna",
      name: "DescricaoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DescricaoTamanho",
      label: "DescricaoTamanho",
      name: "DescricaoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtEmissaoColuna",
      label: "DtEmissaoColuna",
      name: "DtEmissaoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtSaidaColuna",
      label: "DtSaidaColuna",
      name: "DtSaidaColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EnderecoColuna",
      label: "EnderecoColuna",
      name: "EnderecoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EnderecoLinha",
      label: "EnderecoLinha",
      name: "EnderecoLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "EnderecoTamanho",
      label: "EnderecoTamanho",
      name: "EnderecoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EndTransportadorColuna",
      label: "EndTransportadorColuna",
      name: "EndTransportadorColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EndTransportadorLinha",
      label: "EndTransportadorLinha",
      name: "EndTransportadorLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "EndTransportadorTamanho",
      label: "EndTransportadorTamanho",
      name: "EndTransportadorTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EntradaColuna",
      label: "EntradaColuna",
      name: "EntradaColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EspecieColuna",
      label: "EspecieColuna",
      name: "EspecieColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EspecieTamanho",
      label: "EspecieTamanho",
      name: "EspecieTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FaturaColuna",
      label: "FaturaColuna",
      name: "FaturaColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FaturaLinha",
      label: "FaturaLinha",
      name: "FaturaLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "FaturaNumLinhas",
      label: "FaturaNumLinhas",
      name: "FaturaNumLinhas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FaturaNumParcelas",
      label: "FaturaNumParcelas",
      name: "FaturaNumParcelas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FaturaEspacos",
      label: "FaturaEspacos",
      name: "FaturaEspacos",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FaturaTamanho",
      label: "FaturaTamanho",
      name: "FaturaTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FaturaValorColuna",
      label: "FaturaValorColuna",
      name: "FaturaValorColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FaturaValorTamanho",
      label: "FaturaValorTamanho",
      name: "FaturaValorTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FaturaVctoColuna",
      label: "FaturaVctoColuna",
      name: "FaturaVctoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FaturaVctoTamanho",
      label: "FaturaVctoTamanho",
      name: "FaturaVctoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "HorarioColuna",
      label: "HorarioColuna",
      name: "HorarioColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "InfAdicionaisColuna",
      label: "InfAdicionaisColuna",
      name: "InfAdicionaisColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "InfAdicionaisLinha",
      label: "InfAdicionaisLinha",
      name: "InfAdicionaisLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "InfAdicionaisTamanho",
      label: "InfAdicionaisTamanho",
      name: "InfAdicionaisTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "InscEstColuna",
      label: "InscEstColuna",
      name: "InscEstColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "InscEstTransportadorColuna",
      label: "InscEstTransportadorColuna",
      name: "InscEstTransportadorColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MarcaColuna",
      label: "MarcaColuna",
      name: "MarcaColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MarcaTamanho",
      label: "MarcaTamanho",
      name: "MarcaTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MunicipioColuna",
      label: "MunicipioColuna",
      name: "MunicipioColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MunicipioLinha",
      label: "MunicipioLinha",
      name: "MunicipioLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "MunicipioTamanho",
      label: "MunicipioTamanho",
      name: "MunicipioTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MunicipioTransportadorColuna",
      label: "MunicipioTransportadorColuna",
      name: "MunicipioTransportadorColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MunicipioTransportadorTamanho",
      label: "MunicipioTransportadorTamanho",
      name: "MunicipioTransportadorTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NmTransportadorColuna",
      label: "NmTransportadorColuna",
      name: "NmTransportadorColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NmTransportadorLinha",
      label: "NmTransportadorLinha",
      name: "NmTransportadorLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NmTransportadorTamanho",
      label: "NmTransportadorTamanho",
      name: "NmTransportadorTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumeroColuna",
      label: "NumeroColuna",
      name: "NumeroColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumeroTamanho",
      label: "NumeroTamanho",
      name: "NumeroTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumLinhasInfAdicionais",
      label: "NumLinhasInfAdicionais",
      name: "NumLinhasInfAdicionais",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumNotaCabColuna",
      label: "NumNotaCabColuna",
      name: "NumNotaCabColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumNotaCabLinha",
      label: "NumNotaCabLinha",
      name: "NumNotaCabLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumNotaRodapeColuna",
      label: "NumNotaRodapeColuna",
      name: "NumNotaRodapeColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumNotaRodapeLinha",
      label: "NumNotaRodapeLinha",
      name: "NumNotaRodapeLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "PesoBrutoColuna",
      label: "PesoBrutoColuna",
      name: "PesoBrutoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PesoBrutoTamanho",
      label: "PesoBrutoTamanho",
      name: "PesoBrutoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PesoLiquidoColuna",
      label: "PesoLiquidoColuna",
      name: "PesoLiquidoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PesoLiquidoTamanho",
      label: "PesoLiquidoTamanho",
      name: "PesoLiquidoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PlacaTamanho",
      label: "PlacaTamanho",
      name: "PlacaTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PlacaColuna",
      label: "PlacaColuna",
      name: "PlacaColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeLinhasProduto",
      label: "QtdeLinhasProduto",
      name: "QtdeLinhasProduto",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeVolumeColuna",
      label: "QtdeVolumeColuna",
      name: "QtdeVolumeColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdeVolumeLinha",
      label: "QtdeVolumeLinha",
      name: "QtdeVolumeLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeVolumeTamanho",
      label: "QtdeVolumeTamanho",
      name: "QtdeVolumeTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QuantidadeColuna",
      label: "QuantidadeColuna",
      name: "QuantidadeColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QuantidadeTamanho",
      label: "QuantidadeTamanho",
      name: "QuantidadeTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "RzSocialColuna",
      label: "RzSocialColuna",
      name: "RzSocialColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "RzSocialLinha",
      label: "RzSocialLinha",
      name: "RzSocialLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "RzSocialTamanho",
      label: "RzSocialTamanho",
      name: "RzSocialTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SaidaColuna",
      label: "SaidaColuna",
      name: "SaidaColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SitTributariaColuna",
      label: "SitTributariaColuna",
      name: "SitTributariaColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SitTributariaTamanho",
      label: "SitTributariaTamanho",
      name: "SitTributariaTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TelefoneColuna",
      label: "TelefoneColuna",
      name: "TelefoneColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TelefoneTamanho",
      label: "TelefoneTamanho",
      name: "TelefoneTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoFreteColuna",
      label: "TipoFreteColuna",
      name: "TipoFreteColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "UFColuna",
      label: "UFColuna",
      name: "UFColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "UFPlacaColuna",
      label: "UFPlacaColuna",
      name: "UFPlacaColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "UFTransportadorColuna",
      label: "UFTransportadorColuna",
      name: "UFTransportadorColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "UnidadeColuna",
      label: "UnidadeColuna",
      name: "UnidadeColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "UnidadeTamanho",
      label: "UnidadeTamanho",
      name: "UnidadeTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlDescontoLinha",
      label: "VlDescontoLinha",
      name: "VlDescontoLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescontoColuna",
      label: "VlDescontoColuna",
      name: "VlDescontoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlDescontoTamanho",
      label: "VlDescontoTamanho",
      name: "VlDescontoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlDespesasColuna",
      label: "VlDespesasColuna",
      name: "VlDespesasColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlDespesasTamanho",
      label: "VlDespesasTamanho",
      name: "VlDespesasTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlFreteColuna",
      label: "VlFreteColuna",
      name: "VlFreteColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlFreteLinha",
      label: "VlFreteLinha",
      name: "VlFreteLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlFreteTamanho",
      label: "VlFreteTamanho",
      name: "VlFreteTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlICMSColuna",
      label: "VlICMSColuna",
      name: "VlICMSColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlICMSTamanho",
      label: "VlICMSTamanho",
      name: "VlICMSTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlICMSSubColuna",
      label: "VlICMSSubColuna",
      name: "VlICMSSubColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlICMSSubTamanho",
      label: "VlICMSSubTamanho",
      name: "VlICMSSubTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlIPIColuna",
      label: "VlIPIColuna",
      name: "VlIPIColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlIPITamanho",
      label: "VlIPITamanho",
      name: "VlIPITamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlProdutosColuna",
      label: "VlProdutosColuna",
      name: "VlProdutosColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlProdutosTamanho",
      label: "VlProdutosTamanho",
      name: "VlProdutosTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlSeguroColuna",
      label: "VlSeguroColuna",
      name: "VlSeguroColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlSeguroTamanho",
      label: "VlSeguroTamanho",
      name: "VlSeguroTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlTotalColuna",
      label: "VlTotalColuna",
      name: "VlTotalColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlTotalNotaColuna",
      label: "VlTotalNotaColuna",
      name: "VlTotalNotaColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlTotalNotaTamanho",
      label: "VlTotalNotaTamanho",
      name: "VlTotalNotaTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlTotalTamanho",
      label: "VlTotalTamanho",
      name: "VlTotalTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlUnitarioColuna",
      label: "VlUnitarioColuna",
      name: "VlUnitarioColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlUnitarioTamanho",
      label: "VlUnitarioTamanho",
      name: "VlUnitarioTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FonteCabecalho",
      label: "FonteCabecalho",
      name: "FonteCabecalho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FonteProdutos",
      label: "FonteProdutos",
      name: "FonteProdutos",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FonteTotais",
      label: "FonteTotais",
      name: "FonteTotais",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FonteTransportador",
      label: "FonteTransportador",
      name: "FonteTransportador",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FonteFaturas",
      label: "FonteFaturas",
      name: "FonteFaturas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FonteInfAdicionais",
      label: "FonteInfAdicionais",
      name: "FonteInfAdicionais",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FonteServicos",
      label: "FonteServicos",
      name: "FonteServicos",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdServicoLinha",
      label: "CdServicoLinha",
      name: "CdServicoLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeLinhasServico",
      label: "QtdeLinhasServico",
      name: "QtdeLinhasServico",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdServicoColuna",
      label: "CdServicoColuna",
      name: "CdServicoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdServicoTamanho",
      label: "CdServicoTamanho",
      name: "CdServicoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DescricaoServicoLinha",
      label: "DescricaoServicoLinha",
      name: "DescricaoServicoLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DescricaoServicoColuna",
      label: "DescricaoServicoColuna",
      name: "DescricaoServicoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DescricaoServicoTamanho",
      label: "DescricaoServicoTamanho",
      name: "DescricaoServicoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QuantidadeServicoColuna",
      label: "QuantidadeServicoColuna",
      name: "QuantidadeServicoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QuantidadeServicoTamanho",
      label: "QuantidadeServicoTamanho",
      name: "QuantidadeServicoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlUnitarioServicoColuna",
      label: "VlUnitarioServicoColuna",
      name: "VlUnitarioServicoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlUnitarioServicoTamanho",
      label: "VlUnitarioServicoTamanho",
      name: "VlUnitarioServicoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlTotalServicoColuna",
      label: "VlTotalServicoColuna",
      name: "VlTotalServicoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlTotalServicoTamanho",
      label: "VlTotalServicoTamanho",
      name: "VlTotalServicoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlServicoLinha",
      label: "VlServicoLinha",
      name: "VlServicoLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlServicoColuna",
      label: "VlServicoColuna",
      name: "VlServicoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlServicoTamanho",
      label: "VlServicoTamanho",
      name: "VlServicoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "AliquotaISSLinha",
      label: "AliquotaISSLinha",
      name: "AliquotaISSLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaISSColuna",
      label: "AliquotaISSColuna",
      name: "AliquotaISSColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "AliquotaISSTamanho",
      label: "AliquotaISSTamanho",
      name: "AliquotaISSTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlIssLinha",
      label: "VlIssLinha",
      name: "VlIssLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlISSColuna",
      label: "VlISSColuna",
      name: "VlISSColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlISSTamanho",
      label: "VlISSTamanho",
      name: "VlISSTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EmissaoRodapeColuna",
      label: "EmissaoRodapeColuna",
      name: "EmissaoRodapeColuna",
      typeField: "float",

      scale: 4,
    },
    {
      field: "EmissaoRodapeTamanho",
      label: "EmissaoRodapeTamanho",
      name: "EmissaoRodapeTamanho",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgImprimeLoteProdutos",
      label: "FgImprimeLoteProdutos",
      name: "FgImprimeLoteProdutos",
      typeField: "string",
    },
    {
      field: "FaturaValorExtensoLinha",
      label: "FaturaValorExtensoLinha",
      name: "FaturaValorExtensoLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FaturaValorExtensoColuna",
      label: "FaturaValorExtensoColuna",
      name: "FaturaValorExtensoColuna",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FaturaValorExtensoTamanho",
      label: "FaturaValorExtensoTamanho",
      name: "FaturaValorExtensoTamanho",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliqIPIColuna",
      label: "AliqIPIColuna",
      name: "AliqIPIColuna",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliqIPITamanho",
      label: "AliqIPITamanho",
      name: "AliqIPITamanho",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlIPIItemColuna",
      label: "VlIPIItemColuna",
      name: "VlIPIItemColuna",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlIPIItemTamanho",
      label: "VlIPIItemTamanho",
      name: "VlIPIItemTamanho",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FaturaPracaPagamentoLinha",
      label: "FaturaPracaPagamentoLinha",
      name: "FaturaPracaPagamentoLinha",
      typeField: "int",
    },
    {
      field: "FaturaPracaPagamentoTamanho",
      label: "FaturaPracaPagamentoTamanho",
      name: "FaturaPracaPagamentoTamanho",
      typeField: "int",
    },
    {
      field: "FaturaPracaPagamentoColuna",
      label: "FaturaPracaPagamentoColuna",
      name: "FaturaPracaPagamentoColuna",
      typeField: "int",
    },
    {
      field: "BaseISSLinha",
      label: "BaseISSLinha",
      name: "BaseISSLinha",
      typeField: "int",
    },
    {
      field: "BaseISSColuna",
      label: "BaseISSColuna",
      name: "BaseISSColuna",
      typeField: "int",
    },
    {
      field: "BaseISSTamanho",
      label: "BaseISSTamanho",
      name: "BaseISSTamanho",
      typeField: "int",
    },
    {
      field: "InscMunicipalLinha",
      label: "InscMunicipalLinha",
      name: "InscMunicipalLinha",
      typeField: "int",
    },
    {
      field: "InscMunicipalColuna",
      label: "InscMunicipalColuna",
      name: "InscMunicipalColuna",
      typeField: "int",
    },
    {
      field: "InscMunicipalTamanho",
      label: "InscMunicipalTamanho",
      name: "InscMunicipalTamanho",
      typeField: "int",
    },
    {
      field: "DecimaisValorProduto",
      label: "DecimaisValorProduto",
      name: "DecimaisValorProduto",
      typeField: "int",
    },
    {
      field: "DecimaisAliqIPI",
      label: "DecimaisAliqIPI",
      name: "DecimaisAliqIPI",
      typeField: "int",
    },
    {
      field: "DecimaisAliqICMS",
      label: "DecimaisAliqICMS",
      name: "DecimaisAliqICMS",
      typeField: "int",
    },
    {
      field: "RzSocialFilialLinha",
      label: "RzSocialFilialLinha",
      name: "RzSocialFilialLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "RzSocialFilialColuna",
      label: "RzSocialFilialColuna",
      name: "RzSocialFilialColuna",
      typeField: "int",
    },
    {
      field: "RzSocialFilialTamanho",
      label: "RzSocialFilialTamanho",
      name: "RzSocialFilialTamanho",
      typeField: "int",
    },
    {
      field: "EnderecoFilialLinha",
      label: "EnderecoFilialLinha",
      name: "EnderecoFilialLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "EnderecoFilialColuna",
      label: "EnderecoFilialColuna",
      name: "EnderecoFilialColuna",
      typeField: "int",
    },
    {
      field: "EnderecoFilialTamanho",
      label: "EnderecoFilialTamanho",
      name: "EnderecoFilialTamanho",
      typeField: "int",
    },
    {
      field: "CNPJFilialLinha",
      label: "CNPJFilialLinha",
      name: "CNPJFilialLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CNPJFilialColuna",
      label: "CNPJFilialColuna",
      name: "CNPJFilialColuna",
      typeField: "int",
    },
    {
      field: "CNPJFilialTamanho",
      label: "CNPJFilialTamanho",
      name: "CNPJFilialTamanho",
      typeField: "int",
    },
    {
      field: "TelefoneFilialLinha",
      label: "TelefoneFilialLinha",
      name: "TelefoneFilialLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "TelefoneFilialColuna",
      label: "TelefoneFilialColuna",
      name: "TelefoneFilialColuna",
      typeField: "int",
    },
    {
      field: "TelefoneFilialTamanho",
      label: "TelefoneFilialTamanho",
      name: "TelefoneFilialTamanho",
      typeField: "int",
    },
    {
      field: "NumNotaCompLinha",
      label: "NumNotaCompLinha",
      name: "NumNotaCompLinha",
      typeField: "int",
    },
    {
      field: "NumNotaCompColuna",
      label: "NumNotaCompColuna",
      name: "NumNotaCompColuna",
      typeField: "int",
    },
    {
      field: "FgDestacaNumNotaCabecalho",
      label: "FgDestacaNumNotaCabecalho",
      name: "FgDestacaNumNotaCabecalho",
      typeField: "string",
    },
    {
      field: "FgDestacaNumNotaRodape",
      label: "FgDestacaNumNotaRodape",
      name: "FgDestacaNumNotaRodape",
      typeField: "string",
    },
    {
      field: "FgConfirmaSaltoPagina",
      label: "FgConfirmaSaltoPagina",
      name: "FgConfirmaSaltoPagina",
      typeField: "string",
    },
    {
      field: "FonteNumNotaCabecalho",
      label: "FonteNumNotaCabecalho",
      name: "FonteNumNotaCabecalho",
      typeField: "int",
    },
    {
      field: "FonteNumNotaRodape",
      label: "FonteNumNotaRodape",
      name: "FonteNumNotaRodape",
      typeField: "int",
    },
    {
      field: "BaseCalcPISLinha",
      label: "BaseCalcPISLinha",
      name: "BaseCalcPISLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "BaseCalcPISColuna",
      label: "BaseCalcPISColuna",
      name: "BaseCalcPISColuna",
      typeField: "int",
    },
    {
      field: "BaseCalcPISTamanho",
      label: "BaseCalcPISTamanho",
      name: "BaseCalcPISTamanho",
      typeField: "int",
    },
    {
      field: "AliquotaPISLinha",
      label: "AliquotaPISLinha",
      name: "AliquotaPISLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliquotaPISColuna",
      label: "AliquotaPISColuna",
      name: "AliquotaPISColuna",
      typeField: "int",
    },
    {
      field: "AliquotaPISTamanho",
      label: "AliquotaPISTamanho",
      name: "AliquotaPISTamanho",
      typeField: "int",
    },
    {
      field: "VlPISLinha",
      label: "VlPISLinha",
      name: "VlPISLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlPISColuna",
      label: "VlPISColuna",
      name: "VlPISColuna",
      typeField: "int",
    },
    {
      field: "VlPISTamanho",
      label: "VlPISTamanho",
      name: "VlPISTamanho",
      typeField: "int",
    },
    {
      field: "BaseCalcCOFINSLinha",
      label: "BaseCalcCOFINSLinha",
      name: "BaseCalcCOFINSLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "BaseCalcCOFINSColuna",
      label: "BaseCalcCOFINSColuna",
      name: "BaseCalcCOFINSColuna",
      typeField: "int",
    },
    {
      field: "BaseCalcCOFINSTamanho",
      label: "BaseCalcCOFINSTamanho",
      name: "BaseCalcCOFINSTamanho",
      typeField: "int",
    },
    {
      field: "AliquotaCOFINSLinha",
      label: "AliquotaCOFINSLinha",
      name: "AliquotaCOFINSLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliquotaCOFINSColuna",
      label: "AliquotaCOFINSColuna",
      name: "AliquotaCOFINSColuna",
      typeField: "int",
    },
    {
      field: "AliquotaCOFINSTamanho",
      label: "AliquotaCOFINSTamanho",
      name: "AliquotaCOFINSTamanho",
      typeField: "int",
    },
    {
      field: "VlCOFINSLinha",
      label: "VlCOFINSLinha",
      name: "VlCOFINSLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCOFINSColuna",
      label: "VlCOFINSColuna",
      name: "VlCOFINSColuna",
      typeField: "int",
    },
    {
      field: "VlCOFINSTamanho",
      label: "VlCOFINSTamanho",
      name: "VlCOFINSTamanho",
      typeField: "int",
    },
    {
      field: "BaseCalcIRRFLinha",
      label: "BaseCalcIRRFLinha",
      name: "BaseCalcIRRFLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "BaseCalcIRRFColuna",
      label: "BaseCalcIRRFColuna",
      name: "BaseCalcIRRFColuna",
      typeField: "int",
    },
    {
      field: "BaseCalcIRRFTamanho",
      label: "BaseCalcIRRFTamanho",
      name: "BaseCalcIRRFTamanho",
      typeField: "int",
    },
    {
      field: "AliquotaIRRFLinha",
      label: "AliquotaIRRFLinha",
      name: "AliquotaIRRFLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliquotaIRRFColuna",
      label: "AliquotaIRRFColuna",
      name: "AliquotaIRRFColuna",
      typeField: "int",
    },
    {
      field: "AliquotaIRRFTamanho",
      label: "AliquotaIRRFTamanho",
      name: "AliquotaIRRFTamanho",
      typeField: "int",
    },
    {
      field: "VlIRRFLinha",
      label: "VlIRRFLinha",
      name: "VlIRRFLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlIRRFColuna",
      label: "VlIRRFColuna",
      name: "VlIRRFColuna",
      typeField: "int",
    },
    {
      field: "VlIRRFTamanho",
      label: "VlIRRFTamanho",
      name: "VlIRRFTamanho",
      typeField: "int",
    },
    {
      field: "BaseCalcCSLLLinha",
      label: "BaseCalcCSLLLinha",
      name: "BaseCalcCSLLLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "BaseCalcCSLLColuna",
      label: "BaseCalcCSLLColuna",
      name: "BaseCalcCSLLColuna",
      typeField: "int",
    },
    {
      field: "BaseCalcCSLLTamanho",
      label: "BaseCalcCSLLTamanho",
      name: "BaseCalcCSLLTamanho",
      typeField: "int",
    },
    {
      field: "AliquotaCSLLLinha",
      label: "AliquotaCSLLLinha",
      name: "AliquotaCSLLLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "AliquotaCSLLColuna",
      label: "AliquotaCSLLColuna",
      name: "AliquotaCSLLColuna",
      typeField: "int",
    },
    {
      field: "AliquotaCSLLTamanho",
      label: "AliquotaCSLLTamanho",
      name: "AliquotaCSLLTamanho",
      typeField: "int",
    },
    {
      field: "VlCSLLLinha",
      label: "VlCSLLLinha",
      name: "VlCSLLLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlCSLLColuna",
      label: "VlCSLLColuna",
      name: "VlCSLLColuna",
      typeField: "int",
    },
    {
      field: "VlCSLLTamanho",
      label: "VlCSLLTamanho",
      name: "VlCSLLTamanho",
      typeField: "int",
    },
  ],
};

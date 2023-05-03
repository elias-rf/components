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
      size: 3,
      allowNull: false,
    },
    {
      field: "AlturaFormulario",
      label: "AlturaFormulario",
      name: "AlturaFormulario",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "AliqICMSColuna",
      label: "AliqICMSColuna",
      name: "AliqICMSColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "AliqICMSTamanho",
      label: "AliqICMSTamanho",
      name: "AliqICMSTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "BairroColuna",
      label: "BairroColuna",
      name: "BairroColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "BairroTamanho",
      label: "BairroTamanho",
      name: "BairroTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "BaseCalcICMSColuna",
      label: "BaseCalcICMSColuna",
      name: "BaseCalcICMSColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "BaseCalcICMSLinha",
      label: "BaseCalcICMSLinha",
      name: "BaseCalcICMSLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "BaseCalcICMSTamanho",
      label: "BaseCalcICMSTamanho",
      name: "BaseCalcICMSTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "BaseSubColuna",
      label: "BaseSubColuna",
      name: "BaseSubColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "BaseSubTamanho",
      label: "BaseSubTamanho",
      name: "BaseSubTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdProdutoColuna",
      label: "CdProdutoColuna",
      name: "CdProdutoColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdProdutoLinha",
      label: "CdProdutoLinha",
      name: "CdProdutoLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProdutoTamanho",
      label: "CdProdutoTamanho",
      name: "CdProdutoTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CepColuna",
      label: "CepColuna",
      name: "CepColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CFOPColuna",
      label: "CFOPColuna",
      name: "CFOPColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CFOPLinha",
      label: "CFOPLinha",
      name: "CFOPLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "ClasFiscalColuna",
      label: "ClasFiscalColuna",
      name: "ClasFiscalColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "ClasFiscalTamanho",
      label: "ClasFiscalTamanho",
      name: "ClasFiscalTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CNPJColuna",
      label: "CNPJColuna",
      name: "CNPJColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CNPJTransportadorColuna",
      label: "CNPJTransportadorColuna",
      name: "CNPJTransportadorColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DescNopColuna",
      label: "DescNopColuna",
      name: "DescNopColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DescNopTamanho",
      label: "DescNopTamanho",
      name: "DescNopTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DescricaoColuna",
      label: "DescricaoColuna",
      name: "DescricaoColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DescricaoTamanho",
      label: "DescricaoTamanho",
      name: "DescricaoTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DtEmissaoColuna",
      label: "DtEmissaoColuna",
      name: "DtEmissaoColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DtSaidaColuna",
      label: "DtSaidaColuna",
      name: "DtSaidaColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "EnderecoColuna",
      label: "EnderecoColuna",
      name: "EnderecoColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "EnderecoLinha",
      label: "EnderecoLinha",
      name: "EnderecoLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "EnderecoTamanho",
      label: "EnderecoTamanho",
      name: "EnderecoTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "EndTransportadorColuna",
      label: "EndTransportadorColuna",
      name: "EndTransportadorColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "EndTransportadorLinha",
      label: "EndTransportadorLinha",
      name: "EndTransportadorLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "EndTransportadorTamanho",
      label: "EndTransportadorTamanho",
      name: "EndTransportadorTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "EntradaColuna",
      label: "EntradaColuna",
      name: "EntradaColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "EspecieColuna",
      label: "EspecieColuna",
      name: "EspecieColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "EspecieTamanho",
      label: "EspecieTamanho",
      name: "EspecieTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FaturaColuna",
      label: "FaturaColuna",
      name: "FaturaColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FaturaLinha",
      label: "FaturaLinha",
      name: "FaturaLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "FaturaNumLinhas",
      label: "FaturaNumLinhas",
      name: "FaturaNumLinhas",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FaturaNumParcelas",
      label: "FaturaNumParcelas",
      name: "FaturaNumParcelas",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FaturaEspacos",
      label: "FaturaEspacos",
      name: "FaturaEspacos",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FaturaTamanho",
      label: "FaturaTamanho",
      name: "FaturaTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FaturaValorColuna",
      label: "FaturaValorColuna",
      name: "FaturaValorColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FaturaValorTamanho",
      label: "FaturaValorTamanho",
      name: "FaturaValorTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FaturaVctoColuna",
      label: "FaturaVctoColuna",
      name: "FaturaVctoColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FaturaVctoTamanho",
      label: "FaturaVctoTamanho",
      name: "FaturaVctoTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "HorarioColuna",
      label: "HorarioColuna",
      name: "HorarioColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "InfAdicionaisColuna",
      label: "InfAdicionaisColuna",
      name: "InfAdicionaisColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "InfAdicionaisLinha",
      label: "InfAdicionaisLinha",
      name: "InfAdicionaisLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "InfAdicionaisTamanho",
      label: "InfAdicionaisTamanho",
      name: "InfAdicionaisTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "InscEstColuna",
      label: "InscEstColuna",
      name: "InscEstColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "InscEstTransportadorColuna",
      label: "InscEstTransportadorColuna",
      name: "InscEstTransportadorColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "MarcaColuna",
      label: "MarcaColuna",
      name: "MarcaColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "MarcaTamanho",
      label: "MarcaTamanho",
      name: "MarcaTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "MunicipioColuna",
      label: "MunicipioColuna",
      name: "MunicipioColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "MunicipioLinha",
      label: "MunicipioLinha",
      name: "MunicipioLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "MunicipioTamanho",
      label: "MunicipioTamanho",
      name: "MunicipioTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "MunicipioTransportadorColuna",
      label: "MunicipioTransportadorColuna",
      name: "MunicipioTransportadorColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "MunicipioTransportadorTamanho",
      label: "MunicipioTransportadorTamanho",
      name: "MunicipioTransportadorTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NmTransportadorColuna",
      label: "NmTransportadorColuna",
      name: "NmTransportadorColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NmTransportadorLinha",
      label: "NmTransportadorLinha",
      name: "NmTransportadorLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NmTransportadorTamanho",
      label: "NmTransportadorTamanho",
      name: "NmTransportadorTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumeroColuna",
      label: "NumeroColuna",
      name: "NumeroColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumeroTamanho",
      label: "NumeroTamanho",
      name: "NumeroTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumLinhasInfAdicionais",
      label: "NumLinhasInfAdicionais",
      name: "NumLinhasInfAdicionais",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumNotaCabColuna",
      label: "NumNotaCabColuna",
      name: "NumNotaCabColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumNotaCabLinha",
      label: "NumNotaCabLinha",
      name: "NumNotaCabLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NumNotaRodapeColuna",
      label: "NumNotaRodapeColuna",
      name: "NumNotaRodapeColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumNotaRodapeLinha",
      label: "NumNotaRodapeLinha",
      name: "NumNotaRodapeLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "PesoBrutoColuna",
      label: "PesoBrutoColuna",
      name: "PesoBrutoColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "PesoBrutoTamanho",
      label: "PesoBrutoTamanho",
      name: "PesoBrutoTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "PesoLiquidoColuna",
      label: "PesoLiquidoColuna",
      name: "PesoLiquidoColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "PesoLiquidoTamanho",
      label: "PesoLiquidoTamanho",
      name: "PesoLiquidoTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "PlacaTamanho",
      label: "PlacaTamanho",
      name: "PlacaTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "PlacaColuna",
      label: "PlacaColuna",
      name: "PlacaColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "QtdeLinhasProduto",
      label: "QtdeLinhasProduto",
      name: "QtdeLinhasProduto",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "QtdeVolumeColuna",
      label: "QtdeVolumeColuna",
      name: "QtdeVolumeColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "QtdeVolumeLinha",
      label: "QtdeVolumeLinha",
      name: "QtdeVolumeLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeVolumeTamanho",
      label: "QtdeVolumeTamanho",
      name: "QtdeVolumeTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "QuantidadeColuna",
      label: "QuantidadeColuna",
      name: "QuantidadeColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "QuantidadeTamanho",
      label: "QuantidadeTamanho",
      name: "QuantidadeTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "RzSocialColuna",
      label: "RzSocialColuna",
      name: "RzSocialColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "RzSocialLinha",
      label: "RzSocialLinha",
      name: "RzSocialLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "RzSocialTamanho",
      label: "RzSocialTamanho",
      name: "RzSocialTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "SaidaColuna",
      label: "SaidaColuna",
      name: "SaidaColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "SitTributariaColuna",
      label: "SitTributariaColuna",
      name: "SitTributariaColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "SitTributariaTamanho",
      label: "SitTributariaTamanho",
      name: "SitTributariaTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TelefoneColuna",
      label: "TelefoneColuna",
      name: "TelefoneColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TelefoneTamanho",
      label: "TelefoneTamanho",
      name: "TelefoneTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TipoFreteColuna",
      label: "TipoFreteColuna",
      name: "TipoFreteColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "UFColuna",
      label: "UFColuna",
      name: "UFColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "UFPlacaColuna",
      label: "UFPlacaColuna",
      name: "UFPlacaColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "UFTransportadorColuna",
      label: "UFTransportadorColuna",
      name: "UFTransportadorColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "UnidadeColuna",
      label: "UnidadeColuna",
      name: "UnidadeColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "UnidadeTamanho",
      label: "UnidadeTamanho",
      name: "UnidadeTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlDescontoLinha",
      label: "VlDescontoLinha",
      name: "VlDescontoLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDescontoColuna",
      label: "VlDescontoColuna",
      name: "VlDescontoColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlDescontoTamanho",
      label: "VlDescontoTamanho",
      name: "VlDescontoTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlDespesasColuna",
      label: "VlDespesasColuna",
      name: "VlDespesasColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlDespesasTamanho",
      label: "VlDespesasTamanho",
      name: "VlDespesasTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlFreteColuna",
      label: "VlFreteColuna",
      name: "VlFreteColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlFreteLinha",
      label: "VlFreteLinha",
      name: "VlFreteLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlFreteTamanho",
      label: "VlFreteTamanho",
      name: "VlFreteTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlICMSColuna",
      label: "VlICMSColuna",
      name: "VlICMSColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlICMSTamanho",
      label: "VlICMSTamanho",
      name: "VlICMSTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlICMSSubColuna",
      label: "VlICMSSubColuna",
      name: "VlICMSSubColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlICMSSubTamanho",
      label: "VlICMSSubTamanho",
      name: "VlICMSSubTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlIPIColuna",
      label: "VlIPIColuna",
      name: "VlIPIColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlIPITamanho",
      label: "VlIPITamanho",
      name: "VlIPITamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlProdutosColuna",
      label: "VlProdutosColuna",
      name: "VlProdutosColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlProdutosTamanho",
      label: "VlProdutosTamanho",
      name: "VlProdutosTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlSeguroColuna",
      label: "VlSeguroColuna",
      name: "VlSeguroColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlSeguroTamanho",
      label: "VlSeguroTamanho",
      name: "VlSeguroTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlTotalColuna",
      label: "VlTotalColuna",
      name: "VlTotalColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlTotalNotaColuna",
      label: "VlTotalNotaColuna",
      name: "VlTotalNotaColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlTotalNotaTamanho",
      label: "VlTotalNotaTamanho",
      name: "VlTotalNotaTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlTotalTamanho",
      label: "VlTotalTamanho",
      name: "VlTotalTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlUnitarioColuna",
      label: "VlUnitarioColuna",
      name: "VlUnitarioColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlUnitarioTamanho",
      label: "VlUnitarioTamanho",
      name: "VlUnitarioTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FonteCabecalho",
      label: "FonteCabecalho",
      name: "FonteCabecalho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FonteProdutos",
      label: "FonteProdutos",
      name: "FonteProdutos",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FonteTotais",
      label: "FonteTotais",
      name: "FonteTotais",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FonteTransportador",
      label: "FonteTransportador",
      name: "FonteTransportador",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FonteFaturas",
      label: "FonteFaturas",
      name: "FonteFaturas",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FonteInfAdicionais",
      label: "FonteInfAdicionais",
      name: "FonteInfAdicionais",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "FonteServicos",
      label: "FonteServicos",
      name: "FonteServicos",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdServicoLinha",
      label: "CdServicoLinha",
      name: "CdServicoLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeLinhasServico",
      label: "QtdeLinhasServico",
      name: "QtdeLinhasServico",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdServicoColuna",
      label: "CdServicoColuna",
      name: "CdServicoColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "CdServicoTamanho",
      label: "CdServicoTamanho",
      name: "CdServicoTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DescricaoServicoLinha",
      label: "DescricaoServicoLinha",
      name: "DescricaoServicoLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DescricaoServicoColuna",
      label: "DescricaoServicoColuna",
      name: "DescricaoServicoColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DescricaoServicoTamanho",
      label: "DescricaoServicoTamanho",
      name: "DescricaoServicoTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "QuantidadeServicoColuna",
      label: "QuantidadeServicoColuna",
      name: "QuantidadeServicoColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "QuantidadeServicoTamanho",
      label: "QuantidadeServicoTamanho",
      name: "QuantidadeServicoTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlUnitarioServicoColuna",
      label: "VlUnitarioServicoColuna",
      name: "VlUnitarioServicoColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlUnitarioServicoTamanho",
      label: "VlUnitarioServicoTamanho",
      name: "VlUnitarioServicoTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlTotalServicoColuna",
      label: "VlTotalServicoColuna",
      name: "VlTotalServicoColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlTotalServicoTamanho",
      label: "VlTotalServicoTamanho",
      name: "VlTotalServicoTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlServicoLinha",
      label: "VlServicoLinha",
      name: "VlServicoLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlServicoColuna",
      label: "VlServicoColuna",
      name: "VlServicoColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlServicoTamanho",
      label: "VlServicoTamanho",
      name: "VlServicoTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "AliquotaISSLinha",
      label: "AliquotaISSLinha",
      name: "AliquotaISSLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "AliquotaISSColuna",
      label: "AliquotaISSColuna",
      name: "AliquotaISSColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "AliquotaISSTamanho",
      label: "AliquotaISSTamanho",
      name: "AliquotaISSTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlIssLinha",
      label: "VlIssLinha",
      name: "VlIssLinha",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "VlISSColuna",
      label: "VlISSColuna",
      name: "VlISSColuna",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "VlISSTamanho",
      label: "VlISSTamanho",
      name: "VlISSTamanho",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "EmissaoRodapeColuna",
      label: "EmissaoRodapeColuna",
      name: "EmissaoRodapeColuna",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "EmissaoRodapeTamanho",
      label: "EmissaoRodapeTamanho",
      name: "EmissaoRodapeTamanho",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FgImprimeLoteProdutos",
      label: "FgImprimeLoteProdutos",
      name: "FgImprimeLoteProdutos",
      typeField: "string",
      size: 1,
    },
    {
      field: "FaturaValorExtensoLinha",
      label: "FaturaValorExtensoLinha",
      name: "FaturaValorExtensoLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FaturaValorExtensoColuna",
      label: "FaturaValorExtensoColuna",
      name: "FaturaValorExtensoColuna",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FaturaValorExtensoTamanho",
      label: "FaturaValorExtensoTamanho",
      name: "FaturaValorExtensoTamanho",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliqIPIColuna",
      label: "AliqIPIColuna",
      name: "AliqIPIColuna",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliqIPITamanho",
      label: "AliqIPITamanho",
      name: "AliqIPITamanho",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlIPIItemColuna",
      label: "VlIPIItemColuna",
      name: "VlIPIItemColuna",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlIPIItemTamanho",
      label: "VlIPIItemTamanho",
      name: "VlIPIItemTamanho",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "FaturaPracaPagamentoLinha",
      label: "FaturaPracaPagamentoLinha",
      name: "FaturaPracaPagamentoLinha",
      typeField: "int",
      size: 2,
    },
    {
      field: "FaturaPracaPagamentoTamanho",
      label: "FaturaPracaPagamentoTamanho",
      name: "FaturaPracaPagamentoTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "FaturaPracaPagamentoColuna",
      label: "FaturaPracaPagamentoColuna",
      name: "FaturaPracaPagamentoColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "BaseISSLinha",
      label: "BaseISSLinha",
      name: "BaseISSLinha",
      typeField: "int",
      size: 2,
    },
    {
      field: "BaseISSColuna",
      label: "BaseISSColuna",
      name: "BaseISSColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "BaseISSTamanho",
      label: "BaseISSTamanho",
      name: "BaseISSTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "InscMunicipalLinha",
      label: "InscMunicipalLinha",
      name: "InscMunicipalLinha",
      typeField: "int",
      size: 2,
    },
    {
      field: "InscMunicipalColuna",
      label: "InscMunicipalColuna",
      name: "InscMunicipalColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "InscMunicipalTamanho",
      label: "InscMunicipalTamanho",
      name: "InscMunicipalTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "DecimaisValorProduto",
      label: "DecimaisValorProduto",
      name: "DecimaisValorProduto",
      typeField: "int",
      size: 2,
    },
    {
      field: "DecimaisAliqIPI",
      label: "DecimaisAliqIPI",
      name: "DecimaisAliqIPI",
      typeField: "int",
      size: 2,
    },
    {
      field: "DecimaisAliqICMS",
      label: "DecimaisAliqICMS",
      name: "DecimaisAliqICMS",
      typeField: "int",
      size: 2,
    },
    {
      field: "RzSocialFilialLinha",
      label: "RzSocialFilialLinha",
      name: "RzSocialFilialLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "RzSocialFilialColuna",
      label: "RzSocialFilialColuna",
      name: "RzSocialFilialColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "RzSocialFilialTamanho",
      label: "RzSocialFilialTamanho",
      name: "RzSocialFilialTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "EnderecoFilialLinha",
      label: "EnderecoFilialLinha",
      name: "EnderecoFilialLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "EnderecoFilialColuna",
      label: "EnderecoFilialColuna",
      name: "EnderecoFilialColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "EnderecoFilialTamanho",
      label: "EnderecoFilialTamanho",
      name: "EnderecoFilialTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "CNPJFilialLinha",
      label: "CNPJFilialLinha",
      name: "CNPJFilialLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CNPJFilialColuna",
      label: "CNPJFilialColuna",
      name: "CNPJFilialColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "CNPJFilialTamanho",
      label: "CNPJFilialTamanho",
      name: "CNPJFilialTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "TelefoneFilialLinha",
      label: "TelefoneFilialLinha",
      name: "TelefoneFilialLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "TelefoneFilialColuna",
      label: "TelefoneFilialColuna",
      name: "TelefoneFilialColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "TelefoneFilialTamanho",
      label: "TelefoneFilialTamanho",
      name: "TelefoneFilialTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "NumNotaCompLinha",
      label: "NumNotaCompLinha",
      name: "NumNotaCompLinha",
      typeField: "int",
      size: 2,
    },
    {
      field: "NumNotaCompColuna",
      label: "NumNotaCompColuna",
      name: "NumNotaCompColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "FgDestacaNumNotaCabecalho",
      label: "FgDestacaNumNotaCabecalho",
      name: "FgDestacaNumNotaCabecalho",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgDestacaNumNotaRodape",
      label: "FgDestacaNumNotaRodape",
      name: "FgDestacaNumNotaRodape",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgConfirmaSaltoPagina",
      label: "FgConfirmaSaltoPagina",
      name: "FgConfirmaSaltoPagina",
      typeField: "string",
      size: 1,
    },
    {
      field: "FonteNumNotaCabecalho",
      label: "FonteNumNotaCabecalho",
      name: "FonteNumNotaCabecalho",
      typeField: "int",
      size: 2,
    },
    {
      field: "FonteNumNotaRodape",
      label: "FonteNumNotaRodape",
      name: "FonteNumNotaRodape",
      typeField: "int",
      size: 2,
    },
    {
      field: "BaseCalcPISLinha",
      label: "BaseCalcPISLinha",
      name: "BaseCalcPISLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "BaseCalcPISColuna",
      label: "BaseCalcPISColuna",
      name: "BaseCalcPISColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "BaseCalcPISTamanho",
      label: "BaseCalcPISTamanho",
      name: "BaseCalcPISTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "AliquotaPISLinha",
      label: "AliquotaPISLinha",
      name: "AliquotaPISLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaPISColuna",
      label: "AliquotaPISColuna",
      name: "AliquotaPISColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "AliquotaPISTamanho",
      label: "AliquotaPISTamanho",
      name: "AliquotaPISTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "VlPISLinha",
      label: "VlPISLinha",
      name: "VlPISLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlPISColuna",
      label: "VlPISColuna",
      name: "VlPISColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "VlPISTamanho",
      label: "VlPISTamanho",
      name: "VlPISTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "BaseCalcCOFINSLinha",
      label: "BaseCalcCOFINSLinha",
      name: "BaseCalcCOFINSLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "BaseCalcCOFINSColuna",
      label: "BaseCalcCOFINSColuna",
      name: "BaseCalcCOFINSColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "BaseCalcCOFINSTamanho",
      label: "BaseCalcCOFINSTamanho",
      name: "BaseCalcCOFINSTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "AliquotaCOFINSLinha",
      label: "AliquotaCOFINSLinha",
      name: "AliquotaCOFINSLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaCOFINSColuna",
      label: "AliquotaCOFINSColuna",
      name: "AliquotaCOFINSColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "AliquotaCOFINSTamanho",
      label: "AliquotaCOFINSTamanho",
      name: "AliquotaCOFINSTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "VlCOFINSLinha",
      label: "VlCOFINSLinha",
      name: "VlCOFINSLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCOFINSColuna",
      label: "VlCOFINSColuna",
      name: "VlCOFINSColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "VlCOFINSTamanho",
      label: "VlCOFINSTamanho",
      name: "VlCOFINSTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "BaseCalcIRRFLinha",
      label: "BaseCalcIRRFLinha",
      name: "BaseCalcIRRFLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "BaseCalcIRRFColuna",
      label: "BaseCalcIRRFColuna",
      name: "BaseCalcIRRFColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "BaseCalcIRRFTamanho",
      label: "BaseCalcIRRFTamanho",
      name: "BaseCalcIRRFTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "AliquotaIRRFLinha",
      label: "AliquotaIRRFLinha",
      name: "AliquotaIRRFLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaIRRFColuna",
      label: "AliquotaIRRFColuna",
      name: "AliquotaIRRFColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "AliquotaIRRFTamanho",
      label: "AliquotaIRRFTamanho",
      name: "AliquotaIRRFTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "VlIRRFLinha",
      label: "VlIRRFLinha",
      name: "VlIRRFLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlIRRFColuna",
      label: "VlIRRFColuna",
      name: "VlIRRFColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "VlIRRFTamanho",
      label: "VlIRRFTamanho",
      name: "VlIRRFTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "BaseCalcCSLLLinha",
      label: "BaseCalcCSLLLinha",
      name: "BaseCalcCSLLLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "BaseCalcCSLLColuna",
      label: "BaseCalcCSLLColuna",
      name: "BaseCalcCSLLColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "BaseCalcCSLLTamanho",
      label: "BaseCalcCSLLTamanho",
      name: "BaseCalcCSLLTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "AliquotaCSLLLinha",
      label: "AliquotaCSLLLinha",
      name: "AliquotaCSLLLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "AliquotaCSLLColuna",
      label: "AliquotaCSLLColuna",
      name: "AliquotaCSLLColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "AliquotaCSLLTamanho",
      label: "AliquotaCSLLTamanho",
      name: "AliquotaCSLLTamanho",
      typeField: "int",
      size: 2,
    },
    {
      field: "VlCSLLLinha",
      label: "VlCSLLLinha",
      name: "VlCSLLLinha",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "VlCSLLColuna",
      label: "VlCSLLColuna",
      name: "VlCSLLColuna",
      typeField: "int",
      size: 2,
    },
    {
      field: "VlCSLLTamanho",
      label: "VlCSLLTamanho",
      name: "VlCSLLTamanho",
      typeField: "int",
      size: 2,
    },
  ],
};

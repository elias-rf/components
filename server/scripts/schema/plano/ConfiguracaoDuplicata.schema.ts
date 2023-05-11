import { TTableDef } from "@/types/model";

export const ConfiguracaoDuplicata: TTableDef = {
  database: "plano",
  table: "ConfiguracaoDuplicata",
  fields: [
    {
      field: "TamanhoFolha",
      label: "TamanhoFolha",
      name: "ConfiguracaoDuplicata_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "AlturaLinha",
      label: "AlturaLinha",
      name: "AlturaLinha",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DiaEmissaoLinha",
      label: "DiaEmissaoLinha",
      name: "DiaEmissaoLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DiaEmissaoColuna",
      label: "DiaEmissaoColuna",
      name: "DiaEmissaoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MesEmissaoColuna",
      label: "MesEmissaoColuna",
      name: "MesEmissaoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "AnoEmissaoColuna",
      label: "AnoEmissaoColuna",
      name: "AnoEmissaoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "AnoEmissaoTamanho",
      label: "AnoEmissaoTamanho",
      name: "AnoEmissaoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgMesExtenso",
      label: "FgMesExtenso",
      name: "FgMesExtenso",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumFaturaLinha",
      label: "NumFaturaLinha",
      name: "NumFaturaLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumFaturaColuna",
      label: "NumFaturaColuna",
      name: "NumFaturaColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumFaturaTamanho",
      label: "NumFaturaTamanho",
      name: "NumFaturaTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ValorLinha",
      label: "ValorLinha",
      name: "ValorLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "ValorColuna",
      label: "ValorColuna",
      name: "ValorColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ValorTamanho",
      label: "ValorTamanho",
      name: "ValorTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDuplicataLinha",
      label: "NumDuplicataLinha",
      name: "NumDuplicataLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumDuplicataColuna",
      label: "NumDuplicataColuna",
      name: "NumDuplicataColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDuplicataTamanho",
      label: "NumDuplicataTamanho",
      name: "NumDuplicataTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtVencimentoLinha",
      label: "DtVencimentoLinha",
      name: "DtVencimentoLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtVencimentoColuna",
      label: "DtVencimentoColuna",
      name: "DtVencimentoColuna",
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
      field: "DtLimiteDescontoLinha",
      label: "DtLimiteDescontoLinha",
      name: "DtLimiteDescontoLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtLimiteDescontoColuna",
      label: "DtLimiteDescontoColuna",
      name: "DtLimiteDescontoColuna",
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
      field: "RzSocialColuna",
      label: "RzSocialColuna",
      name: "RzSocialColuna",
      typeField: "int",

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
      field: "EnderecoLinha",
      label: "EnderecoLinha",
      name: "EnderecoLinha",
      typeField: "float",

      scale: 4,
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
      field: "EnderecoTamanho",
      label: "EnderecoTamanho",
      name: "EnderecoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "BairroLinha",
      label: "BairroLinha",
      name: "BairroLinha",
      typeField: "float",

      scale: 4,
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
      field: "CepLinha",
      label: "CepLinha",
      name: "CepLinha",
      typeField: "float",

      scale: 4,
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
      field: "MunicipioLinha",
      label: "MunicipioLinha",
      name: "MunicipioLinha",
      typeField: "float",

      scale: 4,
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
      field: "MunicipioTamanho",
      label: "MunicipioTamanho",
      name: "MunicipioTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EstadoLinha",
      label: "EstadoLinha",
      name: "EstadoLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "EstadoColuna",
      label: "EstadoColuna",
      name: "EstadoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EndPagamentoLinha",
      label: "EndPagamentoLinha",
      name: "EndPagamentoLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "EndPagamentoColuna",
      label: "EndPagamentoColuna",
      name: "EndPagamentoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EndPagamentoTamanho",
      label: "EndPagamentoTamanho",
      name: "EndPagamentoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MunicipioPagamentoLinha",
      label: "MunicipioPagamentoLinha",
      name: "MunicipioPagamentoLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "MunicipioPagamentoColuna",
      label: "MunicipioPagamentoColuna",
      name: "MunicipioPagamentoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "MunicipioPagamentoTamanho",
      label: "MunicipioPagamentoTamanho",
      name: "MunicipioPagamentoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "EstadoPagamentoLinha",
      label: "EstadoPagamentoLinha",
      name: "EstadoPagamentoLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "EstadoPagamentoColuna",
      label: "EstadoPagamentoColuna",
      name: "EstadoPagamentoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CNPJLinha",
      label: "CNPJLinha",
      name: "CNPJLinha",
      typeField: "float",

      scale: 4,
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
      field: "CNPJTamanho",
      label: "CNPJTamanho",
      name: "CNPJTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "InscEstLinha",
      label: "InscEstLinha",
      name: "InscEstLinha",
      typeField: "float",

      scale: 4,
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
      field: "InscEstTamanho",
      label: "InscEstTamanho",
      name: "InscEstTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Extenso1Linha",
      label: "Extenso1Linha",
      name: "Extenso1Linha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Extenso1Coluna",
      label: "Extenso1Coluna",
      name: "Extenso1Coluna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Extenso1Tamanho",
      label: "Extenso1Tamanho",
      name: "Extenso1Tamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Extenso2Linha",
      label: "Extenso2Linha",
      name: "Extenso2Linha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Extenso2Coluna",
      label: "Extenso2Coluna",
      name: "Extenso2Coluna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Extenso3Linha",
      label: "Extenso3Linha",
      name: "Extenso3Linha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Extenso3Coluna",
      label: "Extenso3Coluna",
      name: "Extenso3Coluna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ValorLinha1",
      label: "ValorLinha1",
      name: "ValorLinha1",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ValorColuna1",
      label: "ValorColuna1",
      name: "ValorColuna1",
      typeField: "int",
    },
    {
      field: "ValorTamanho1",
      label: "ValorTamanho1",
      name: "ValorTamanho1",
      typeField: "int",
    },
    {
      field: "TelefoneLinha",
      label: "TelefoneLinha",
      name: "TelefoneLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "TelefoneColuna",
      label: "TelefoneColuna",
      name: "TelefoneColuna",
      typeField: "int",
    },
    {
      field: "TelefoneTamanho",
      label: "TelefoneTamanho",
      name: "TelefoneTamanho",
      typeField: "int",
    },
    {
      field: "CepPagamentoLinha",
      label: "CepPagamentoLinha",
      name: "CepPagamentoLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CepPagamentoColuna",
      label: "CepPagamentoColuna",
      name: "CepPagamentoColuna",
      typeField: "int",
    },
    {
      field: "NmBancoLinha",
      label: "NmBancoLinha",
      name: "NmBancoLinha",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NmBancoColuna",
      label: "NmBancoColuna",
      name: "NmBancoColuna",
      typeField: "int",
    },
    {
      field: "NmBancoTamanho",
      label: "NmBancoTamanho",
      name: "NmBancoTamanho",
      typeField: "int",
    },
    {
      field: "BairroPagamentoLinha",
      label: "BairroPagamentoLinha",
      name: "BairroPagamentoLinha",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "BairroPagamentoColuna",
      label: "BairroPagamentoColuna",
      name: "BairroPagamentoColuna",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "BairroPagamentoTamanho",
      label: "BairroPagamentoTamanho",
      name: "BairroPagamentoTamanho",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "FgImprimeCodCli",
      label: "FgImprimeCodCli",
      name: "FgImprimeCodCli",
      typeField: "string",

      allowNull: false,
    },
  ],
};

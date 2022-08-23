import { TEntity } from "@er/types/*";

export const ConfiguracaoDuplicata: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoDuplicata",
  "fields": [
    {
      "field": "TamanhoFolha",
      "label": "TamanhoFolha",
      "name": "ConfiguracaoDuplicata_id",
      "type": "float",
      "size": 8,
      "scale": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "AlturaLinha",
      "label": "AlturaLinha",
      "name": "AlturaLinha",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "DiaEmissaoLinha",
      "label": "DiaEmissaoLinha",
      "name": "DiaEmissaoLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DiaEmissaoColuna",
      "label": "DiaEmissaoColuna",
      "name": "DiaEmissaoColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "MesEmissaoColuna",
      "label": "MesEmissaoColuna",
      "name": "MesEmissaoColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "AnoEmissaoColuna",
      "label": "AnoEmissaoColuna",
      "name": "AnoEmissaoColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "AnoEmissaoTamanho",
      "label": "AnoEmissaoTamanho",
      "name": "AnoEmissaoTamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "FgMesExtenso",
      "label": "FgMesExtenso",
      "name": "FgMesExtenso",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "NumFaturaLinha",
      "label": "NumFaturaLinha",
      "name": "NumFaturaLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumFaturaColuna",
      "label": "NumFaturaColuna",
      "name": "NumFaturaColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumFaturaTamanho",
      "label": "NumFaturaTamanho",
      "name": "NumFaturaTamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "ValorLinha",
      "label": "ValorLinha",
      "name": "ValorLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ValorColuna",
      "label": "ValorColuna",
      "name": "ValorColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "ValorTamanho",
      "label": "ValorTamanho",
      "name": "ValorTamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumDuplicataLinha",
      "label": "NumDuplicataLinha",
      "name": "NumDuplicataLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumDuplicataColuna",
      "label": "NumDuplicataColuna",
      "name": "NumDuplicataColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumDuplicataTamanho",
      "label": "NumDuplicataTamanho",
      "name": "NumDuplicataTamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DtVencimentoLinha",
      "label": "DtVencimentoLinha",
      "name": "DtVencimentoLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtVencimentoColuna",
      "label": "DtVencimentoColuna",
      "name": "DtVencimentoColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlDescontoLinha",
      "label": "VlDescontoLinha",
      "name": "VlDescontoLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlDescontoColuna",
      "label": "VlDescontoColuna",
      "name": "VlDescontoColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "VlDescontoTamanho",
      "label": "VlDescontoTamanho",
      "name": "VlDescontoTamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DtLimiteDescontoLinha",
      "label": "DtLimiteDescontoLinha",
      "name": "DtLimiteDescontoLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtLimiteDescontoColuna",
      "label": "DtLimiteDescontoColuna",
      "name": "DtLimiteDescontoColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "RzSocialLinha",
      "label": "RzSocialLinha",
      "name": "RzSocialLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "RzSocialColuna",
      "label": "RzSocialColuna",
      "name": "RzSocialColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "RzSocialTamanho",
      "label": "RzSocialTamanho",
      "name": "RzSocialTamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "EnderecoLinha",
      "label": "EnderecoLinha",
      "name": "EnderecoLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "EnderecoColuna",
      "label": "EnderecoColuna",
      "name": "EnderecoColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "EnderecoTamanho",
      "label": "EnderecoTamanho",
      "name": "EnderecoTamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "BairroLinha",
      "label": "BairroLinha",
      "name": "BairroLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "BairroColuna",
      "label": "BairroColuna",
      "name": "BairroColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "BairroTamanho",
      "label": "BairroTamanho",
      "name": "BairroTamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CepLinha",
      "label": "CepLinha",
      "name": "CepLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CepColuna",
      "label": "CepColuna",
      "name": "CepColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "MunicipioLinha",
      "label": "MunicipioLinha",
      "name": "MunicipioLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "MunicipioColuna",
      "label": "MunicipioColuna",
      "name": "MunicipioColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "MunicipioTamanho",
      "label": "MunicipioTamanho",
      "name": "MunicipioTamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "EstadoLinha",
      "label": "EstadoLinha",
      "name": "EstadoLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "EstadoColuna",
      "label": "EstadoColuna",
      "name": "EstadoColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "EndPagamentoLinha",
      "label": "EndPagamentoLinha",
      "name": "EndPagamentoLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "EndPagamentoColuna",
      "label": "EndPagamentoColuna",
      "name": "EndPagamentoColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "EndPagamentoTamanho",
      "label": "EndPagamentoTamanho",
      "name": "EndPagamentoTamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "MunicipioPagamentoLinha",
      "label": "MunicipioPagamentoLinha",
      "name": "MunicipioPagamentoLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "MunicipioPagamentoColuna",
      "label": "MunicipioPagamentoColuna",
      "name": "MunicipioPagamentoColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "MunicipioPagamentoTamanho",
      "label": "MunicipioPagamentoTamanho",
      "name": "MunicipioPagamentoTamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "EstadoPagamentoLinha",
      "label": "EstadoPagamentoLinha",
      "name": "EstadoPagamentoLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "EstadoPagamentoColuna",
      "label": "EstadoPagamentoColuna",
      "name": "EstadoPagamentoColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CNPJLinha",
      "label": "CNPJLinha",
      "name": "CNPJLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CNPJColuna",
      "label": "CNPJColuna",
      "name": "CNPJColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CNPJTamanho",
      "label": "CNPJTamanho",
      "name": "CNPJTamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "InscEstLinha",
      "label": "InscEstLinha",
      "name": "InscEstLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "InscEstColuna",
      "label": "InscEstColuna",
      "name": "InscEstColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "InscEstTamanho",
      "label": "InscEstTamanho",
      "name": "InscEstTamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Extenso1Linha",
      "label": "Extenso1Linha",
      "name": "Extenso1Linha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Extenso1Coluna",
      "label": "Extenso1Coluna",
      "name": "Extenso1Coluna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Extenso1Tamanho",
      "label": "Extenso1Tamanho",
      "name": "Extenso1Tamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Extenso2Linha",
      "label": "Extenso2Linha",
      "name": "Extenso2Linha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Extenso2Coluna",
      "label": "Extenso2Coluna",
      "name": "Extenso2Coluna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Extenso3Linha",
      "label": "Extenso3Linha",
      "name": "Extenso3Linha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "Extenso3Coluna",
      "label": "Extenso3Coluna",
      "name": "Extenso3Coluna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "ValorLinha1",
      "label": "ValorLinha1",
      "name": "ValorLinha1",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ValorColuna1",
      "label": "ValorColuna1",
      "name": "ValorColuna1",
      "type": "int",
      "size": 2
    },
    {
      "field": "ValorTamanho1",
      "label": "ValorTamanho1",
      "name": "ValorTamanho1",
      "type": "int",
      "size": 2
    },
    {
      "field": "TelefoneLinha",
      "label": "TelefoneLinha",
      "name": "TelefoneLinha",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "TelefoneColuna",
      "label": "TelefoneColuna",
      "name": "TelefoneColuna",
      "type": "int",
      "size": 2
    },
    {
      "field": "TelefoneTamanho",
      "label": "TelefoneTamanho",
      "name": "TelefoneTamanho",
      "type": "int",
      "size": 2
    },
    {
      "field": "CepPagamentoLinha",
      "label": "CepPagamentoLinha",
      "name": "CepPagamentoLinha",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CepPagamentoColuna",
      "label": "CepPagamentoColuna",
      "name": "CepPagamentoColuna",
      "type": "int",
      "size": 2
    },
    {
      "field": "NmBancoLinha",
      "label": "NmBancoLinha",
      "name": "NmBancoLinha",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NmBancoColuna",
      "label": "NmBancoColuna",
      "name": "NmBancoColuna",
      "type": "int",
      "size": 2
    },
    {
      "field": "NmBancoTamanho",
      "label": "NmBancoTamanho",
      "name": "NmBancoTamanho",
      "type": "int",
      "size": 2
    },
    {
      "field": "BairroPagamentoLinha",
      "label": "BairroPagamentoLinha",
      "name": "BairroPagamentoLinha",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "BairroPagamentoColuna",
      "label": "BairroPagamentoColuna",
      "name": "BairroPagamentoColuna",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "BairroPagamentoTamanho",
      "label": "BairroPagamentoTamanho",
      "name": "BairroPagamentoTamanho",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "FgImprimeCodCli",
      "label": "FgImprimeCodCli",
      "name": "FgImprimeCodCli",
      "type": "string",
      "size": 1,
      "allowNull": false
    }
  ]
}

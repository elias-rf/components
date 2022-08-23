import { TEntity } from "@er/types/*";

export const tOrdemProducao: TEntity =
  {
  "database": "oftalmo",
  "table": "tOrdemProducao",
  "fields": [
    {
      "field": "kOp",
      "label": "kOp",
      "name": "tOrdemProducao_id",
      "type": "int",
      "size": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "ChaveAntiga",
      "label": "ChaveAntiga",
      "name": "ChaveAntiga",
      "type": "string",
      "size": 8
    },
    {
      "field": "fkTipoOP",
      "label": "fkTipoOP",
      "name": "fkTipoOP",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DataEmissao",
      "label": "DataEmissao",
      "name": "DataEmissao",
      "type": "date",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "DataFechamento",
      "label": "DataFechamento",
      "name": "DataFechamento",
      "type": "date",
      "size": 4
    },
    {
      "field": "Travado",
      "label": "Travado",
      "name": "Travado",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "fkOpPai",
      "label": "fkOpPai",
      "name": "fkOpPai",
      "type": "int",
      "size": 4
    },
    {
      "field": "LoteFabricante",
      "label": "LoteFabricante",
      "name": "LoteFabricante",
      "type": "string",
      "size": 150
    },
    {
      "field": "NomeUsuario",
      "label": "NomeUsuario",
      "name": "NomeUsuario",
      "type": "string",
      "size": 50,
      "allowNull": false
    },
    {
      "field": "fkOPBotao",
      "label": "fkOPBotao",
      "name": "fkOPBotao",
      "type": "int",
      "size": 4
    },
    {
      "field": "fkOPBotaoAntiga",
      "label": "fkOPBotaoAntiga",
      "name": "fkOPBotaoAntiga",
      "type": "string",
      "size": 8
    },
    {
      "field": "ViaAntiga",
      "label": "ViaAntiga",
      "name": "ViaAntiga",
      "type": "float",
      "size": 4
    },
    {
      "field": "fkOPLoop",
      "label": "fkOPLoop",
      "name": "fkOPLoop",
      "type": "int",
      "size": 4
    },
    {
      "field": "fkOPLoopAntiga",
      "label": "fkOPLoopAntiga",
      "name": "fkOPLoopAntiga",
      "type": "string",
      "size": 8
    },
    {
      "field": "fkProdutoItem",
      "label": "fkProdutoItem",
      "name": "fkProdutoItem",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "QtdEmProcesso",
      "label": "QtdEmProcesso",
      "name": "QtdEmProcesso",
      "type": "int",
      "size": 4,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "Broca",
      "label": "Broca",
      "name": "Broca",
      "type": "float",
      "size": 4
    },
    {
      "field": "fkLoteEstExt",
      "label": "fkLoteEstExt",
      "name": "fkLoteEstExt",
      "type": "int",
      "size": 4
    },
    {
      "field": "fkLoteEstInt",
      "label": "fkLoteEstInt",
      "name": "fkLoteEstInt",
      "type": "int",
      "size": 4
    },
    {
      "field": "EspessuraBotao",
      "label": "EspessuraBotao",
      "name": "EspessuraBotao",
      "type": "float",
      "size": 4
    },
    {
      "field": "DiametroBotao",
      "label": "DiametroBotao",
      "name": "DiametroBotao",
      "type": "float",
      "size": 4
    },
    {
      "field": "LoteBotaoTerceiro",
      "label": "LoteBotaoTerceiro",
      "name": "LoteBotaoTerceiro",
      "type": "string",
      "size": 20
    },
    {
      "field": "QtdFilamentosLoop",
      "label": "QtdFilamentosLoop",
      "name": "QtdFilamentosLoop",
      "type": "int",
      "size": 1
    },
    {
      "field": "EspessuraLoop",
      "label": "EspessuraLoop",
      "name": "EspessuraLoop",
      "type": "float",
      "size": 4
    },
    {
      "field": "ModeloLoop",
      "label": "ModeloLoop",
      "name": "ModeloLoop",
      "type": "string",
      "size": 1
    },
    {
      "field": "TamanhoLoop",
      "label": "TamanhoLoop",
      "name": "TamanhoLoop",
      "type": "float",
      "size": 4
    },
    {
      "field": "Partida",
      "label": "Partida",
      "name": "Partida",
      "type": "int",
      "size": 1
    },
    {
      "field": "ClasseOP",
      "label": "ClasseOP",
      "name": "ClasseOP",
      "type": "int",
      "size": 1
    },
    {
      "field": "fkPrimeiraOperacao",
      "label": "fkPrimeiraOperacao",
      "name": "fkPrimeiraOperacao",
      "type": "int",
      "size": 4
    },
    {
      "field": "CalcularEmProcesso",
      "label": "CalcularEmProcesso",
      "name": "CalcularEmProcesso",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "Selecao",
      "label": "Selecao",
      "name": "Selecao",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    },
    {
      "field": "QtdEstExt_tmp",
      "label": "QtdEstExt_tmp",
      "name": "QtdEstExt_tmp",
      "type": "int",
      "size": 4
    },
    {
      "field": "Obs",
      "label": "Obs",
      "name": "Obs",
      "type": "string",
      "size": 300
    },
    {
      "field": "Expiracao",
      "label": "Expiracao",
      "name": "Expiracao",
      "type": "date",
      "size": 4
    },
    {
      "field": "OPVerificada",
      "label": "OPVerificada",
      "name": "OPVerificada",
      "type": "int",
      "size": 1,
      "defaultValue": "0"
    },
    {
      "field": "CriticaLancamento",
      "label": "CriticaLancamento",
      "name": "CriticaLancamento",
      "type": "string",
      "size": 5000
    },
    {
      "field": "fkOPMestre",
      "label": "fkOPMestre",
      "name": "fkOPMestre",
      "type": "int",
      "size": 4
    },
    {
      "field": "DataUltimoLancamento",
      "label": "DataUltimoLancamento",
      "name": "DataUltimoLancamento",
      "type": "date",
      "size": 4
    },
    {
      "field": "IndiceRefracao",
      "label": "IndiceRefracao",
      "name": "IndiceRefracao",
      "type": "float",
      "size": 4
    },
    {
      "field": "IndiceRefracao2",
      "label": "IndiceRefracao2",
      "name": "IndiceRefracao2",
      "type": "float",
      "size": 4
    },
    {
      "field": "EtiqInternaImpressa",
      "label": "EtiqInternaImpressa",
      "name": "EtiqInternaImpressa",
      "type": "int",
      "size": 1,
      "defaultValue": "0"
    },
    {
      "field": "ExportadoSANKHYA",
      "label": "ExportadoSANKHYA",
      "name": "ExportadoSANKHYA",
      "type": "int",
      "size": 1
    },
    {
      "field": "deleted",
      "label": "deleted",
      "name": "deleted",
      "type": "int",
      "size": 1,
      "defaultValue": "0"
    },
    {
      "field": "ts",
      "label": "ts",
      "name": "ts",
      "type": "timestamp",
      "size": 8
    },
    {
      "field": "versao",
      "label": "versao",
      "name": "versao",
      "type": "int",
      "size": 2
    },
    {
      "field": "emProcesso",
      "label": "emProcesso",
      "name": "emProcesso",
      "type": "int",
      "size": 1
    },
    {
      "field": "fkOperacaoEmProcesso",
      "label": "fkOperacaoEmProcesso",
      "name": "fkOperacaoEmProcesso",
      "type": "int",
      "size": 4
    },
    {
      "field": "loteTamboreamento",
      "label": "loteTamboreamento",
      "name": "loteTamboreamento",
      "type": "string",
      "size": 50
    }
  ]
}

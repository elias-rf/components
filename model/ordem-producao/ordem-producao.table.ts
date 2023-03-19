import { TTableDef } from "../../types";

export const ordem_producao: TTableDef = {
  database: "oftalmo",
  table: "tOrdemProducao",
  fields: [
    {
      field: "kOp",
      label: "OP",
      name: "ordem_producao_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "ChaveAntiga",
      label: "ChaveAntiga",
      name: "ChaveAntiga",
      typeField: "string",
      size: 8,
    },
    {
      field: "fkTipoOP",
      label: "fkTipoOP",
      name: "ordem_producao_tipo_id",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DataEmissao",
      label: "DataEmissao",
      name: "data_emissao",
      typeField: "date",
      size: 4,
      allowNull: false,
    },
    {
      field: "DataFechamento",
      label: "DataFechamento",
      name: "data_fechamento",
      typeField: "date",
      size: 4,
    },
    {
      field: "Travado",
      label: "Travado",
      name: "travado",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "fkOpPai",
      label: "fkOpPai",
      name: "ordem_producao_pai_id",
      typeField: "int",
      size: 4,
    },
    {
      field: "LoteFabricante",
      label: "LoteFabricante",
      name: "lote_fabricante",
      typeField: "string",
      size: 150,
    },
    {
      field: "NomeUsuario",
      label: "NomeUsuario",
      name: "usuario",
      typeField: "string",
      size: 50,
      allowNull: false,
    },
    {
      field: "fkOPBotao",
      label: "fkOPBotao",
      name: "fkOPBotao",
      typeField: "int",
      size: 4,
    },
    {
      field: "fkOPBotaoAntiga",
      label: "fkOPBotaoAntiga",
      name: "fkOPBotaoAntiga",
      typeField: "string",
      size: 8,
    },
    {
      field: "ViaAntiga",
      label: "ViaAntiga",
      name: "ViaAntiga",
      typeField: "float",
      size: 4,
    },
    {
      field: "fkOPLoop",
      label: "fkOPLoop",
      name: "fkOPLoop",
      typeField: "int",
      size: 4,
    },
    {
      field: "fkOPLoopAntiga",
      label: "fkOPLoopAntiga",
      name: "fkOPLoopAntiga",
      typeField: "string",
      size: 8,
    },
    {
      field: "fkProdutoItem",
      label: "fkProdutoItem",
      name: "produto_item_id",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "quantidade",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "QtdEmProcesso",
      label: "QtdEmProcesso",
      name: "em_processo",
      typeField: "int",
      size: 4,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Broca",
      label: "Broca",
      name: "Broca",
      typeField: "float",
      size: 4,
    },
    {
      field: "fkLoteEstExt",
      label: "fkLoteEstExt",
      name: "esterilizacao_externa_id",
      typeField: "int",
      size: 4,
    },
    {
      field: "fkLoteEstInt",
      label: "fkLoteEstInt",
      name: "esterilizacao_interna_id",
      typeField: "int",
      size: 4,
    },
    {
      field: "EspessuraBotao",
      label: "EspessuraBotao",
      name: "EspessuraBotao",
      typeField: "float",
      size: 4,
    },
    {
      field: "DiametroBotao",
      label: "DiametroBotao",
      name: "DiametroBotao",
      typeField: "float",
      size: 4,
    },
    {
      field: "LoteBotaoTerceiro",
      label: "LoteBotaoTerceiro",
      name: "LoteBotaoTerceiro",
      typeField: "string",
      size: 20,
    },
    {
      field: "QtdFilamentosLoop",
      label: "QtdFilamentosLoop",
      name: "QtdFilamentosLoop",
      typeField: "int",
      size: 1,
    },
    {
      field: "EspessuraLoop",
      label: "EspessuraLoop",
      name: "EspessuraLoop",
      typeField: "float",
      size: 4,
    },
    {
      field: "ModeloLoop",
      label: "ModeloLoop",
      name: "ModeloLoop",
      typeField: "string",
      size: 1,
    },
    {
      field: "TamanhoLoop",
      label: "TamanhoLoop",
      name: "TamanhoLoop",
      typeField: "float",
      size: 4,
    },
    {
      field: "Partida",
      label: "Partida",
      name: "Partida",
      typeField: "int",
      size: 1,
    },
    {
      field: "ClasseOP",
      label: "ClasseOP",
      name: "ClasseOP",
      typeField: "int",
      size: 1,
    },
    {
      field: "fkPrimeiraOperacao",
      label: "fkPrimeiraOperacao",
      name: "fkPrimeiraOperacao",
      typeField: "int",
      size: 4,
    },
    {
      field: "CalcularEmProcesso",
      label: "CalcularEmProcesso",
      name: "CalcularEmProcesso",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Selecao",
      label: "Selecao",
      name: "Selecao",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "QtdEstExt_tmp",
      label: "QtdEstExt_tmp",
      name: "esterilizacao_externa_quantidade",
      typeField: "int",
      size: 4,
    },
    {
      field: "Obs",
      label: "Obs",
      name: "Obs",
      typeField: "string",
      size: 300,
    },
    {
      field: "Expiracao",
      label: "Expiracao",
      name: "Expiracao",
      typeField: "date",
      size: 4,
    },
    {
      field: "OPVerificada",
      label: "OPVerificada",
      name: "OPVerificada",
      typeField: "int",
      size: 1,
      defaultValue: "0",
    },
    {
      field: "CriticaLancamento",
      label: "CriticaLancamento",
      name: "CriticaLancamento",
      typeField: "string",
      size: 5000,
    },
    {
      field: "fkOPMestre",
      label: "fkOPMestre",
      name: "ordem_producao_mestre_id",
      typeField: "int",
      size: 4,
    },
    {
      field: "DataUltimoLancamento",
      label: "DataUltimoLancamento",
      name: "DataUltimoLancamento",
      typeField: "date",
      size: 4,
    },
    {
      field: "IndiceRefracao",
      label: "IndiceRefracao",
      name: "IndiceRefracao",
      typeField: "float",
      size: 4,
    },
    {
      field: "IndiceRefracao2",
      label: "IndiceRefracao2",
      name: "IndiceRefracao2",
      typeField: "float",
      size: 4,
    },
    {
      field: "EtiqInternaImpressa",
      label: "EtiqInternaImpressa",
      name: "EtiqInternaImpressa",
      typeField: "int",
      size: 1,
      defaultValue: "0",
    },
    {
      field: "ExportadoSANKHYA",
      label: "ExportadoSANKHYA",
      name: "ExportadoSANKHYA",
      typeField: "int",
      size: 1,
    },
    {
      field: "deleted",
      label: "deleted",
      name: "deleted",
      typeField: "int",
      size: 1,
      defaultValue: "0",
    },
    {
      field: "versao",
      label: "versao",
      name: "versao",
      typeField: "int",
      size: 2,
    },
    {
      field: "emProcesso",
      label: "emProcesso",
      name: "eh_em_processo",
      typeField: "int",
      size: 1,
    },
    {
      field: "fkOperacaoEmProcesso",
      label: "fkOperacaoEmProcesso",
      name: "fkOperacaoEmProcesso",
      typeField: "int",
      size: 4,
    },
    {
      field: "loteTamboreamento",
      label: "loteTamboreamento",
      name: "tamboreamento_lote",
      typeField: "string",
      size: 50,
    },
  ],
};

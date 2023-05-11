import { TTableDef } from "@/types";

export const ordem_producao: TTableDef = {
  database: "oftalmo",
  table: "tOrdemProducao",
  fields: [
    {
      field: "kOp",
      label: "OP",
      name: "ordem_producao_id",
      typeField: "int",
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "ChaveAntiga",
      label: "ChaveAntiga",
      name: "ChaveAntiga",
      typeField: "string",
    },
    {
      field: "fkTipoOP",
      label: "fkTipoOP",
      name: "ordem_producao_tipo_id",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DataEmissao",
      label: "DataEmissao",
      name: "data_emissao",
      typeField: "date",

      allowNull: false,
    },
    {
      field: "DataFechamento",
      label: "DataFechamento",
      name: "data_fechamento",
      typeField: "date",
    },
    {
      field: "Travado",
      label: "Travado",
      name: "travado",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "fkOpPai",
      label: "fkOpPai",
      name: "ordem_producao_pai_id",
      typeField: "int",
    },
    {
      field: "LoteFabricante",
      label: "LoteFabricante",
      name: "lote_fabricante",
      typeField: "string",
    },
    {
      field: "NomeUsuario",
      label: "NomeUsuario",
      name: "usuario",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "fkOPBotao",
      label: "fkOPBotao",
      name: "fkOPBotao",
      typeField: "int",
    },
    {
      field: "fkOPBotaoAntiga",
      label: "fkOPBotaoAntiga",
      name: "fkOPBotaoAntiga",
      typeField: "string",
    },
    {
      field: "ViaAntiga",
      label: "ViaAntiga",
      name: "ViaAntiga",
      typeField: "float",
    },
    {
      field: "fkOPLoop",
      label: "fkOPLoop",
      name: "fkOPLoop",
      typeField: "int",
    },
    {
      field: "fkOPLoopAntiga",
      label: "fkOPLoopAntiga",
      name: "fkOPLoopAntiga",
      typeField: "string",
    },
    {
      field: "fkProdutoItem",
      label: "fkProdutoItem",
      name: "produto_item_id",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "quantidade",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "QtdEmProcesso",
      label: "QtdEmProcesso",
      name: "em_processo",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Broca",
      label: "Broca",
      name: "Broca",
      typeField: "float",
    },
    {
      field: "fkLoteEstExt",
      label: "fkLoteEstExt",
      name: "esterilizacao_externa_id",
      typeField: "int",
    },
    {
      field: "fkLoteEstInt",
      label: "fkLoteEstInt",
      name: "esterilizacao_interna_id",
      typeField: "int",
    },
    {
      field: "EspessuraBotao",
      label: "EspessuraBotao",
      name: "EspessuraBotao",
      typeField: "float",
    },
    {
      field: "DiametroBotao",
      label: "DiametroBotao",
      name: "DiametroBotao",
      typeField: "float",
    },
    {
      field: "LoteBotaoTerceiro",
      label: "LoteBotaoTerceiro",
      name: "LoteBotaoTerceiro",
      typeField: "string",
    },
    {
      field: "QtdFilamentosLoop",
      label: "QtdFilamentosLoop",
      name: "QtdFilamentosLoop",
      typeField: "int",
    },
    {
      field: "EspessuraLoop",
      label: "EspessuraLoop",
      name: "EspessuraLoop",
      typeField: "float",
    },
    {
      field: "ModeloLoop",
      label: "ModeloLoop",
      name: "ModeloLoop",
      typeField: "string",
    },
    {
      field: "TamanhoLoop",
      label: "TamanhoLoop",
      name: "TamanhoLoop",
      typeField: "float",
    },
    {
      field: "Partida",
      label: "Partida",
      name: "Partida",
      typeField: "int",
    },
    {
      field: "ClasseOP",
      label: "ClasseOP",
      name: "ClasseOP",
      typeField: "int",
    },
    {
      field: "fkPrimeiraOperacao",
      label: "fkPrimeiraOperacao",
      name: "fkPrimeiraOperacao",
      typeField: "int",
    },
    {
      field: "CalcularEmProcesso",
      label: "CalcularEmProcesso",
      name: "CalcularEmProcesso",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "Selecao",
      label: "Selecao",
      name: "Selecao",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
    {
      field: "QtdEstExt_tmp",
      label: "QtdEstExt_tmp",
      name: "esterilizacao_externa_quantidade",
      typeField: "int",
    },
    {
      field: "Obs",
      label: "Obs",
      name: "Obs",
      typeField: "string",
    },
    {
      field: "Expiracao",
      label: "Expiracao",
      name: "Expiracao",
      typeField: "date",
    },
    {
      field: "OPVerificada",
      label: "OPVerificada",
      name: "OPVerificada",
      typeField: "int",

      defaultValue: "0",
    },
    {
      field: "CriticaLancamento",
      label: "CriticaLancamento",
      name: "CriticaLancamento",
      typeField: "string",
    },
    {
      field: "fkOPMestre",
      label: "fkOPMestre",
      name: "ordem_producao_mestre_id",
      typeField: "int",
    },
    {
      field: "DataUltimoLancamento",
      label: "DataUltimoLancamento",
      name: "DataUltimoLancamento",
      typeField: "date",
    },
    {
      field: "IndiceRefracao",
      label: "IndiceRefracao",
      name: "IndiceRefracao",
      typeField: "float",
    },
    {
      field: "IndiceRefracao2",
      label: "IndiceRefracao2",
      name: "IndiceRefracao2",
      typeField: "float",
    },
    {
      field: "EtiqInternaImpressa",
      label: "EtiqInternaImpressa",
      name: "EtiqInternaImpressa",
      typeField: "int",

      defaultValue: "0",
    },
    {
      field: "ExportadoSANKHYA",
      label: "ExportadoSANKHYA",
      name: "ExportadoSANKHYA",
      typeField: "int",
    },
    {
      field: "deleted",
      label: "deleted",
      name: "deleted",
      typeField: "int",

      defaultValue: "0",
    },
    {
      field: "versao",
      label: "versao",
      name: "versao",
      typeField: "int",
    },
    {
      field: "emProcesso",
      label: "emProcesso",
      name: "eh_em_processo",
      typeField: "int",
    },
    {
      field: "fkOperacaoEmProcesso",
      label: "fkOperacaoEmProcesso",
      name: "fkOperacaoEmProcesso",
      typeField: "int",
    },
    {
      field: "loteTamboreamento",
      label: "loteTamboreamento",
      name: "tamboreamento_lote",
      typeField: "string",
    },
  ],
};

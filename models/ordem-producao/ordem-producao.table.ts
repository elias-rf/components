import { TTableDef } from "@/types";

export const ordem_producao: TTableDef = {
  database: "oftalmo",
  table: "tOrdemProducao",
  fields: [
    {
      // chave primária
      field: "kOp",
      label: "OP",
      name: "ordem_producao_id",
      typeField: "int",
      primaryKey: true,
      allowNull: false,
    },
    {
      // chave primária para ordem_producao anteriores a 2004-05-13
      field: "ChaveAntiga",
      label: "ChaveAntiga",
      name: "ChaveAntiga",
      typeField: "string",
    },
    {
      // chave estrangeira ordem_producao_tipo
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
      // chave estrangeira para ordem_producao
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
      // chave estrangeira para usuario do sistema
      field: "NomeUsuario",
      label: "NomeUsuario",
      name: "usuario",
      typeField: "string",
      allowNull: false,
    },
    // {
    //   // não usado
    //   field: "fkOPBotao",
    //   label: "fkOPBotao",
    //   name: "fkOPBotao",
    //   typeField: "int",
    // },
    // {
    //   // não usado
    //   field: "fkOPBotaoAntiga",
    //   label: "fkOPBotaoAntiga",
    //   name: "fkOPBotaoAntiga",
    //   typeField: "string",
    // },
    {
      // não usado
      field: "ViaAntiga",
      label: "ViaAntiga",
      name: "ViaAntiga",
      typeField: "float",
    },
    {
      // não usado
      field: "fkOPLoop",
      label: "fkOPLoop",
      name: "fkOPLoop",
      typeField: "int",
    },
    {
      // não usado
      field: "fkOPLoopAntiga",
      label: "fkOPLoopAntiga",
      name: "fkOPLoopAntiga",
      typeField: "string",
    },
    {
      // chave estrangeira para produto_item
      field: "fkProdutoItem",
      label: "fkProdutoItem",
      name: "produto_item_id",
      typeField: "int",
      allowNull: false,
    },
    {
      // quantidade inicial da ordem_producao
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
    // {
    //   // não usado
    //   field: "Broca",
    //   label: "Broca",
    //   name: "Broca",
    //   typeField: "float",
    // },
    {
      // chave estrangeira para esterilizacao externa
      field: "fkLoteEstExt",
      label: "fkLoteEstExt",
      name: "esterilizacao_externa_id",
      typeField: "int",
    },
    {
      // chave estrangeira para esterilizacao interna
      field: "fkLoteEstInt",
      label: "fkLoteEstInt",
      name: "esterilizacao_interna_id",
      typeField: "int",
    },
    {
      // não usado
      field: "EspessuraBotao",
      label: "EspessuraBotao",
      name: "EspessuraBotao",
      typeField: "float",
    },
    {
      // não usado
      field: "DiametroBotao",
      label: "DiametroBotao",
      name: "DiametroBotao",
      typeField: "float",
    },
    {
      // não usado
      field: "LoteBotaoTerceiro",
      label: "LoteBotaoTerceiro",
      name: "LoteBotaoTerceiro",
      typeField: "string",
    },
    {
      // não usado
      field: "QtdFilamentosLoop",
      label: "QtdFilamentosLoop",
      name: "QtdFilamentosLoop",
      typeField: "int",
    },
    {
      // não usado
      field: "EspessuraLoop",
      label: "EspessuraLoop",
      name: "EspessuraLoop",
      typeField: "float",
    },
    {
      // não usado
      field: "ModeloLoop",
      label: "ModeloLoop",
      name: "ModeloLoop",
      typeField: "string",
    },
    {
      // não usado
      field: "TamanhoLoop",
      label: "TamanhoLoop",
      name: "TamanhoLoop",
      typeField: "float",
    },
    {
      // não usado
      field: "Partida",
      label: "Partida",
      name: "Partida",
      typeField: "int",
    },
    {
      // ??
      field: "ClasseOP",
      label: "ClasseOP",
      name: "ClasseOP",
      typeField: "int",
    },
    {
      // chave estrangeira para operacao_producao
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
      // quantidade para esterilizacao externa
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
      // chave estrangeira para ordem_producao (mestre = inicial de todas)
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
      // não usado
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
      // versão de ordem_producao (etiquetagem ?)
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
      // chave estrangeira para operacao_producao em processo
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

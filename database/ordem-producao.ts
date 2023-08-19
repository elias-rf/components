import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { Model, ModelObject } from "objection";
import { OrdemProducaoTipo } from "./ordem-producao-tipo";
import { ProdutoItem } from "./produto-item";

export class OrdemProducao extends ModelBase {
  static tableName = "tOrdemProducao";
  static idColumn = "kOp";

  kOp!: number;
  ChaveAntiga!: string;
  fkTipoOP!: number;
  DataEmissao!: Date;
  DataFechamento!: Date;
  Travado!: number;
  fkOpPai!: number;
  LoteFabricante!: string;
  NomeUsuario!: string;
  fkOPBotao!: number;
  fkOPBotaoAntiga!: string;
  ViaAntiga!: number;
  fkOPLoop!: number;
  fkOPLoopAntiga!: string;
  fkProdutoItem!: number;
  Quantidade!: number;
  QtdEmProcesso!: number;
  Broca!: number;
  fkLoteEstExt!: number;
  fkLoteEstInt!: number;
  EspessuraBotao!: number;
  DiametroBotao!: number;
  LoteBotaoTerceiro!: string;
  QtdFilamentosLoop!: number;
  EspessuraLoop!: number;
  ModeloLoop!: string;
  TamanhoLoop!: number;
  Partida!: number;
  ClasseOP!: number;
  fkPrimeiraOperacao!: number;
  CalcularEmProcesso!: number;
  Selecao!: number;
  QtdEstExt_tmp!: number;
  Obs!: string;
  Expiracao!: Date;
  OPVerificada!: number;
  CriticaLancamento!: string;
  fkOPMestre!: number;
  DataUltimoLancamento!: Date;
  IndiceRefracao!: number;
  IndiceRefracao2!: number;
  EtiqInternaImpressa!: number;
  ExportadoSANKHYA!: number;
  deleted!: number;
  ts!: string;
  versao!: number;
  emProcesso!: number;
  fkOperacaoEmProcesso!: number;
  loteTamboreamento!: string;
  raio!: string;

  static relationMappings = {
    tipo: {
      relation: Model.BelongsToOneRelation,
      modelClass: OrdemProducaoTipo,
      join: {
        from: "tOrdemProducao.fkTipoOP",
        to: "tTipoDeOP.kTipoOP",
      },
    },
    produtoItem: {
      relation: Model.BelongsToOneRelation,
      modelClass: ProdutoItem,
      join: {
        from: "tOrdemProducao.fkProdutoItem",
        to: "tbl_Produto_Item.kProdutoItem",
      },
    },
  };

  static getFields() {
    return [
      "kOp",
      "ChaveAntiga",
      "fkTipoOP",
      "DataEmissao",
      "DataFechamento",
      "Travado",
      "fkOpPai",
      "LoteFabricante",
      "NomeUsuario",
      "fkOPBotao",
      "fkOPBotaoAntiga",
      "ViaAntiga",
      "fkOPLoop",
      "fkOPLoopAntiga",
      "fkProdutoItem",
      "Quantidade",
      "QtdEmProcesso",
      "Broca",
      "fkLoteEstExt",
      "fkLoteEstInt",
      "EspessuraBotao",
      "DiametroBotao",
      "LoteBotaoTerceiro",
      "QtdFilamentosLoop",
      "EspessuraLoop",
      "ModeloLoop",
      "TamanhoLoop",
      "Partida",
      "ClasseOP",
      "fkPrimeiraOperacao",
      "CalcularEmProcesso",
      "Selecao",
      "QtdEstExt_tmp",
      "Obs",
      "Expiracao",
      "OPVerificada",
      "CriticaLancamento",
      "fkOPMestre",
      "DataUltimoLancamento",
      "IndiceRefracao",
      "IndiceRefracao2",
      "EtiqInternaImpressa",
      "ExportadoSANKHYA",
      "deleted",
      "ts",
      "versao",
      "emProcesso",
      "fkOperacaoEmProcesso",
      "loteTamboreamento",
      "raio",
    ];
  }
}

OrdemProducao.knex(connections.oftalmo);

export type TOrdemProducao = ModelObject<OrdemProducao>;

import { TFieldDef, TOrder, TSelect, TTableDef, TWhere } from "@/types";
import { TConnection } from "../../config/connections";
import { TEtiquetaExterna } from "../etiqueta-externa/etiqueta-externa.type";
import {
  TProdutoItem,
  TProdutoItemSelect,
} from "../produto-item/produto-item.type";
import { TProdutoPlano } from "../produto-plano/produto-plano.type";

export interface TOrdemProducaoPk {
  ordem_producao_id?: number;
}
export interface TOrdemProducao extends TOrdemProducaoPk {
  ChaveAntiga?: string;
  ordem_producao_tipo_id?: number;
  data_emissao?: string;
  data_fechamento?: string;
  travado?: number;
  ordem_producao_pai_id?: number;
  lote_fabricante?: string;
  usuario?: string;
  fkOPBotao?: number;
  fkOPBotaoAntiga?: string;
  ViaAntiga?: number;
  fkOPLoop?: number;
  fkOPLoopAntiga?: string;
  produto_item_id?: number;
  quantidade?: number;
  em_processo?: number;
  Broca?: number;
  esterilizacao_externa_id?: number;
  esterilizacao_interna_id?: number;
  EspessuraBotao?: number;
  DiametroBotao?: number;
  LoteBotaoTerceiro?: string;
  QtdFilamentosLoop?: number;
  EspessuraLoop?: number;
  ModeloLoop?: string;
  TamanhoLoop?: number;
  Partida?: number;
  ClasseOP?: number;
  fkPrimeiraOperacao?: number;
  CalcularEmProcesso?: number;
  Selecao?: number;
  esterilizacao_externa_quantidade?: number;
  Obs?: string;
  Expiracao?: string;
  OPVerificada?: number;
  CriticaLancamento?: string;
  ordem_producao_mestre_id?: number;
  DataUltimoLancamento?: string;
  IndiceRefracao?: number;
  IndiceRefracao2?: number;
  EtiqInternaImpressa?: number;
  ExportadoSANKHYA?: number;
  deleted?: number;
  versao?: number;
  eh_em_processo?: number;
  fkOperacaoEmProcesso?: number;
  tamboreamento_lote?: string;
}

export type TOrdemProducaoFields = keyof Required<TOrdemProducao>;

export type TOrdemProducaoIds = {
  [pk in keyof Required<TOrdemProducaoPk>]: any;
};
export type TOrdemProducaoSelect = TSelect;
export type TOrdemProducaoWhere = TWhere;
export type TOrdemProducaoOrder = TOrder;

export type TOrdemProducaoSchema = () => Promise<TFieldDef[]>;
export type TOrdemProducaoClear = () => Promise<TOrdemProducao>;
export type TOrdemProducaoList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TOrdemProducao[]>;
export type TOrdemProducaoRead = (args: {
  id: TOrdemProducaoIds;
  select?: TSelect;
}) => Promise<TOrdemProducao>;

export type TOrdemProducaoCreate = (args: {
  data: TOrdemProducao;
  select?: TSelect;
}) => Promise<TOrdemProducao>;
export type TOrdemProducaoUpdate = (args: {
  id: TOrdemProducaoIds;
  data: TOrdemProducao;
  select?: TSelect;
}) => Promise<TOrdemProducao>;
export type TOrdemProducaoDel = (args: {
  id: TOrdemProducaoIds;
}) => Promise<number>;

export type TOrdemProducaoProdutoItem = (args: {
  id: TOrdemProducaoIds;
  select?: TProdutoItemSelect;
}) => Promise<TProdutoItem>;
export type TOrdemProducaoEtiquetaExterna = (args: {
  id: TOrdemProducaoIds;
}) => Promise<TEtiquetaExterna[]>;

export type TOrdemProducaoModel = {
  connection: TConnection;
  table: TTableDef;
  query: {
    list: TOrdemProducaoList;
    read: TOrdemProducaoRead;
    controle(args: { id: TOrdemProducaoIds; serie: string }): Promise<string>;
    dataFabricacao(args: { id: TOrdemProducaoIds }): Promise<string>;
    dataValidade(args: { id: TOrdemProducaoIds }): Promise<string>;
    ehControleValido(args: { controle: string }): Promise<boolean>;
    etiquetaExterna: TOrdemProducaoEtiquetaExterna;
    fromControle(args: { controle: string }): Promise<string>;
    produtoItem: TOrdemProducaoProdutoItem;
    produtoPlano(args: {
      id: TOrdemProducaoIds;
      select?: TSelect;
    }): Promise<TProdutoPlano>;
  };
  mutation: {
    create: TOrdemProducaoCreate;
    update: TOrdemProducaoUpdate;
    del: TOrdemProducaoDel;
  };
};

export type TOrdemProducaoRpc = TOrdemProducaoModel;

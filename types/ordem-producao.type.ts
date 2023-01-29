import { TFieldClient, TOrder, TSelect, TWhere } from ".";
import { TEtiquetaExterna } from "./etiqueta-externa.type";
import { TProdutoItem, TProdutoItemSelect } from "./produto-item.type";
import { TProdutoPlano, TProdutoPlanoFields } from "./produto-plano.type";

export type TOrdemProducaoPk = {
  ordem_producao_id?: number;
};
export type TOrdemProducaoCol = {
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
  QtdEstExt_tmp?: number;
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
};
export type TOrdemProducao = TOrdemProducaoPk & TOrdemProducaoCol;

export type TOrdemProducaoFields =
  | keyof Required<TOrdemProducaoPk>
  | keyof Required<TOrdemProducaoCol>;

export type TOrdemProducaoIds = {
  [pk in keyof Required<TOrdemProducaoPk>]: any;
};
export type TOrdemProducaoSelect = TSelect<TOrdemProducaoFields>;
export type TOrdemProducaoWhere = TWhere<TOrdemProducaoFields>;
export type TOrdemProducaoOrder = TOrder<TOrdemProducaoFields>;

export type TOrdemProducaoSchema = () => Promise<TFieldClient[]>;
export type TOrdemProducaoClear = () => Promise<TOrdemProducao>;
export type TOrdemProducaoList = (args: {
  where?: TWhere<TOrdemProducaoFields>[];
  order?: TOrder<TOrdemProducaoFields>[];
  limit?: number;
  select?: TSelect<TOrdemProducaoFields>;
}) => Promise<TOrdemProducao[]>;
export type TOrdemProducaoRead = (args: {
  id: TOrdemProducaoIds;
  select?: TSelect<TOrdemProducaoFields>;
}) => Promise<TOrdemProducao>;

export type TOrdemProducaoCreate = (args: {
  data: TOrdemProducao;
}) => Promise<TOrdemProducao>;
export type TOrdemProducaoUpdate = (args: {
  id: TOrdemProducaoIds;
  data: TOrdemProducao;
}) => Promise<TOrdemProducao>;
export type TOrdemProducaoDel = (args: {
  id: TOrdemProducaoIds;
}) => Promise<number>;

export type TOrdemProducaoRpc = {
  query: {
    schema: TOrdemProducaoSchema;
    clear: TOrdemProducaoClear;
    list: TOrdemProducaoList;
    read: TOrdemProducaoRead;
    produtoItem(args: {
      id: TOrdemProducaoIds;
      select?: TProdutoItemSelect;
    }): Promise<TProdutoItem>;
    produtoPlano(args: {
      id: TOrdemProducaoIds;
      select?: TSelect<TProdutoPlanoFields>;
    }): Promise<TProdutoPlano>;
    // ordemProducaoProduto(args: {
    //   id: TOrdemProducaoIds;
    //   select?: TSelect;
    // }): Promise<TProduto>;
    dataFabricacao(args: { id: TOrdemProducaoIds }): Promise<string>;
    dataValidade(args: { id: TOrdemProducaoIds }): Promise<string>;
    controle(args: { id: TOrdemProducaoIds; serie: string }): Promise<string>;
    fromControle(args: { controle: string }): Promise<string>;
    ehControleValido(args: { controle: string }): Promise<boolean>;
    etiquetaExterna(args: {
      id: TOrdemProducaoIds;
    }): Promise<TEtiquetaExterna[]>;
  };
  mutation: {
    create: TOrdemProducaoCreate;
    update: TOrdemProducaoUpdate;
    del: TOrdemProducaoDel;
  };
};

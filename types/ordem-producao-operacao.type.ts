import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TOrdemProducaoOperacaoPk = {
  ordem_producao_operacao_id?: number;
};
export type TOrdemProducaoOperacaoCol = {
  ordem_producao_id?: number;
  fkOperacaoLP?: number;
  operacao_id?: number;
  empregado_id?: number;
  maquina_id?: string;
  data_hora_inicio?: string;
  data_hora_fim?: string;
  QtdInicial?: number;
  QtdConforme?: number;
  QtdRetrabalho?: number;
  fkOperacaoRetrab?: number;
  Complemento?: string;
  fkOPFilha?: number;
  ViaFilhaAntiga?: number;
  IdPagina?: number;
  OPAntiga?: string;
  ClasseOP?: number;
  EspPriAlca?: string;
  EspSegAlca?: string;
};
export type TOrdemProducaoOperacao =
  | TOrdemProducaoOperacaoPk
  | TOrdemProducaoOperacaoCol;

export type TOrdemProducaoOperacaoFields =
  | keyof Required<TOrdemProducaoOperacaoPk>
  | keyof Required<TOrdemProducaoOperacaoCol>;

export type TOrdemProducaoOperacaoIds = {
  [pk in keyof Required<TOrdemProducaoOperacaoPk>]: any;
};
export type TOrdemProducaoOperacaoSelect =
  TSelect<TOrdemProducaoOperacaoFields>;
export type TOrdemProducaoOperacaoWhere = TWhere<TOrdemProducaoOperacaoFields>;
export type TOrdemProducaoOperacaoOrder = TOrder<TOrdemProducaoOperacaoFields>;

export type TOrdemProducaoOperacaoSchema = () => Promise<TFieldClient[]>;
export type TOrdemProducaoOperacaoClear = () => Promise<TOrdemProducaoOperacao>;
export type TOrdemProducaoOperacaoList = (args: {
  where?: TWhere<TOrdemProducaoOperacaoFields>[];
  order?: TOrder<TOrdemProducaoOperacaoFields>[];
  limit?: number;
  select?: TSelect<TOrdemProducaoOperacaoFields>;
}) => Promise<TOrdemProducaoOperacao[]>;
export type TOrdemProducaoOperacaoRead = (args: {
  id: TOrdemProducaoOperacaoIds;
  select?: TSelect<TOrdemProducaoOperacaoFields>;
}) => Promise<TOrdemProducaoOperacao>;

export type TOrdemProducaoOperacaoCreate = (args: {
  data: TOrdemProducaoOperacao;
}) => Promise<TOrdemProducaoOperacao>;
export type TOrdemProducaoOperacaoUpdate = (args: {
  id: TOrdemProducaoOperacaoIds;
  data: TOrdemProducaoOperacao;
}) => Promise<TOrdemProducaoOperacao>;
export type TOrdemProducaoOperacaoDel = (args: {
  id: TOrdemProducaoOperacaoIds;
}) => Promise<number>;

export type TOrdemProducaoOperacaoRpc = {
  query: {
    ordemProducaoOperacaoSchema: TOrdemProducaoOperacaoSchema;
    clear: TOrdemProducaoOperacaoClear;
    list: TOrdemProducaoOperacaoList;
    read: TOrdemProducaoOperacaoRead;
  };
  mutation: {
    ordemProducaoOperacaoCreate: TOrdemProducaoOperacaoCreate;
    update: TOrdemProducaoOperacaoUpdate;
    del: TOrdemProducaoOperacaoDel;
  };
};

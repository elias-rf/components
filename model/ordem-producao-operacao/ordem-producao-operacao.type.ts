import { TFieldDef, TOrder, TSelect, TWhere } from "../../types";
//#region import
//#endregion
export interface TOrdemProducaoOperacaoPk {
  ordem_producao_operacao_id?: number;
}
export interface TOrdemProducaoOperacao extends TOrdemProducaoOperacaoPk {
  ordem_producao_id?: number;
  fkOperacaoLP?: number;
  operacao_id?: number;
  empregado_id?: number;
  maquina_id?: string;
  data_hora_inicio?: string;
  data_hora_fim?: string;
  quantidade_inicial?: number;
  quantidade_conforme?: number;
  quantidade_retrabalho?: number;
  operacao_id_retrabalho?: number;
  complemento?: string;
  ordem_producao_id_filha?: number;
  ViaFilhaAntiga?: number;
  IdPagina?: number;
  OPAntiga?: string;
  classe?: number;
  EspPriAlca?: string;
  EspSegAlca?: string;
}

export type TOrdemProducaoOperacaoFields =
  keyof Required<TOrdemProducaoOperacao>;

export type TOrdemProducaoOperacaoIds = {
  [pk in keyof Required<TOrdemProducaoOperacaoPk>]: any;
};
export type TOrdemProducaoOperacaoSelect =
  TSelect<TOrdemProducaoOperacaoFields>;
export type TOrdemProducaoOperacaoWhere = TWhere<TOrdemProducaoOperacaoFields>;
export type TOrdemProducaoOperacaoOrder = TOrder<TOrdemProducaoOperacaoFields>;

export type TOrdemProducaoOperacaoSchema = () => Promise<TFieldDef[]>;
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
  select?: TSelect<TOrdemProducaoOperacaoFields>;
}) => Promise<TOrdemProducaoOperacao>;
export type TOrdemProducaoOperacaoUpdate = (args: {
  id: TOrdemProducaoOperacaoIds;
  data: TOrdemProducaoOperacao;
  select?: TSelect<TOrdemProducaoOperacaoFields>;
}) => Promise<TOrdemProducaoOperacao>;
export type TOrdemProducaoOperacaoDel = (args: {
  id: TOrdemProducaoOperacaoIds;
}) => Promise<number>;

//#region def
export type TOrdemProducaoOperacaoDiarioArgs = {
  operacao: string;
  inicio: string;
  fim: string;
};
export type TOrdemProducaoOperacaoDiarioResp = {
  dia: string;
  diaSemana: string;
  quantidade: number;
}[];
export type TOrdemProducaoOperacaoMensalArgs = {
  operacao: string;
  mes: string;
};
export type TOrdemProducaoOperacaoMensalResp = {
  mes: string;
  quantidade: number;
}[];
export type TOrdemProducaoOperacaoModeloArgs = {
  data: string;
  operacao: string;
  produto: string;
};
export type TOrdemProducaoOperacaoModeloResp = {
  modelo: string;
  quantidade: number;
}[];
export type TOrdemProducaoOperacaoProdutoArgs = {
  operacao: string;
  data: string;
};
export type TOrdemProducaoOperacaoProdutoResp = {
  produto: string;
  quantidade: number;
}[];
export type TOrdemProducaoOperacaoTurnoArgs = {
  operacao: string;
  data: string;
};
export type TOrdemProducaoOperacaoTurnoResp = {
  turno: string;
  quantidade: number;
}[];
export type TOrdemProducaoOperacaoDiario = (
  args: TOrdemProducaoOperacaoDiarioArgs
) => Promise<TOrdemProducaoOperacaoDiarioResp>;
export type TOrdemProducaoOperacaoMensal = (
  args: TOrdemProducaoOperacaoMensalArgs
) => Promise<TOrdemProducaoOperacaoMensalResp>;
export type TOrdemProducaoOperacaoModelo = (
  args: TOrdemProducaoOperacaoModeloArgs
) => Promise<TOrdemProducaoOperacaoModeloResp>;
export type TOrdemProducaoOperacaoProduto = (
  args: TOrdemProducaoOperacaoProdutoArgs
) => Promise<TOrdemProducaoOperacaoProdutoResp>;
export type TOrdemProducaoOperacaoTurno = (
  args: TOrdemProducaoOperacaoTurnoArgs
) => Promise<TOrdemProducaoOperacaoTurnoResp>;

//#endregion

export type TOrdemProducaoOperacaoCrud = {
  query: {
    schema: TOrdemProducaoOperacaoSchema;
    clear: TOrdemProducaoOperacaoClear;
    list: TOrdemProducaoOperacaoList;
    read: TOrdemProducaoOperacaoRead;
  };
  mutation: {
    create: TOrdemProducaoOperacaoCreate;
    update: TOrdemProducaoOperacaoUpdate;
    del: TOrdemProducaoOperacaoDel;
  };
};

export type TOrdemProducaoOperacaoModel = TOrdemProducaoOperacaoCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type

  query: {
    diario: TOrdemProducaoOperacaoDiario;
    diarioSchema(): Promise<TFieldDef[]>;

    mensal: TOrdemProducaoOperacaoMensal;
    mensalSchema(): Promise<TFieldDef[]>;

    modelo: TOrdemProducaoOperacaoModelo;
    modeloSchema(): Promise<TFieldDef[]>;

    produto: TOrdemProducaoOperacaoProduto;
    produtoSchema(): Promise<TFieldDef[]>;

    turno: TOrdemProducaoOperacaoTurno;
    turnoSchema(): Promise<TFieldDef[]>;
  };

  //#endregion
};

export type TOrdemProducaoOperacaoRpc = TOrdemProducaoOperacaoModel;

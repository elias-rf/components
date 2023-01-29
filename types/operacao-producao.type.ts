import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TOperacaoProducaoPk = {
  tOperacaoDeProducao_id?: number;
};
export type TOperacaoProducaoCol = {
  Operacao?: string;
  EhRetrabalho?: number;
  Especial?: number;
  Descricao?: string;
  Amostragem?: number;
};
export type TOperacaoProducao = TOperacaoProducaoPk | TOperacaoProducaoCol;

export type TOperacaoProducaoFields =
  | keyof Required<TOperacaoProducaoPk>
  | keyof Required<TOperacaoProducaoCol>;

export type TOperacaoProducaoIds = {
  [pk in keyof Required<TOperacaoProducaoPk>]: any;
};
export type TOperacaoProducaoSelect = TSelect<TOperacaoProducaoFields>;
export type TOperacaoProducaoWhere = TWhere<TOperacaoProducaoFields>;
export type TOperacaoProducaoOrder = TOrder<TOperacaoProducaoFields>;

export type TOperacaoProducaoSchema = () => Promise<TFieldClient[]>;
export type TOperacaoProducaoClear = () => Promise<TOperacaoProducao>;
export type TOperacaoProducaoList = (args: {
  where?: TWhere<TOperacaoProducaoFields>[];
  order?: TOrder<TOperacaoProducaoFields>[];
  limit?: number;
  select?: TSelect<TOperacaoProducaoFields>;
}) => Promise<TOperacaoProducao[]>;
export type TOperacaoProducaoRead = (args: {
  id: TOperacaoProducaoIds;
  select?: TSelect<TOperacaoProducaoFields>;
}) => Promise<TOperacaoProducao>;

export type TOperacaoProducaoCreate = (args: {
  data: TOperacaoProducao;
}) => Promise<TOperacaoProducao>;
export type TOperacaoProducaoUpdate = (args: {
  id: TOperacaoProducaoIds;
  data: TOperacaoProducao;
}) => Promise<TOperacaoProducao>;
export type TOperacaoProducaoDel = (args: {
  id: TOperacaoProducaoIds;
}) => Promise<number>;

export type TOperacaoProducaoRpc = {
  query: {
    schema: TOperacaoProducaoSchema;
    clear: TOperacaoProducaoClear;
    list: TOperacaoProducaoList;
    read: TOperacaoProducaoRead;
    diario(args: {
      operacao: string;
      inicio: string;
      fim: string;
    }): Promise<{ dia: string; diaSemana: string; quantidade: number }[]>;
    mensal(args: {
      operacao: string;
      mes: string;
    }): Promise<{ mes: string; quantidade: number }[]>;
    modelo(args: {
      data: string;
      operacao: string;
      produto: string;
    }): Promise<{ modelo: string; quantidade: number }[]>;
    produto(args: {
      operacao: string;
      data: string;
    }): Promise<{ produto: string; quantidade: number }[]>;
    turno(args: {
      operacao: string;
      data: string;
    }): Promise<{ turno: string; quantidade: number }[]>;
    turnoSchema(): Promise<TFieldClient[]>;
    produtoSchema(): Promise<TFieldClient[]>;
    mensalSchema(): Promise<TFieldClient[]>;
    diarioSchema(): Promise<TFieldClient[]>;
  };
  mutation: {
    create: TOperacaoProducaoCreate;
    update: TOperacaoProducaoUpdate;
    del: TOperacaoProducaoDel;
  };
};

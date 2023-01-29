import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TMaquinaPk = {
  maquina_id?: number;
};
export type TMaquinaCol = {
  nome?: number;
  serie?: number;
  divisao_id?: number;
  setor_id?: number;
  descricao?: number;
  frequencia?: string;
  is_ativo?: boolean;
};
export type TMaquina = TMaquinaPk | TMaquinaCol;

export type TMaquinaFields =
  | keyof Required<TMaquinaPk>
  | keyof Required<TMaquinaCol>;

export type TMaquinaIds = {
  [pk in keyof Required<TMaquinaPk>]: any;
};
export type TMaquinaSelect = TSelect<TMaquinaFields>;
export type TMaquinaWhere = TWhere<TMaquinaFields>;
export type TMaquinaOrder = TOrder<TMaquinaFields>;

export type TMaquinaSchema = () => Promise<TFieldClient[]>;
export type TMaquinaClear = () => Promise<TMaquina>;
export type TMaquinaList = (args: {
  where?: TWhere<TMaquinaFields>[];
  order?: TOrder<TMaquinaFields>[];
  limit?: number;
  select?: TSelect<TMaquinaFields>;
}) => Promise<TMaquina[]>;
export type TMaquinaRead = (args: {
  id: TMaquinaIds;
  select?: TSelect<TMaquinaFields>;
}) => Promise<TMaquina>;

export type TMaquinaCreate = (args: { data: TMaquina }) => Promise<TMaquina>;
export type TMaquinaUpdate = (args: {
  id: TMaquinaIds;
  data: TMaquina;
}) => Promise<TMaquina>;
export type TMaquinaDel = (args: { id: TMaquinaIds }) => Promise<number>;

export type TMaquinaRpc = {
  query: {
    maquinaSchema: TMaquinaSchema;
    clear: TMaquinaClear;
    list: TMaquinaList;
    read: TMaquinaRead;
  };
  mutation: {
    maquinaCreate: TMaquinaCreate;
    update: TMaquinaUpdate;
    del: TMaquinaDel;
  };
};

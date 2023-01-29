import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TCidadePk = {
  nome_cidade?: number;
  uf_old?: number;
};
export type TCidadeCol = {
  cidade_id?: number;
  uf_id?: number;
  uf?: number;
};
export type TCidade = TCidadePk | TCidadeCol;

export type TCidadeFields =
  | keyof Required<TCidadePk>
  | keyof Required<TCidadeCol>;

export type TCidadeIds = {
  [pk in keyof Required<TCidadePk>]: any;
};
export type TCidadeSelect = TSelect<TCidadeFields>;
export type TCidadeWhere = TWhere<TCidadeFields>;
export type TCidadeOrder = TOrder<TCidadeFields>;

export type TCidadeSchema = () => Promise<TFieldClient[]>;
export type TCidadeClear = () => Promise<TCidade>;
export type TCidadeList = (args: {
  where?: TWhere<TCidadeFields>[];
  order?: TOrder<TCidadeFields>[];
  limit?: number;
  select?: TSelect<TCidadeFields>;
}) => Promise<TCidade[]>;
export type TCidadeRead = (args: {
  id: TCidadeIds;
  select?: TSelect<TCidadeFields>;
}) => Promise<TCidade>;

export type TCidadeCreate = (args: {
  data: TCidade;
  select?: TSelect<TCidadeFields>;
}) => Promise<TCidade>;
export type TCidadeUpdate = (args: {
  id: TCidadeIds;
  data: TCidade;
  select?: TSelect<TCidadeFields>;
}) => Promise<TCidade>;
export type TCidadeDel = (args: { id: TCidadeIds }) => Promise<number>;

export type TCidadeRpc = {
  query: {
    schema: TCidadeSchema;
    clear: TCidadeClear;
    list: TCidadeList;
    read: TCidadeRead;
  };
  mutation: {
    create: TCidadeCreate;
    update: TCidadeUpdate;
    del: TCidadeDel;
  };
};

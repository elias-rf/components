import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TEstoquePk = {
  filial_id?: number;
  produto_plano_id?: string;
};
export type TEstoqueCol = {
  estoque?: number;
};
export type TEstoque = TEstoquePk | TEstoqueCol;

export type TEstoqueFields =
  | keyof Required<TEstoquePk>
  | keyof Required<TEstoqueCol>;

export type TEstoqueIds = {
  [pk in keyof Required<TEstoquePk>]: any;
};
export type TEstoqueSelect = TSelect<TEstoqueFields>;
export type TEstoqueWhere = TWhere<TEstoqueFields>;
export type TEstoqueOrder = TOrder<TEstoqueFields>;

export type TEstoqueSchema = () => Promise<TFieldClient[]>;
export type TEstoqueClear = () => Promise<TEstoque>;
export type TEstoqueList = (args: {
  where?: TWhere<TEstoqueFields>[];
  order?: TOrder<TEstoqueFields>[];
  limit?: number;
  select?: TSelect<TEstoqueFields>;
}) => Promise<TEstoque[]>;
export type TEstoqueRead = (args: {
  id: TEstoqueIds;
  select?: TSelect<TEstoqueFields>;
}) => Promise<TEstoque>;

export type TEstoqueCreate = (args: { data: TEstoque }) => Promise<TEstoque>;
export type TEstoqueUpdate = (args: {
  id: TEstoqueIds;
  data: TEstoque;
}) => Promise<TEstoque>;
export type TEstoqueDel = (args: { id: TEstoqueIds }) => Promise<number>;

export type TEstoqueRpc = {
  query: {
    schema: TEstoqueSchema;
    clear: TEstoqueClear;
    list: TEstoqueList;
    read: TEstoqueRead;
  };
  mutation: {
    create: TEstoqueCreate;
    update: TEstoqueUpdate;
    del: TEstoqueDel;
    increment(args: { id: TEstoqueIds; quantidade: number }): Promise<any>;
  };
};

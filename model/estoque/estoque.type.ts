import {
  TConnection,
  TFieldDef,
  TOrder,
  TSelect,
  TTableDef,
  TWhere,
} from "../../types";

export interface TEstoquePk {
  filial_id?: number;
  produto_plano_id?: string;
}
export interface TEstoque extends TEstoquePk {
  estoque?: number;
}

export type TEstoqueFields = keyof Required<TEstoque>;

export type TEstoqueIds = {
  [pk in keyof Required<TEstoquePk>]: any;
};
export type TEstoqueSelect = TSelect<TEstoqueFields>;
export type TEstoqueWhere = TWhere<TEstoqueFields>;
export type TEstoqueOrder = TOrder<TEstoqueFields>;

export type TEstoqueSchema = () => Promise<TFieldDef[]>;
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

export type TEstoqueCreate = (args: {
  data: TEstoque;
  select?: TSelect<TEstoqueFields>;
}) => Promise<TEstoque>;
export type TEstoqueUpdate = (args: {
  id: TEstoqueIds;
  data: TEstoque;
  select?: TSelect<TEstoqueFields>;
}) => Promise<TEstoque>;
export type TEstoqueDel = (args: { id: TEstoqueIds }) => Promise<number>;

export type TEstoqueIncrement = (args: {
  id: TEstoqueIds;
  quantidade: number;
}) => Promise<any>;

export type TEstoqueModel = {
  connection: TConnection;
  table: TTableDef;
  query: {
    list: TEstoqueList;
    read: TEstoqueRead;
  };
  mutation: {
    create: TEstoqueCreate;
    update: TEstoqueUpdate;
    del: TEstoqueDel;
    increment: TEstoqueIncrement;
  };
};

export type TEstoqueRpc = TEstoqueModel;

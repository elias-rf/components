import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TNfEntradaControlePk = {
  filial_id?: number;
  nota_id?: number;
  serie_id?: string;
  modelo_id?: string;
};
export type TNfEntradaControleCol = {
  fornecedor_id?: number;
  produto_id?: string;
  controle?: string;
  quantidade?: number;
};
export type TNfEntradaControle = TNfEntradaControlePk | TNfEntradaControleCol;

export type TNfEntradaControleFields =
  | keyof Required<TNfEntradaControlePk>
  | keyof Required<TNfEntradaControleCol>;

export type TNfEntradaControleIds = {
  [pk in keyof Required<TNfEntradaControlePk>]: any;
};
export type TNfEntradaControleSelect = TSelect<TNfEntradaControleFields>;
export type TNfEntradaControleWhere = TWhere<TNfEntradaControleFields>;
export type TNfEntradaControleOrder = TOrder<TNfEntradaControleFields>;

export type TNfEntradaControleSchema = () => Promise<TFieldClient[]>;
export type TNfEntradaControleClear = () => Promise<TNfEntradaControle>;
export type TNfEntradaControleList = (args: {
  where?: TWhere<TNfEntradaControleFields>[];
  order?: TOrder<TNfEntradaControleFields>[];
  limit?: number;
  select?: TSelect<TNfEntradaControleFields>;
}) => Promise<TNfEntradaControle[]>;
export type TNfEntradaControleRead = (args: {
  id: TNfEntradaControleIds;
  select?: TSelect<TNfEntradaControleFields>;
}) => Promise<TNfEntradaControle>;

export type TNfEntradaControleCreate = (args: {
  data: TNfEntradaControle;
}) => Promise<TNfEntradaControle>;
export type TNfEntradaControleUpdate = (args: {
  id: TNfEntradaControleIds;
  data: TNfEntradaControle;
}) => Promise<TNfEntradaControle>;
export type TNfEntradaControleDel = (args: {
  id: TNfEntradaControleIds;
}) => Promise<number>;

export type TNfEntradaControleRpc = {
  query: {
    schema: TNfEntradaControleSchema;
    clear: TNfEntradaControleClear;
    list: TNfEntradaControleList;
    read: TNfEntradaControleRead;
  };
  mutation: {
    create: TNfEntradaControleCreate;
    update: TNfEntradaControleUpdate;
    del: TNfEntradaControleDel;
  };
};

import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TNfCfopPk = {
  cfop?: number;
};
export type TNfCfopCol = {
  descricao?: string;
  estatistica?: string;
  estoque?: string;
};
export type TNfCfop = TNfCfopPk | TNfCfopCol;

export type TNfCfopFields =
  | keyof Required<TNfCfopPk>
  | keyof Required<TNfCfopCol>;

export type TNfCfopIds = {
  [pk in keyof Required<TNfCfopPk>]: any;
};
export type TNfCfopSelect = TSelect<TNfCfopFields>;
export type TNfCfopWhere = TWhere<TNfCfopFields>;
export type TNfCfopOrder = TOrder<TNfCfopFields>;

export type TNfCfopSchema = () => Promise<TFieldClient[]>;
export type TNfCfopClear = () => Promise<TNfCfop>;
export type TNfCfopList = (args: {
  where?: TWhere<TNfCfopFields>[];
  order?: TOrder<TNfCfopFields>[];
  limit?: number;
  select?: TSelect<TNfCfopFields>;
}) => Promise<TNfCfop[]>;
export type TNfCfopRead = (args: {
  id: TNfCfopIds;
  select?: TSelect<TNfCfopFields>;
}) => Promise<TNfCfop>;

export type TNfCfopCreate = (args: { data: TNfCfop }) => Promise<TNfCfop>;
export type TNfCfopUpdate = (args: {
  id: TNfCfopIds;
  data: TNfCfop;
}) => Promise<TNfCfop>;
export type TNfCfopDel = (args: { id: TNfCfopIds }) => Promise<number>;

export type TNfCfopRpc = {
  query: {
    nfCfopSchema: TNfCfopSchema;
    clear: TNfCfopClear;
    list: TNfCfopList;
    read: TNfCfopRead;
  };
  mutation: {
    nfCfopCreate: TNfCfopCreate;
    update: TNfCfopUpdate;
    del: TNfCfopDel;
  };
};

import { TFieldClient, TOrder, TSelect, TWhere } from ".";
import { TProdutoPlano, TProdutoPlanoFields } from "./produto-plano.type";

export type TProdutoItemPk = {
  produto_item_id?: number;
};
export type TProdutoItemCol = {
  nome_produto_item?: string;
  produto_id?: number;
  produto_plano_id?: string;
  fora_linha?: number;
  grupo_credito?: string;
};
export type TProdutoItem = TProdutoItemPk | TProdutoItemCol;

export type TProdutoItemFields =
  | keyof Required<TProdutoItemPk>
  | keyof Required<TProdutoItemCol>;

export type TProdutoItemIds = {
  [pk in keyof Required<TProdutoItemPk>]: any;
};
export type TProdutoItemSelect = TSelect<TProdutoItemFields>;
export type TProdutoItemWhere = TWhere<TProdutoItemFields>;
export type TProdutoItemOrder = TOrder<TProdutoItemFields>;

export type TProdutoItemSchema = () => Promise<TFieldClient[]>;
export type TProdutoItemClear = () => Promise<TProdutoItem>;
export type TProdutoItemList = (args: {
  where?: TWhere<TProdutoItemFields>[];
  order?: TOrder<TProdutoItemFields>[];
  limit?: number;
  select?: TSelect<TProdutoItemFields>;
}) => Promise<TProdutoItem[]>;
export type TProdutoItemRead = (args: {
  id: TProdutoItemIds;
  select?: TSelect<TProdutoItemFields>;
}) => Promise<TProdutoItem>;

export type TProdutoItemCreate = (args: {
  data: TProdutoItem;
}) => Promise<TProdutoItem>;
export type TProdutoItemUpdate = (args: {
  id: TProdutoItemIds;
  data: TProdutoItem;
}) => Promise<TProdutoItem>;
export type TProdutoItemDel = (args: {
  id: TProdutoItemIds;
}) => Promise<number>;

export type TProdutoItemRpc = {
  query: {
    schema: TProdutoItemSchema;
    clear: TProdutoItemClear;
    list: TProdutoItemList;
    read: TProdutoItemRead;
    plano(args: {
      id: TProdutoItemIds;
      select?: TSelect<TProdutoPlanoFields>;
    }): Promise<TProdutoPlano>;
  };
  mutation: {
    create: TProdutoItemCreate;
    update: TProdutoItemUpdate;
    del: TProdutoItemDel;
  };
};

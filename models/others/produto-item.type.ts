import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";
//#region import
import { TProdutoPlano } from "./produto-plano.type";
//#endregion
export interface TProdutoItemPk {
  produto_item_id?: number;
}
export interface TProdutoItem extends TProdutoItemPk {
  nome_produto_item?: string;
  produto_id?: number;
  produto_plano_id?: string;
  fora_linha?: number;
  grupo_credito?: string;
}

export type TProdutoItemFields = keyof Required<TProdutoItem>;

export type TProdutoItemIds = {
  [pk in keyof Required<TProdutoItemPk>]: any;
};
export type TProdutoItemSelect = TSelect;
export type TProdutoItemWhere = TWhere;
export type TProdutoItemOrder = TOrder;

export type TProdutoItemSchema = () => Promise<TFieldDef[]>;
export type TProdutoItemClear = () => Promise<TProdutoItem>;
export type TProdutoItemList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TProdutoItem[]>;
export type TProdutoItemRead = (args: {
  id: TProdutoItemIds;
  select?: TSelect;
}) => Promise<TProdutoItem>;

export type TProdutoItemCreate = (args: {
  data: TProdutoItem;
  select?: TSelect;
}) => Promise<TProdutoItem>;
export type TProdutoItemUpdate = (args: {
  id: TProdutoItemIds;
  data: TProdutoItem;
  select?: TSelect;
}) => Promise<TProdutoItem>;
export type TProdutoItemDel = (args: {
  id: TProdutoItemIds;
}) => Promise<number>;

//#region def
export type TProdutoItemProdutoPlano = (args: {
  id: TProdutoItemIds;
  select?: TSelect;
}) => Promise<TProdutoPlano>;
//#endregion

export type TProdutoItemModel = {
  query: {
    list: TProdutoItemList;
    read: TProdutoItemRead;
    produtoPlano: TProdutoItemProdutoPlano;
  };
  mutation: {
    create: TProdutoItemCreate;
    update: TProdutoItemUpdate;
    del: TProdutoItemDel;
  };
};

export type TProdutoItemRpc = TProdutoItemModel;

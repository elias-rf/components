import { TFieldDef, TOrder, TSelect, TTableDef, TWhere } from "@/types";
import { TConnection } from "../../config/connections";

export interface TSysResourcePk {
  agenda_telefone_id?: number;
}
export interface TSysResource extends TSysResourcePk {
  nome?: string;
  setor?: string;
  email?: string;
}

export type TSysResourceFields = keyof Required<TSysResource>;

export type TSysResourceIds = {
  [pk in keyof Required<TSysResourcePk>]: any;
};
export type TSysResourceSelect = TSelect;
export type TSysResourceWhere = TWhere;
export type TSysResourceOrder = TOrder;

export type TSysResourceSchema = () => Promise<TFieldDef[]>;
export type TSysResourceClear = () => Promise<TSysResource>;
export type TSysResourceCount = (args: {
  where?: TWhere[];
  count?: TSelect;
}) => Promise<number>;
export type TSysResourceList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TSysResource[]>;
export type TSysResourceRead = (args: {
  id: TSysResourceIds;
  select?: TSelect;
}) => Promise<TSysResource>;

export type TSysResourceCreate = (args: {
  data: TSysResource;
  select?: TSelect;
}) => Promise<TSysResource>;
export type TSysResourceUpdate = (args: {
  id: TSysResourceIds;
  data: TSysResource;
  select?: TSelect;
}) => Promise<TSysResource>;
export type TSysResourceDel = (args: {
  id: TSysResourceIds;
}) => Promise<number>;

export type TSysResourceModel = {
  connection: TConnection;
  table: TTableDef;
  query: {
    list: TSysResourceList;
    read: TSysResourceRead;
  };
  mutation: {
    create: TSysResourceCreate;
    update: TSysResourceUpdate;
    del: TSysResourceDel;
  };
};

export type TSysResourceRpc = TSysResourceModel;

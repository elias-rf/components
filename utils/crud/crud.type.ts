import { TConnection } from "@mono/models/connections";
import {
  TFieldDef,
  TGenericObject,
  TListArgs,
  TOrder,
  TReadArgs,
  TSelect,
  TWhere,
} from "@mono/types";

export type TCrudPk = {
  [fld: string]: any;
};

type TCrudCol = {
  [fld: string]: any;
};

export type TCrud = TCrudPk & TCrudCol;

export type TCrudFields = keyof Required<TCrudPk> | keyof Required<TCrudCol>;

export type TCrudIds = {
  [pk in keyof Required<TCrudPk>]: any;
};
export type TCrudSelect = TSelect<TCrudFields>;
export type TCrudWhere = TWhere<TCrudFields>;
export type TCrudOrder = TOrder<TCrudFields>;

export type TCrudSchema = () => Promise<TFieldDef[]>;
export type TCrudClear = () => Promise<Record<string, any>>;
export type TCrudList = (args: TListArgs) => Promise<TCrud[]>;
export type TCrudRead = (args: TReadArgs) => Promise<TCrud>;

export type TCrudCreate = (args: { data: TCrud }) => Promise<TCrud>;
export type TCrudUpdate = (args: {
  id: TCrudIds;
  data: TCrud;
}) => Promise<TCrud>;
export type TCrudDel = (args: { id: TCrudIds }) => Promise<number>;
export type TCrudCount = (args: {
  where?: TWhere[];
  count?: TGenericObject;
  select?: TSelect;
}) => Promise<{ [x: string]: string | number | undefined }[]>;
export type TCrudIncrement = (args: {
  where?: TWhere[];
  increment?: TGenericObject;
  select?: TSelect;
}) => Promise<Record<string, any>>;

export type TCrudNameList = () => string[];

export type TCrudRpc = {
  query: {
    schema: TCrudSchema;
    clear: TCrudClear;
    count: TCrudCount;
    list: TCrudList;
    read: TCrudRead;
  };
  mutation: {
    increment: TCrudIncrement;
    create: TCrudCreate;
    update: TCrudUpdate;
    del: TCrudDel;
  };
  connection: TConnection;
};
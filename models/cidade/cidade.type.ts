import { TFieldDef, TOrder, TSelect, TWhere } from "@mono/types";
//#region import
//#endregion
export interface TCidadePk {
  nome_cidade?: string;
  uf_old?: string;
}
export interface TCidade extends TCidadePk {
  cidade_id?: string;
  uf_id?: number;
  uf?: string;
}

export type TCidadeFields = keyof Required<TCidade>;

export type TCidadeIds = {
  [pk in keyof Required<TCidadePk>]: any;
};
export type TCidadeSelect = TSelect<TCidadeFields>;
export type TCidadeWhere = TWhere<TCidadeFields>;
export type TCidadeOrder = TOrder<TCidadeFields>;

export type TCidadeSchema = () => Promise<TFieldDef[]>;
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

//#region def
//#endregion

export type TCidadeCrud = {
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

export type TCidadeModel = TCidadeCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TCidadeRpc = TCidadeModel;

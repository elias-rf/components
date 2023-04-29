import { TFieldDef, TOrder, TSelect, TWhere } from "@mono/types";
//#region import
//#endregion
export interface TGroupSubjectPk {
  group_id?: string;
  subject_id?: string;
}

export type TGroupSubjectFields = keyof Required<TGroupSubject>;

export type TGroupSubjectIds = {
  [pk in keyof Required<TGroupSubjectPk>]: any;
};
export type TGroupSubjectSelect = TSelect<TGroupSubjectFields>;
export type TGroupSubjectWhere = TWhere<TGroupSubjectFields>;
export type TGroupSubjectOrder = TOrder<TGroupSubjectFields>;

export type TGroupSubjectSchema = () => Promise<TFieldDef[]>;
export type TGroupSubjectClear = () => Promise<TGroupSubject>;
export type TGroupSubjectList = (args: {
  where?: TWhere<TGroupSubjectFields>[];
  order?: TOrder<TGroupSubjectFields>[];
  limit?: number;
  select?: TSelect<TGroupSubjectFields>;
}) => Promise<TGroupSubject[]>;
export type TGroupSubjectRead = (args: {
  id: TGroupSubjectIds;
  select?: TSelect<TGroupSubjectFields>;
}) => Promise<TGroupSubject>;

export type TGroupSubjectCreate = (args: {
  data: TGroupSubject;
  select?: TSelect<TGroupSubjectFields>;
}) => Promise<TGroupSubject>;
export type TGroupSubjectUpdate = (args: {
  id: TGroupSubjectIds;
  data: TGroupSubject;
  select?: TSelect<TGroupSubjectFields>;
}) => Promise<TGroupSubject>;
export type TGroupSubjectDel = (args: {
  id: TGroupSubjectIds;
}) => Promise<number>;

//#region def
export type TGroupSubject = TGroupSubjectPk;
export type TGroupSubjectCan = (args: {
  id: TGroupSubjectIds;
}) => Promise<boolean>;
//#endregion

export type TGroupSubjectCrud = {
  query: {
    schema: TGroupSubjectSchema;
    clear: TGroupSubjectClear;
    list: TGroupSubjectList;
    read: TGroupSubjectRead;
  };
  mutation: {
    create: TGroupSubjectCreate;
    update: TGroupSubjectUpdate;
    del: TGroupSubjectDel;
  };
};

export type TGroupSubjectModel = TGroupSubjectCrud & {
  //#region query

  //#endregion
  //#region mutation
  //#endregion
  //#region type
  query: { can: TGroupSubjectCan };
  //#endregion
};

export type TGroupSubjectRpc = TGroupSubjectModel;

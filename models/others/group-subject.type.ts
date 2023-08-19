import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";

export interface TGroupSubjectPk {
  group_id?: string;
  subject_id?: string;
}

export type TGroupSubject = TGroupSubjectPk;

export type TGroupSubjectFields = keyof Required<TGroupSubject>;

export type TGroupSubjectIds = {
  [pk in keyof Required<TGroupSubjectPk>]: any;
};
export type TGroupSubjectSelect = TSelect;
export type TGroupSubjectWhere = TWhere;
export type TGroupSubjectOrder = TOrder;

export type TGroupSubjectSchema = () => Promise<TFieldDef[]>;
export type TGroupSubjectClear = () => Promise<TGroupSubject>;
export type TGroupSubjectList = (args: {
  where?: TWhere[];
  order?: TOrder[];
  limit?: number;
  select?: TSelect;
}) => Promise<TGroupSubject[]>;
export type TGroupSubjectRead = (args: {
  id: TGroupSubjectIds;
  select?: TSelect;
}) => Promise<TGroupSubject>;

export type TGroupSubjectCreate = (args: {
  data: TGroupSubject;
  select?: TSelect;
}) => Promise<TGroupSubject>;
export type TGroupSubjectUpdate = (args: {
  id: TGroupSubjectIds;
  data: TGroupSubject;
  select?: TSelect;
}) => Promise<TGroupSubject>;
export type TGroupSubjectDel = (args: {
  id: TGroupSubjectIds;
}) => Promise<number>;

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
  query: { can: TGroupSubjectCan };
};

export type TGroupSubjectRpc = TGroupSubjectModel;

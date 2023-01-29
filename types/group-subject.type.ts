import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TGroupSubjectPk = {
  group_id?: string;
  subject_id?: string;
};

export type TGroupSubject = TGroupSubjectPk;

export type TGroupSubjectFields = keyof Required<TGroupSubjectPk>;

export type TGroupSubjectIds = {
  [pk in keyof Required<TGroupSubjectPk>]: any;
};
export type TGroupSubjectSelect = TSelect<TGroupSubjectFields>;
export type TGroupSubjectWhere = TWhere<TGroupSubjectFields>;
export type TGroupSubjectOrder = TOrder<TGroupSubjectFields>;

export type TGroupSubjectSchema = () => Promise<TFieldClient[]>;
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
}) => Promise<TGroupSubject>;
export type TGroupSubjectUpdate = (args: {
  id: TGroupSubjectIds;
  data: TGroupSubject;
}) => Promise<TGroupSubject>;
export type TGroupSubjectDel = (args: {
  id: TGroupSubjectIds;
}) => Promise<number>;

export type TGroupSubjectRpc = {
  query: {
    schema: TGroupSubjectSchema;
    clear: TGroupSubjectClear;
    list: TGroupSubjectList;
    read: TGroupSubjectRead;
    can: (args: { id: TGroupSubjectIds }) => Promise<boolean>;
  };
  mutation: {
    create: TGroupSubjectCreate;
    update: TGroupSubjectUpdate;
    del: TGroupSubjectDel;
  };
};

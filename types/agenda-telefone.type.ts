import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TAgendaTelefonePk = {
  agenda_telefone_id?: number;
};

type TAgendaTelefoneCol = {
  nome?: string;
  setor?: string;
  email?: string;
};

export type TAgendaTelefone = TAgendaTelefonePk & TAgendaTelefoneCol;

export type TAgendaTelefoneFields =
  | keyof Required<TAgendaTelefonePk>
  | keyof Required<TAgendaTelefoneCol>;

export type TAgendaTelefoneIds = {
  [pk in keyof Required<TAgendaTelefonePk>]: any;
};
export type TAgendaTelefoneSelect = TSelect<TAgendaTelefoneFields>;
export type TAgendaTelefoneWhere = TWhere<TAgendaTelefoneFields>;
export type TAgendaTelefoneOrder = TOrder<TAgendaTelefoneFields>;

export type TAgendaTelefoneSchema = () => Promise<TFieldClient[]>;
export type TAgendaTelefoneClear = () => Promise<TAgendaTelefone>;
export type TAgendaTelefoneList = (args: {
  where?: TWhere<TAgendaTelefoneFields>[];
  order?: TOrder<TAgendaTelefoneFields>[];
  limit?: number;
  select?: TSelect<TAgendaTelefoneFields>;
}) => Promise<TAgendaTelefone[]>;
export type TAgendaTelefoneRead = (args: {
  id: TAgendaTelefoneIds;
  select?: TSelect<TAgendaTelefoneFields>;
}) => Promise<TAgendaTelefone>;

export type TAgendaTelefoneCreate = (args: {
  data: TAgendaTelefone;
}) => Promise<TAgendaTelefone>;
export type TAgendaTelefoneUpdate = (args: {
  id: TAgendaTelefoneIds;
  data: TAgendaTelefone;
}) => Promise<TAgendaTelefone>;
export type TAgendaTelefoneDel = (args: {
  id: TAgendaTelefoneIds;
}) => Promise<number>;

export type TAgendaTelefoneRpc = {
  query: {
    schema: TAgendaTelefoneSchema;
    clear: TAgendaTelefoneClear;
    list: TAgendaTelefoneList;
    read: TAgendaTelefoneRead;
  };
  mutation: {
    create: TAgendaTelefoneCreate;
    update: TAgendaTelefoneUpdate;
    del: TAgendaTelefoneDel;
  };
};

import { TFieldDef, TOrder, TSelect, TTableDef, TWhere } from "@/types";
import { TConnection } from "../../config/connections";

export interface TAgendaTelefonePk {
  agenda_telefone_id?: number;
}
export interface TAgendaTelefone extends TAgendaTelefonePk {
  nome?: string;
  setor?: string;
  email?: string;
}

export type TAgendaTelefoneFields = keyof Required<TAgendaTelefone>;

export type TAgendaTelefoneIds = {
  [pk in keyof Required<TAgendaTelefonePk>]: any;
};
export type TAgendaTelefoneSelect = TSelect<TAgendaTelefoneFields>;
export type TAgendaTelefoneWhere = TWhere<TAgendaTelefoneFields>;
export type TAgendaTelefoneOrder = TOrder<TAgendaTelefoneFields>;

export type TAgendaTelefoneSchema = () => Promise<TFieldDef[]>;
export type TAgendaTelefoneClear = () => Promise<TAgendaTelefone>;
export type TAgendaTelefoneCount = (args: {
  where?: TWhere<TAgendaTelefoneFields>[];
  count?: TSelect<TAgendaTelefoneFields>;
}) => Promise<number>;
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
  select?: TSelect<TAgendaTelefoneFields>;
}) => Promise<TAgendaTelefone>;
export type TAgendaTelefoneUpdate = (args: {
  id: TAgendaTelefoneIds;
  data: TAgendaTelefone;
  select?: TSelect<TAgendaTelefoneFields>;
}) => Promise<TAgendaTelefone>;
export type TAgendaTelefoneDel = (args: {
  id: TAgendaTelefoneIds;
}) => Promise<number>;

export type TAgendaTelefoneModel = {
  connection: TConnection;
  table: TTableDef;
  query: {
    list: TAgendaTelefoneList;
    read: TAgendaTelefoneRead;
  };
  mutation: {
    create: TAgendaTelefoneCreate;
    update: TAgendaTelefoneUpdate;
    del: TAgendaTelefoneDel;
  };
};

export type TAgendaTelefoneRpc = TAgendaTelefoneModel;

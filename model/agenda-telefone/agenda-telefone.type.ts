import { TFieldClient, TOrder, TSelect, TWhere } from "../../types";
//#region import
//#endregion
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

//#region def
//#endregion

export type TAgendaTelefoneCrud = {
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

export type TAgendaTelefoneModel = TAgendaTelefoneCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TAgendaTelefoneRpc = TAgendaTelefoneModel;

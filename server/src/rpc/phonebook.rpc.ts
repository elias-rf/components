import type {
  CreateArgs,
  CurrentUser,
  DelArgs,
  ListArgs,
  ReadArgs,
  Schema,
  UpdateArgs,
} from "@er/types";
import { Id } from "@er/types";
import { Connections } from "../dal/connections";
import {
  PhonebookModel,
  PhonebookRecord,
} from "../model/oftalmo/phonebook.model";

export interface PhonebookRpc {
  phonebookSchema(): Promise<Schema>;
  phonebookList(
    args: ListArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<PhonebookRecord[]>;
  phonebookRead(
    args: ReadArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<PhonebookRecord>;
  phonebookDel(
    args: DelArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
  phonebookCreate(
    args: CreateArgs<PhonebookRecord>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<Id>;
  phonebookUpdate(
    args: UpdateArgs<PhonebookRecord>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<Id>;
}

export function Phonebook(connections: Connections): PhonebookRpc {
  const phonebookModel = new PhonebookModel(connections);
  return {
    async phonebookSchema() {
      return phonebookModel.schema();
    },
    // LIST
    phonebookList({ where, orderBy, limit, select }) {
      return phonebookModel.list(where, orderBy, limit, select);
    },

    // READ
    phonebookRead({ id, select }) {
      return phonebookModel.read(id, select);
    },

    // DEL
    phonebookDel({ id }) {
      return phonebookModel.del(id);
    },

    // CREATE
    async phonebookCreate({ data }) {
      return phonebookModel.create(data);
    },

    // UPDATE
    async phonebookUpdate({ id, data }) {
      return phonebookModel.update(id, data);
    },
  };
}

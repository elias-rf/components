import type {
  CreateArgs,
  CurrentUser,
  DelArgs,
  ListArgs,
  ReadArgs,
  Schema,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../dal/connections";
import { AgendaTelefoneModel, TAgendaTelefone } from "../model";

export type TAgendaTelefoneRpc = {
  agendaTelefoneSchema(): Promise<Schema>;
  agendaTelefoneList(
    args: ListArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TAgendaTelefone[]>;
  agendaTelefoneRead(
    args: ReadArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TAgendaTelefone>;
  agendaTelefoneDel(
    args: DelArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
  agendaTelefoneCreate(
    args: CreateArgs<TAgendaTelefone>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TAgendaTelefone>;
  agendaTelefoneUpdate(
    args: UpdateArgs<TAgendaTelefone>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TAgendaTelefone>;
};

export function agendaTelefoneRpc(
  connections: TConnections
): TAgendaTelefoneRpc {
  const agendaTelefone = new AgendaTelefoneModel(connections);
  return {
    agendaTelefoneSchema() {
      return agendaTelefone.schema();
    },

    // LIST
    agendaTelefoneList({ where, orderBy, limit, select }) {
      return agendaTelefone.list(where, orderBy, limit, select);
    },

    // READ
    agendaTelefoneRead({ pk, select }) {
      return agendaTelefone.read(pk, select);
    },

    // DEL
    agendaTelefoneDel({ pk }) {
      return agendaTelefone.del(pk);
    },

    // CREATE
    agendaTelefoneCreate({ data }) {
      return agendaTelefone.create(data);
    },

    // UPDATE
    agendaTelefoneUpdate({ pk, data }) {
      return agendaTelefone.update(pk, data);
    },
  };
}

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
import { AgendaTelefoneModel } from "../model";
import { TAgendaTelefone } from "../type/agenda-telefone.type";

export type TAgendaTelefoneRpc = {
  agendaTelefoneSchema(): Promise<Schema>;
  agendaTelefoneList(
    args: ListArgs<TAgendaTelefone>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TAgendaTelefone[]>;
  agendaTelefoneRead(
    args: ReadArgs<TAgendaTelefone>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TAgendaTelefone>;
  agendaTelefoneDel(
    args: DelArgs<TAgendaTelefone>,
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
    async agendaTelefoneSchema() {
      return agendaTelefone.schema();
    },

    // LIST
    async agendaTelefoneList(args) {
      return agendaTelefone.list(args);
    },

    // READ
    async agendaTelefoneRead(args) {
      return agendaTelefone.read(args);
    },

    // DEL
    async agendaTelefoneDel(args) {
      return agendaTelefone.del(args);
    },

    // CREATE
    async agendaTelefoneCreate(args) {
      return agendaTelefone.create(args);
    },

    // UPDATE
    async agendaTelefoneUpdate(args) {
      return agendaTelefone.update(args);
    },
  };
}

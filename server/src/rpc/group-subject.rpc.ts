import type {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  Schema,
  UpdateArgs,
} from "@er/types";
import type { TConnections } from "../dal/connections";
import { GroupSubjectModel, TGroupSubject } from "../model";

export interface TGroupSubjectRpc {
  groupSubjectSchema(): Promise<Schema>;
  groupSubjectList(
    listArgs: ListArgs,
    ctx?: RpcContext
  ): Promise<TGroupSubject[]>;
  groupSubjectRead(
    readArgs: ReadArgs,
    ctx?: RpcContext
  ): Promise<TGroupSubject>;
  groupSubjectDel(delArgs: DelArgs, ctx?: RpcContext): Promise<number>;
  groupSubjectCreate(
    createArgs: CreateArgs<TGroupSubject>,
    ctx?: RpcContext
  ): Promise<Id>;
  groupSubjectUpdate(
    updateArgs: UpdateArgs<TGroupSubject>,
    ctx?: RpcContext
  ): Promise<Id>;
}

export function groupSubjectRpc(connections: TConnections): TGroupSubjectRpc {
  const groupSubjectModel = new GroupSubjectModel(connections);

  return {
    // SCHEMA
    async groupSubjectSchema() {
      return groupSubjectModel.schema();
    },

    // LIST
    async groupSubjectList({ where, orderBy, limit, select }) {
      return groupSubjectModel.list(where, orderBy, limit, select);
    },

    // READ
    async groupSubjectRead({ id }) {
      return groupSubjectModel.read(id);
    },

    // DEL
    async groupSubjectDel({ id }) {
      return groupSubjectModel.del(id);
    },

    // CREATE
    async groupSubjectCreate({ data }) {
      return groupSubjectModel.create(data);
    },

    // UPDATE
    async groupSubjectUpdate({ id, data }) {
      return groupSubjectModel.update(id, data);
    },
  };
}

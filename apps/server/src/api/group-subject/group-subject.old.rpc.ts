import type {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  Schema,
  UpdateArgs,
} from "@er/types";
import type { TConnections } from "../../dal/connections";
import { GroupSubjectModel } from "./group-subject.model";
import { TGroupSubject } from "./group-subject.type";

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
    createArgs: CreateArgs,
    ctx?: RpcContext
  ): Promise<TGroupSubject>;
  groupSubjectUpdate(
    updateArgs: UpdateArgs,
    ctx?: RpcContext
  ): Promise<TGroupSubject>;
}

export function groupSubjectRpc(connections: TConnections): TGroupSubjectRpc {
  const groupSubjectModel = new GroupSubjectModel(connections);

  return {
    // SCHEMA
    async groupSubjectSchema() {
      return groupSubjectModel.schema();
    },

    // LIST
    async groupSubjectList(listArgs) {
      return groupSubjectModel.list(listArgs);
    },

    // READ
    async groupSubjectRead(readArgs) {
      return groupSubjectModel.read(readArgs);
    },

    // DEL
    async groupSubjectDel(delArgs) {
      return groupSubjectModel.del(delArgs);
    },

    // CREATE
    async groupSubjectCreate(createArgs) {
      return groupSubjectModel.create(createArgs);
    },

    // UPDATE
    async groupSubjectUpdate(updateArgs) {
      return groupSubjectModel.update(updateArgs);
    },
  };
}

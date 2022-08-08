import {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  Schema,
  UpdateArgs,
} from "@er/types";
import { Connections } from "dal/connections";
import {
  GroupSubjectModel,
  GroupSubjectRecord,
} from "../model/oftalmo/group-subject.model";

type Record = {
  idSubject?: string;
  idGroup?: string;
};

export interface PermissaoRpc {
  permissaoSchema(): Promise<Schema>;
  permissaoList(listArgs: ListArgs): Promise<GroupSubjectRecord[]>;
  permissaoRead(readArgs: ReadArgs): Promise<GroupSubjectRecord>;
  permissaoDel(delArgs: DelArgs): Promise<number>;
  permissaoCreate(
    createArgs: CreateArgs<GroupSubjectRecord>
  ): Promise<string[]>;
  permissaoUpdate(updateArgs: UpdateArgs<GroupSubjectRecord>): Promise<any>;
}

export function Permissao(connections: Connections): PermissaoRpc {
  const groupSubjectModel = new GroupSubjectModel(connections);

  return {
    async permissaoSchema() {
      return groupSubjectModel.schema();
    },
    // LIST
    async permissaoList({ where, orderBy, limit = 1000, select }) {
      return groupSubjectModel.list(where, orderBy, limit, select);
    },

    // READ
    async permissaoRead({ id, select }) {
      return groupSubjectModel.read(id, select);
    },

    // DEL
    async permissaoDel({ id }) {
      return groupSubjectModel.del(id);
    },

    // CREATE
    async permissaoCreate({ data }) {
      return groupSubjectModel.create(data);
    },

    // UPDATE
    async permissaoUpdate({ id, data }) {
      return groupSubjectModel.update(id, data);
    },
  };
}

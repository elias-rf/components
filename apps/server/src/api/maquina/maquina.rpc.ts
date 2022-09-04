import type {
  CreateArgs,
  CurrentUser,
  DelArgs,
  ListArgs,
  ReadArgs,
  Schema,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../../dal/connections";
import { MaquinaModel } from "../maquina/maquina.model";
import { TMaquina, TMaquinaId } from "../maquina/maquina.type";

export type TMaquinaRpc = {
  maquinaSchema(): Promise<Schema>;
  maquinaList(
    args: ListArgs<TMaquina>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TMaquina[]>;
  maquinaRead(
    args: ReadArgs<TMaquinaId, TMaquina>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TMaquina>;
  maquinaDel(
    args: DelArgs<TMaquinaId>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
  maquinaCreate(
    args: CreateArgs<TMaquina>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TMaquina>;
  maquinaUpdate(
    args: UpdateArgs<TMaquinaId, TMaquina>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TMaquina>;
};

export function maquinaRpc(connections: TConnections): TMaquinaRpc {
  const maquina = new MaquinaModel(connections);
  return {
    maquinaSchema() {
      return maquina.schema();
    },

    // LIST
    maquinaList(listArgs) {
      return maquina.list(listArgs);
    },

    // READ
    maquinaRead({ id, select }) {
      return maquina.read({ id, select });
    },

    // DEL
    maquinaDel(delArgs) {
      return maquina.del(delArgs);
    },

    // CREATE
    maquinaCreate(createArgs) {
      return maquina.create(createArgs);
    },

    // UPDATE
    maquinaUpdate(updateArgs) {
      return maquina.update(updateArgs);
    },
  };
}

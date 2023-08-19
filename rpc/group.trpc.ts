import type { TGrupo } from "@/models/others/group.type";
import { publicProcedure, router } from "@/rpc/utils/trpc-server";
import { groupModel } from "../models";
import {
  createZod,
  delZod,
  listZod,
  readZod,
  updateZod,
} from "./utils/inputs";

const model = groupModel;

export const groupRouter = router({
  list: publicProcedure.input(listZod).query((req) => {
    return model.list(req.input) as Promise<TGrupo[]>;
  }),
  read: publicProcedure.input(readZod).query((req) => {
    return model.read(req.input);
  }),
  update: publicProcedure.input(updateZod).mutation((req) => {
    return model.update(req.input);
  }),
  create: publicProcedure.input(createZod).mutation((req) => {
    return model.create(req.input);
  }),
  del: publicProcedure.input(delZod).mutation((req) => {
    return model.del(req.input);
  }),
});

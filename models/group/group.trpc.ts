import type { TGrupo } from "@/models/group/group.type";
import { publicProcedure, router } from "@/utils/trpc/trpc-server";
import {
  createZod,
  delZod,
  listZod,
  readZod,
  updateZod,
} from "../../utils/trpc/inputs";
import { models } from "../models";

const model = models.group;

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

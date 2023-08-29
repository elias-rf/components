import { receberModel } from "@/models";
import { publicProcedure, router } from "@/rpc/utils/trpc-server";
import {
  createZod,
  delZod,
  listZod,
  readZod,
  updateZod,
} from "./utils/inputs";

const model = receberModel;

export const receberRouter = router({
  list: publicProcedure.input(listZod).query((req) => model.list(req.input)),
  read: publicProcedure.input(readZod).query((req) => model.read(req.input)),
  update: publicProcedure
    .input(updateZod)
    .mutation((req) => model.update(req.input)),
  create: publicProcedure
    .input(createZod)
    .mutation((req) => model.create(req.input)),
  del: publicProcedure.input(delZod).mutation((req) => model.del(req.input)),
});
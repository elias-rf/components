import { publicProcedure, router } from "@mono/utils/trpc/trpc-server";
import { zd } from "@mono/utils/zod/zod";
import {
  createZod,
  delZod,
  listZod,
  readZod,
  updateZod,
} from "../../server/lib/trpc/inputs";
import { container } from "../container";

const model = container.resolve("nfEntradaModel");

export const nfEntradaRouter = router({
  list: publicProcedure
    .input(listZod)
    .query((req) => model.query.list(req.input)),
  read: publicProcedure
    .input(readZod)
    .query((req) => model.query.read(req.input)),
  update: publicProcedure
    .input(updateZod)
    .mutation((req) => model.mutation.update(req.input)),
  create: publicProcedure
    .input(createZod)
    .mutation((req) => model.mutation.create(req.input)),
  del: publicProcedure
    .input(delZod)
    .mutation((req) => model.mutation.del(req.input)),
  transferenciaCreate: publicProcedure
    .input(zd.object({ controles: zd.array(zd.string()) }))
    .mutation((req) => model.mutation.transferenciaCreate(req.input)),
});
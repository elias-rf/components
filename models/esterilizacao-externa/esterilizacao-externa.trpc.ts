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

const model = container.resolve("esterilizacaoExternaModel");

export const esterilizacaoExternaRouter = router({
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
  diario: publicProcedure
    .input(zd.object({ inicio: zd.string(), fim: zd.string() }))
    .query((req) => model.query.diario(req.input)),
  mensal: publicProcedure
    .input(zd.object({ mes: zd.string() }))
    .query((req) => model.query.mensal(req.input)),
  modelo: publicProcedure
    .input(zd.object({ data: zd.string(), produto: zd.string() }))
    .query((req) => model.query.modelo(req.input)),
  produto: publicProcedure
    .input(zd.object({ data: zd.string() }))
    .query((req) => model.query.produto(req.input)),
});

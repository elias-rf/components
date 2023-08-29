import { publicProcedure, router } from "@/rpc/utils/trpc-server";
import { zd } from "@/utils/zod/zod";
import { esterilizacaoExternaModel } from "../models";
import {
  createZod,
  delZod,
  listZod,
  readZod,
  updateZod,
} from "./utils/inputs";

const model = esterilizacaoExternaModel;

export const esterilizacaoExternaRouter = router({
  list: publicProcedure.input(listZod).query((req) => model.list(req.input)),
  read: publicProcedure.input(readZod).query((req) => model.read(req.input)),
  update: publicProcedure
    .input(updateZod)
    .mutation((req) => model.update(req.input)),
  create: publicProcedure
    .input(createZod)
    .mutation((req) => model.create(req.input)),
  del: publicProcedure.input(delZod).mutation((req) => model.del(req.input)),
  diario: publicProcedure
    .input(zd.object({ inicio: zd.string(), fim: zd.string() }))
    .query((req) => model.diario(req.input)),
  mensal: publicProcedure
    .input(zd.object({ mes: zd.string() }))
    .query((req) => model.mensal(req.input)),
  modelo: publicProcedure
    .input(zd.object({ data: zd.string(), produto: zd.string() }))
    .query((req) => model.modelo(req.input)),
  produto: publicProcedure
    .input(zd.object({ data: zd.string() }))
    .query((req) => model.produto(req.input)),
});
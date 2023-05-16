import { publicProcedure, router } from "@/utils/trpc/trpc-server";
import { zd } from "@/utils/zod/zod";
import {
  createZod,
  delZod,
  listZod,
  readZod,
  updateZod,
} from "../../utils/trpc/inputs";
import { models } from "../models";

const model = models.cliente;

export const clienteRouter = router({
  list: publicProcedure.input(listZod).query((req) => model.list(req.input)),
  read: publicProcedure.input(readZod).query((req) => model.read(req.input)),
  update: publicProcedure
    .input(updateZod)
    .mutation((req) => model.update(req.input)),
  create: publicProcedure
    .input(createZod)
    .mutation((req) => model.create(req.input)),
  del: publicProcedure.input(delZod).mutation((req) => model.del(req.input)),
  vendaMensalQuantidade: publicProcedure
    .input(
      zd.object({ inicio: zd.string(), fim: zd.string(), cliente: zd.number() })
    )
    .query((req) => model.vendaMensalQuantidade(req.input)),
  vendaMensalValor: publicProcedure
    .input(
      zd.object({ inicio: zd.string(), fim: zd.string(), cliente: zd.number() })
    )
    .query((req) => model.vendaMensalValor(req.input)),
  vendaMensalValorMedio: publicProcedure
    .input(
      zd.object({ inicio: zd.string(), fim: zd.string(), cliente: zd.number() })
    )
    .query((req) => model.vendaMensalValorMedio(req.input)),
});

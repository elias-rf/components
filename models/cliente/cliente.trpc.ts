import {
  createZod,
  delZod,
  listZod,
  readZod,
  updateZod,
} from "../../server/lib/trpc/inputs";
import { publicProcedure, router } from "../../utils/trpc/trpc-server";
import { zd } from "../../utils/zod/zod";
import { container } from "../container";

const model = container.resolve("clienteModel");

export const clienteRouter = router({
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
  vendaMensalQuantidade: publicProcedure
    .input(
      zd.object({ inicio: zd.string(), fim: zd.string(), cliente: zd.number() })
    )
    .query((req) => model.query.vendaMensalQuantidade(req.input)),
  vendaMensalValor: publicProcedure
    .input(
      zd.object({ inicio: zd.string(), fim: zd.string(), cliente: zd.number() })
    )
    .query((req) => model.query.vendaMensalValor(req.input)),
  vendaMensalValorMedio: publicProcedure
    .input(
      zd.object({ inicio: zd.string(), fim: zd.string(), cliente: zd.number() })
    )
    .query((req) => model.query.vendaMensalValorMedio(req.input)),
});

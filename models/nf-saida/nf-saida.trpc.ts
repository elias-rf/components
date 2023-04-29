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

const model = container.resolve("nfSaidaModel");

export const nfSaidaRouter = router({
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
  transferenciaDiario: publicProcedure
    .input(zd.object({ inicio: zd.string(), fim: zd.string() }))
    .query((req) => model.query.transferenciaDiario(req.input)),
  transferenciaMensal: publicProcedure
    .input(zd.object({ mes: zd.string() }))
    .query((req) => model.query.transferenciaMensal(req.input)),
  transferenciaModelo: publicProcedure
    .input(zd.object({ data: zd.string() }))
    .query((req) => model.query.transferenciaModelo(req.input)),
  vendaDiario: publicProcedure
    .input(
      zd.object({
        inicio: zd.string(),
        fim: zd.string(),
        uf: zd.array(zd.string()),
      })
    )
    .query((req) => model.query.vendaDiario(req.input)),
  vendaMensalCliente: publicProcedure
    .input(
      zd.object({
        inicio: zd.string(),
        fim: zd.string(),
        cliente: zd.number(),
      })
    )
    .query((req) => model.query.vendaMensalCliente(req.input)),
  vendaAnalitico: publicProcedure
    .input(
      zd.object({
        inicio: zd.string(),
        fim: zd.string(),
      })
    )
    .query((req) => model.query.vendaAnalitico(req.input)),
});

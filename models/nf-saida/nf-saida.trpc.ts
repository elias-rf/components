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

const model = models.nfSaida;

export const nfSaidaRouter = router({
  list: publicProcedure.input(listZod).query((req) => model.list(req.input)),
  read: publicProcedure.input(readZod).query((req) => model.read(req.input)),
  update: publicProcedure
    .input(updateZod)
    .mutation((req) => model.update(req.input)),
  create: publicProcedure
    .input(createZod)
    .mutation((req) => model.create(req.input)),
  del: publicProcedure.input(delZod).mutation((req) => model.del(req.input)),
  transferenciaDiario: publicProcedure
    .input(zd.object({ inicio: zd.string(), fim: zd.string() }))
    .query((req) => model.transferenciaDiario(req.input)),
  transferenciaMensal: publicProcedure
    .input(zd.object({ mes: zd.string() }))
    .query((req) => model.transferenciaMensal(req.input)),
  transferenciaModelo: publicProcedure
    .input(zd.object({ data: zd.string() }))
    .query((req) => model.transferenciaModelo(req.input)),
  vendaDiario: publicProcedure
    .input(
      zd.object({
        inicio: zd.string(),
        fim: zd.string(),
        uf: zd.array(zd.string()),
      })
    )
    .query((req) => model.vendaDiario(req.input)),
  vendaMensalCliente: publicProcedure
    .input(
      zd.object({
        inicio: zd.string(),
        fim: zd.string(),
        cliente: zd.number(),
      })
    )
    .query((req) => model.vendaMensalCliente(req.input)),
  vendaAnalitico: publicProcedure
    .input(
      zd.object({
        inicio: zd.string(),
        fim: zd.string(),
      })
    )
    .query((req) => model.vendaAnalitico(req.input)),
});

import { publicProcedure, router } from "@mono/utils/trpc/trpc-server";
import { zd } from "@mono/utils/zod/zod";
import {
  createZod,
  delZod,
  idZod,
  listZod,
  readZod,
  selectZod,
  updateZod,
} from "../../server/lib/trpc/inputs";
import { container } from "../container";

const model = container.resolve("ordemProducaoModel");

export const ordemProducaoRouter = router({
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
  controle: publicProcedure
    .input(zd.object({ id: idZod, serie: zd.string() }))
    .query((req) => model.query.controle(req.input)),
  dataFabricacao: publicProcedure
    .input(zd.object({ id: idZod }))
    .query((req) => model.query.dataFabricacao(req.input)),
  dataValidade: publicProcedure
    .input(zd.object({ id: idZod }))
    .query((req) => model.query.dataValidade(req.input)),
  ehControleValido: publicProcedure
    .input(zd.object({ controle: zd.string() }))
    .query((req) => model.query.ehControleValido(req.input)),
  etiquetaExterna: publicProcedure
    .input(zd.object({ id: idZod }))
    .query((req) => model.query.etiquetaExterna(req.input)),
  fromControle: publicProcedure
    .input(zd.object({ controle: zd.string() }))
    .query((req) => model.query.fromControle(req.input)),
  produtoItem: publicProcedure
    .input(zd.object({ id: idZod, select: selectZod }))
    .query((req) => model.query.produtoItem(req.input)),
  produtoPlano: publicProcedure
    .input(zd.object({ id: idZod, select: selectZod }))
    .query((req) => model.query.produtoPlano(req.input)),
});

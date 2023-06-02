import { models } from "@/models/models";
import { publicProcedure, router } from "@/utils/trpc/trpc-server";
import { zd } from "@/utils/zod/zod";
import { zsFilter } from "@/utils/zod/zs-filter";
import {
  createZod,
  delZod,
  listZod,
  readZod,
  selectZod,
  updateZod,
} from "../../utils/trpc/inputs";

const model = models.ordemProducao;

export const ordemProducaoRouter = router({
  list: publicProcedure.input(listZod).query((req) => model.list(req.input)),
  read: publicProcedure.input(readZod).query((req) => model.read(req.input)),
  update: publicProcedure
    .input(updateZod)
    .mutation((req) => model.update(req.input)),
  create: publicProcedure
    .input(createZod)
    .mutation((req) => model.create(req.input)),
  del: publicProcedure.input(delZod).mutation((req) => model.del(req.input)),
  controle: publicProcedure
    .input(zd.object({ id: zsFilter, serie: zd.string() }))
    .query((req) => model.controle(req.input)),
  dataFabricacao: publicProcedure
    .input(zd.object({ id: zsFilter }))
    .query((req) => model.dataFabricacao(req.input)),
  dataValidade: publicProcedure
    .input(zd.object({ id: zsFilter }))
    .query((req) => model.dataValidade(req.input)),
  ehControleValido: publicProcedure
    .input(zd.object({ controle: zd.string() }))
    .query((req) => model.ehControleValido(req.input)),
  etiquetaExterna: publicProcedure
    .input(zd.object({ id: zsFilter }))
    .query((req) => model.etiquetaExterna(req.input)),
  fromControle: publicProcedure
    .input(zd.object({ controle: zd.string() }))
    .query((req) => model.fromControle(req.input)),
  produtoItem: publicProcedure
    .input(zd.object({ id: zsFilter, select: selectZod }))
    .query((req) => model.produtoItem(req.input)),
  produtoPlano: publicProcedure
    .input(zd.object({ id: zsFilter, select: selectZod }))
    .query((req) => model.produtoPlano(req.input)),
});

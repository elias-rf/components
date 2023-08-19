import { ordemProducaoModel } from "@/models";
import { publicProcedure, router } from "@/rpc/utils/trpc-server";
import { zd } from "@/utils/zod/zod";
import {
  createZod,
  delZod,
  listZod,
  readZod,
  selectZod,
  updateZod,
} from "./utils/inputs";

export const ordemProducaoRouter = router({
  list: publicProcedure
    .input(listZod)
    .query((req) => ordemProducaoModel.list(req.input)),
  read: publicProcedure
    .input(readZod)
    .query((req) => ordemProducaoModel.read(req.input)),
  update: publicProcedure
    .input(updateZod)
    .mutation((req) => ordemProducaoModel.update(req.input)),
  create: publicProcedure
    .input(createZod)
    .mutation((req) => ordemProducaoModel.create(req.input)),
  del: publicProcedure
    .input(delZod)
    .mutation((req) => ordemProducaoModel.del(req.input)),
  controle: publicProcedure
    .input(
      zd.object({ id: zd.object({ kOp: zd.string() }), serie: zd.string() })
    )
    .query((req) => ordemProducaoModel.controle(req.input)),
  dataFabricacao: publicProcedure
    .input(zd.object({ id: zd.object({ kOp: zd.string() }) }))
    .query((req) => ordemProducaoModel.dataFabricacao(req.input)),
  dataValidade: publicProcedure
    .input(zd.object({ id: zd.object({ kOp: zd.string() }) }))
    .query((req) => ordemProducaoModel.dataValidade(req.input)),
  ehControleValido: publicProcedure
    .input(zd.object({ controle: zd.string() }))
    .query((req) => ordemProducaoModel.ehControleValido(req.input)),
  etiquetaExterna: publicProcedure
    .input(zd.object({ id: zd.object({ kOp: zd.string() }) }))
    .query((req) => ordemProducaoModel.etiquetaExterna(req.input)),
  fromControle: publicProcedure
    .input(zd.object({ controle: zd.string() }))
    .query((req) => ordemProducaoModel.fromControle(req.input)),
  produtoItem: publicProcedure
    .input(
      zd.object({ id: zd.object({ kOp: zd.string() }), select: selectZod })
    )
    .query((req) => ordemProducaoModel.produtoItem(req.input)),
  produtoPlano: publicProcedure
    .input(
      zd.object({ id: zd.object({ kOp: zd.string() }), select: selectZod })
    )
    .query((req) => ordemProducaoModel.produtoPlano(req.input)),
});

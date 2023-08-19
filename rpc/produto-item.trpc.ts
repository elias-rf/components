import { publicProcedure, router } from "@/rpc/utils/trpc-server";
import { zd } from "@/utils/zod/zod";
import { produtoItemModel } from "../models";
import {
  createZod,
  delZod,
  listZod,
  readZod,
  updateZod,
} from "./utils/inputs";

const model = produtoItemModel;

export const produtoItemRouter = router({
  list: publicProcedure.input(listZod).query((req) => model.list(req.input)),
  read: publicProcedure.input(readZod).query((req) => model.read(req.input)),
  update: publicProcedure
    .input(updateZod)
    .mutation((req) => model.update(req.input)),
  create: publicProcedure
    .input(createZod)
    .mutation((req) => model.create(req.input)),
  del: publicProcedure.input(delZod).mutation((req) => model.del(req.input)),
  produtoPlano: publicProcedure
    .input(
      zd.object({
        id: zd.object({ kProdutoItem: zd.string() }),
        select: zd.array(zd.string()).optional(),
      })
    )
    .query((req) => model.produtoPlano(req.input)),
});

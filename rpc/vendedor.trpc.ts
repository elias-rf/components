import { publicProcedure, router } from "@/rpc/utils/trpc-server";
import { vendedorModel } from "../models";
import {
  createZod,
  delZod,
  listZod,
  readZod,
  updateZod,
} from "./utils/inputs";

export const vendedorRouter = router({
  list: publicProcedure
    .input(listZod)
    .query((req) => vendedorModel.list(req.input)),
  read: publicProcedure
    .input(readZod)
    .query((req) => vendedorModel.read(req.input)),
  update: publicProcedure
    .input(updateZod)
    .mutation((req) => vendedorModel.update(req.input)),
  create: publicProcedure
    .input(createZod)
    .mutation((req) => vendedorModel.create(req.input)),
  del: publicProcedure
    .input(delZod)
    .mutation((req) => vendedorModel.del(req.input)),
});

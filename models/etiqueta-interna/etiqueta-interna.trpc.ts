import { publicProcedure, router } from "@/utils/trpc/trpc-server";
import {
  createZod,
  delZod,
  listZod,
  readZod,
  updateZod,
} from "../../utils/trpc/inputs";
import { container } from "../container";

const model = container.resolve("etiquetaInternaModel");

export const etiquetaInternaRouter = router({
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
});

import {
  createZod,
  delZod,
  listZod,
  readZod,
  updateZod,
} from "../../server/lib/trpc/inputs";
import { publicProcedure, router } from "../../server/trpc";
import { zd } from "../../utils/zod/zod";
import { container } from "../container";

const model = container.resolve("usuarioModel");

export const usuarioRouter = router({
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
  me: publicProcedure.query(() => model.query.me()),
  logout: publicProcedure.mutation(() => model.mutation.logout()),
  login: publicProcedure
    .input(
      zd.object({
        user: zd.string(),
        password: zd.string(),
      })
    )
    .mutation((req) => {
      return model.mutation.login(req.input);
    }),
});

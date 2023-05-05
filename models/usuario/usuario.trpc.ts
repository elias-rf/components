import { publicProcedure, router } from "@/utils/trpc/trpc-server";
import { zd } from "@/utils/zod/zod";
import {
  createZod,
  delZod,
  listZod,
  readZod,
  updateZod,
} from "../../utils/trpc/inputs";
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
  me: publicProcedure.query(({ ctx }) => model.query.me(ctx)),
  logout: publicProcedure.mutation(({ ctx }) => model.mutation.logout(ctx)),
  login: publicProcedure
    .input(
      zd.object({
        user: zd.string(),
        password: zd.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      return model.mutation.login(input, ctx);
    }),
});

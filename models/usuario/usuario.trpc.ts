import { models } from "@/models/models";
import { publicProcedure, router } from "@/utils/trpc/trpc-server";
import { zd } from "@/utils/zod/zod";
import {
  createZod,
  delZod,
  listZod,
  readZod,
  updateZod,
} from "../../utils/trpc/inputs";

const model = models.usuario;

export const usuarioRouter = router({
  list: publicProcedure.input(listZod).query((req) => model.list(req.input)),
  read: publicProcedure.input(readZod).query((req) => model.read(req.input)),
  update: publicProcedure
    .input(updateZod)
    .mutation((req) => model.update(req.input)),
  create: publicProcedure
    .input(createZod)
    .mutation((req) => model.create(req.input)),
  del: publicProcedure.input(delZod).mutation((req) => model.del(req.input)),
  me: publicProcedure.query(({ ctx }) => model.me(ctx)),
  logout: publicProcedure.mutation(({ ctx }) => model.logout(ctx)),
  login: publicProcedure
    .input(
      zd.object({
        user: zd.string(),
        password: zd.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      return model.login(input, ctx);
    }),
});

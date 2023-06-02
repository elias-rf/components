import {
  TCreateArgs,
  TDelArgs,
  TListArgs,
  TReadArgs,
  TUpdateArgs,
} from "@/types";
import { publicProcedure, router } from "@/utils/trpc/trpc-server";

import { zd } from "@/utils/zod/zod";
import { zsId } from "@/utils/zod/zs-id";
import { models } from "../models";

const model = models.groupSubject;

export const groupSubjectRouter = router({
  list: publicProcedure
    .input((qry) => qry as TListArgs)
    .query((req) => {
      return model.list(req.input);
    }),
  read: publicProcedure
    .input((qry) => qry as TReadArgs)
    .query((req) => {
      return model.read(req.input);
    }),
  update: publicProcedure
    .input((qry) => qry as TUpdateArgs)
    .mutation((req) => {
      return model.update(req.input);
    }),
  create: publicProcedure
    .input((qry) => qry as TCreateArgs)
    .mutation((req) => {
      return model.create(req.input);
    }),
  del: publicProcedure
    .input((qry) => qry as TDelArgs)
    .mutation((req) => {
      return model.del(req.input);
    }),
  can: publicProcedure
    .input(zd.object({ id: zsId }))
    .query((req) => model.can(req.input)),
});

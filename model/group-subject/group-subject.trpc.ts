import { container } from "../../model/container";
import {
  TCreateArgs,
  TDelArgs,
  TListArgs,
  TReadArgs,
  TUpdateArgs,
} from "../../types";
import { publicProcedure, router } from "../../utils/trpc/trpc-server";
import { zd } from "../../utils/zod/zod";
const groupSubjectModel = container.resolve("groupSubjectModel");

export const groupSubjectRouter = router({
  list: publicProcedure
    .input((qry) => qry as TListArgs)
    .query((req) => {
      return groupSubjectModel.query.list(req.input);
    }),
  read: publicProcedure
    .input((qry) => qry as TReadArgs)
    .query((req) => {
      return groupSubjectModel.query.read(req.input);
    }),
  update: publicProcedure
    .input((qry) => qry as TUpdateArgs)
    .mutation((req) => {
      return groupSubjectModel.mutation.update(req.input);
    }),
  create: publicProcedure
    .input((qry) => qry as TCreateArgs)
    .mutation((req) => {
      return groupSubjectModel.mutation.create(req.input);
    }),
  del: publicProcedure
    .input((qry) => qry as TDelArgs)
    .mutation((req) => {
      return groupSubjectModel.mutation.del(req.input);
    }),
  can: publicProcedure
    .input(
      zd.object({
        id: zd.object({
          group_id: zd.string(),
          subject_id: zd.string(),
        }),
      })
    )
    .query((req) => groupSubjectModel.query.can(req.input)),
});

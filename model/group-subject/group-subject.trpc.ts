import { container } from "../../model/container";
import { publicProcedure, router } from "../../server/trpc";
import {
  TCreateArgs,
  TDelArgs,
  TListArgs,
  TReadArgs,
  TUpdateArgs,
} from "../../types";
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
});

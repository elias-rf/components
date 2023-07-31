import { TGroupSubject } from "@/models/group-subject/group-subject.type";
import {
  TCreateArgs,
  TDelArgs,
  TListArgs,
  TReadArgs,
  TUpdateArgs,
} from "@/types";
import { publicProcedure, router } from "@/utils/trpc/trpc-server";
import { zd } from "@/utils/zod/zod";
import { models } from "../models";

const model = models.groupSubject;

export const groupSubjectRouter = router({
  list: publicProcedure
    .input((qry) => qry as TListArgs)
    .query((req) => {
      return model.list(req.input) as Promise<TGroupSubject[]>;
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
    .input(zd.object({ user_id: zd.number(), subject_id: zd.string() }))
    .query((req) => model.can(req.input)),
  listPermissions: publicProcedure
    .input(
      zd.object({ group_id: zd.string(), subject_ids: zd.array(zd.string()) })
    )
    .query(
      (req) =>
        model.listPermissions(req.input) as Promise<{ subject_id: string }[]>
    ),
});

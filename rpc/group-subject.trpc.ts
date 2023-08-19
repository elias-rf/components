import { TGroupSubject } from "@/models/others/group-subject.type";
import {
  TCreateArgs,
  TDelArgs,
  TListArgs,
  TReadArgs,
  TUpdateArgs,
} from "@/types";
import { publicProcedure, router } from "@/rpc/utils/trpc-server";
import { zd } from "@/utils/zod/zod";
import { groupSubjectModel } from "../models";

export const groupSubjectRouter = router({
  list: publicProcedure
    .input((qry) => qry as TListArgs)
    .query((req) => {
      return groupSubjectModel.list(req.input) as Promise<TGroupSubject[]>;
    }),
  read: publicProcedure
    .input((qry) => qry as TReadArgs)
    .query((req) => {
      return groupSubjectModel.read(req.input);
    }),
  update: publicProcedure
    .input((qry) => qry as TUpdateArgs)
    .mutation((req) => {
      return groupSubjectModel.update(req.input);
    }),
  create: publicProcedure
    .input((qry) => qry as TCreateArgs)
    .mutation((req) => {
      return groupSubjectModel.create(req.input);
    }),
  del: publicProcedure
    .input((qry) => qry as TDelArgs)
    .mutation((req) => {
      return groupSubjectModel.del(req.input);
    }),
  can: publicProcedure
    .input(zd.object({ kUsuario: zd.number(), idSubject: zd.string() }))
    .query((req) => groupSubjectModel.can(req.input)),
  listPermissions: publicProcedure
    .input(
      zd.object({ idGroup: zd.string(), idSubjectList: zd.array(zd.string()) })
    )
    .query((req) => groupSubjectModel.listPermissions(req.input)),
});

import * as t from "superstruct";
import { TCreateArgs, TDelArgs, TUpdateArgs } from "../../../types";
import { isWhere } from "../../../utils/validate/is-where";
import { publicProcedure } from "../../trpc";

export function crudProcedureFactory(resourceModel: any) {
  return {
    list: publicProcedure
      .input((input) => isWhere(input.where))
      .query((req) => {
        return resourceModel.query.list(req.input);
      }),
    read: publicProcedure
      // .input((qry) => qry as TReadArgs)
      .input(
        t.object({
          id: t.record(t.string(), t.union([t.string(), t.number()])),
        })
      )
      .query((req) => {
        return resourceModel.query.read(req.input);
      }),
    update: publicProcedure
      .input((qry) => qry as TUpdateArgs)
      .mutation((req) => {
        return resourceModel.mutation.update(req.input);
      }),
    create: publicProcedure
      .input((qry) => qry as TCreateArgs)
      .mutation((req) => {
        return resourceModel.mutation.create(req.input);
      }),
    del: publicProcedure
      .input((qry) => qry as TDelArgs)
      .mutation((req) => {
        return resourceModel.mutation.del(req.input);
      }),
  };
}

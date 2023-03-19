import { TConnection, TTableDef } from "../../../types";
import { publicProcedure } from "../../trpc";
import { TCrud } from "../crud/crud.type";
import {
  countZod,
  createZod,
  delZod,
  incrementZod,
  listZod,
  readZod,
  updateZod,
} from "./inputs";

type TModelDefault = TCrud & {
  connection: TConnection;
  table: TTableDef;
};

export function crudProcedureFactory<TModel extends TModelDefault>(
  resourceModel: TModel
) {
  return {
    count: publicProcedure.input(countZod).query((req) => {
      return resourceModel.query.count(req.input);
    }),
    list: publicProcedure.input(listZod).query((req) => {
      return resourceModel.query.list(req.input);
    }),
    read: publicProcedure.input(readZod).query((req) => {
      return resourceModel.query.read(req.input);
    }),
    update: publicProcedure.input(updateZod).mutation((req) => {
      return resourceModel.mutation.update(req.input);
    }),
    create: publicProcedure.input(createZod).mutation((req) => {
      return resourceModel.mutation.create(req.input);
    }),
    del: publicProcedure.input(delZod).mutation((req) => {
      return resourceModel.mutation.del(req.input);
    }),

    increment: publicProcedure.input(incrementZod).mutation((req) => {
      return resourceModel.mutation.increment(req.input);
    }),
  };
}

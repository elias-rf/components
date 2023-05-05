import { publicProcedure, router } from "@/utils/trpc/trpc-server";
import {
  createZod,
  delZod,
  listZod,
  readZod,
  updateZod,
} from "../../utils/trpc/inputs";
import { container } from "../container";

const model = container.resolve("cidadeModel");

export const cidadeRouter = router({
  list: publicProcedure.input(listZod).query((req) => {
    return model.query.list(req.input);
  }),
  read: publicProcedure.input(readZod).query((req) => {
    return model.query.read(req.input);
  }),
  update: publicProcedure.input(updateZod).mutation((req) => {
    return model.mutation.update(req.input);
  }),
  create: publicProcedure.input(createZod).mutation((req) => {
    return model.mutation.create(req.input);
  }),
  del: publicProcedure.input(delZod).mutation((req) => {
    return model.mutation.del(req.input);
  }),
});

import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const produtoControleModel = container.resolve("produtoControleModel");

export const produtoControleRouter = router(
  crudProcedureFactory(produtoControleModel)
);

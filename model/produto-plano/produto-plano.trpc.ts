import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const produtoPlanoModel = container.resolve("produtoPlanoModel");

export const produtoPlanoRouter = router(
  crudProcedureFactory(produtoPlanoModel)
);

import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const produtoCategoriaModel = container.resolve("produtoCategoriaModel");

export const produtoCategoriaRouter = router(
  crudProcedureFactory(produtoCategoriaModel)
);

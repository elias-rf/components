import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const vendedorMetaModel = container.resolve("vendedorMetaModel");

export const vendedorMetaRouter = router(
  crudProcedureFactory(vendedorMetaModel)
);

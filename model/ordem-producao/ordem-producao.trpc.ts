import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const ordemProducaoModel = container.resolve("ordemProducaoModel");

export const ordemProducaoRouter = router(
  crudProcedureFactory(ordemProducaoModel)
);

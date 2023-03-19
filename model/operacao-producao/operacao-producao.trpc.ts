import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const operacaoProducaoModel = container.resolve("operacaoProducaoModel");

export const operacaoProducaoRouter = router(
  crudProcedureFactory(operacaoProducaoModel)
);

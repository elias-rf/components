import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const ordemProducaoOperacaoModel = container.resolve(
  "ordemProducaoOperacaoModel"
);

export const ordemProducaoOperacaoRouter = router(
  crudProcedureFactory(ordemProducaoOperacaoModel)
);

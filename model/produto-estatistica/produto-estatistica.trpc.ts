import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const produtoEstatisticaModel = container.resolve("produtoEstatisticaModel");

export const produtoEstatisticaRouter = router(
  crudProcedureFactory(produtoEstatisticaModel)
);

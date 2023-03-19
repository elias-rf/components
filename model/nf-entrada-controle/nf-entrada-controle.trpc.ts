import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const nfEntradaControleModel = container.resolve("nfEntradaControleModel");

export const nfEntradaControleRouter = router(
  crudProcedureFactory(nfEntradaControleModel)
);

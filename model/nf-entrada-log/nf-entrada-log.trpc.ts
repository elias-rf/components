import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const nfEntradaLogModel = container.resolve("nfEntradaLogModel");

export const nfEntradaLogRouter = router(
  crudProcedureFactory(nfEntradaLogModel)
);

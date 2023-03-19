import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const etiquetaExternaModel = container.resolve("etiquetaExternaModel");

export const etiquetaExternaRouter = router(
  crudProcedureFactory(etiquetaExternaModel)
);

import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const etiquetaInternaModel = container.resolve("etiquetaInternaModel");

export const etiquetaInternaRouter = router(
  crudProcedureFactory(etiquetaInternaModel)
);

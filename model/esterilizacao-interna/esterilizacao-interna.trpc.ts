import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const esterilizacaoInternaModel = container.resolve(
  "esterilizacaoInternaModel"
);

export const esterilizacaoInternaRouter = router(
  crudProcedureFactory(esterilizacaoInternaModel)
);

import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const esterilizacaoExternaModel = container.resolve(
  "esterilizacaoExternaModel"
);

export const esterilizacaoExternaRouter = router(
  crudProcedureFactory(esterilizacaoExternaModel)
);

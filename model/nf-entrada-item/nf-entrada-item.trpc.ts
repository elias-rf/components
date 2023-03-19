import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const nfEntradaItemModel = container.resolve("nfEntradaItemModel");

export const nfEntradaItemRouter = router(
  crudProcedureFactory(nfEntradaItemModel)
);

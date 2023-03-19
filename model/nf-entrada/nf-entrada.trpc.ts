import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const nfEntradaModel = container.resolve("nfEntradaModel");

export const nfEntradaRouter = router(crudProcedureFactory(nfEntradaModel));

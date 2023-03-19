import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const nfSaidaModel = container.resolve("nfSaidaModel");

export const nfSaidaRouter = router(crudProcedureFactory(nfSaidaModel));

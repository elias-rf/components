import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const nfSaidaFvModel = container.resolve("nfSaidaFvModel");

export const nfSaidaFvRouter = router(crudProcedureFactory(nfSaidaFvModel));

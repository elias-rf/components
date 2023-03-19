import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const nfSaidaItemModel = container.resolve("nfSaidaItemModel");

export const nfSaidaItemRouter = router(crudProcedureFactory(nfSaidaItemModel));

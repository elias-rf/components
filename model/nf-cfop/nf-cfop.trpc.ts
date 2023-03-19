import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const nfCfopModel = container.resolve("nfCfopModel");

export const nfCfopRouter = router(crudProcedureFactory(nfCfopModel));

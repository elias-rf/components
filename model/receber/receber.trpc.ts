import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const receberModel = container.resolve("receberModel");

export const receberRouter = router(crudProcedureFactory(receberModel));

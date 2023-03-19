import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const estoqueModel = container.resolve("estoqueModel");

export const estoqueRouter = router(crudProcedureFactory(estoqueModel));

import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const empregadoModel = container.resolve("empregadoModel");

export const empregadoRouter = router(crudProcedureFactory(empregadoModel));

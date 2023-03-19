import { crudProcedureFactory } from "../../server/lib/trpc/crudProcedureFactory";
import { router } from "../../server/trpc";
import { container } from "../container";

const maquinaModel = container.resolve("maquinaModel");

export const maquinaRouter = router(crudProcedureFactory(maquinaModel));
